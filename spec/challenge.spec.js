'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')

describe('SubwayGate', function () {
  const gate = new challenge.SubwayGate()

  it('has an initial state that is closed', function () {
    expect(gate.state).to.equal('closed')
  })

  it('has a tapCard method', function () {
    expect(typeof gate.tapCard).to.equal('function')
  })

  it('has an insertTicket method', function () {
    expect(typeof gate.insertTicket).to.equal('function')
  })

  it('has a walkThrough method', function () {
    expect(typeof gate.walkThrough).to.equal('function')
  })

  it('has an exit method', function () {
    expect(typeof gate.exit).to.equal('function')
  })

  describe('tapCard method', function () {
    const charlieCard = {
      monthlyValue: true
    }

    it('does not transition state to open if monthlyValue is not true', function () {
      gate.state = 'closed'
      charlieCard.monthlyValue = false
      gate.tapCard(charlieCard)
      expect(gate.state).to.equal('closed')
    })

    it("transitions state to open if the charlieCard's monthlyValue is true", function () {
      charlieCard.monthlyValue = true
      gate.tapCard(charlieCard)
      expect(gate.state).to.equal('open')
    })

    it('does not transition state to closed if invoked while state is open', function () {
      gate.state = 'open'
      gate.tapCard(charlieCard)
      expect(gate.state).to.equal('open')
    })
  })

  describe('insertTicket method', function () {
    const charlieTicket = {
      value: 10
    }
    let initialValue = charlieTicket.value

    it('transitions state to open if the charlieTicket has a value greater or equal to 2.25', function () {
      gate.state = 'closed'
      gate.insertTicket(charlieTicket)
      expect(gate.state).to.equal('open')
    })

    it('subtracts 2.25 from charlieTicket after successfully transitioning state to open', function () {
      expect(charlieTicket.value).to.equal(initialValue - 2.25)
    })

    it('does not subtract 2.25 from charlieTicket if insertTicket is invoked while state is currently open', function () {
      gate.insertTicket(charlieTicket)
      expect(charlieTicket.value).to.equal(7.75)
    })

    it("does not transition state to open if charlieTicket's value is less than 2.25", function () {
      charlieTicket.value = 2.24
      gate.state = 'closed'
      gate.insertTicket(charlieTicket)
      expect(gate.state).to.equal('closed')
    })

    it("does not subtract from charlieTicket's value if it has less than 2.25", function () {
      initialValue = charlieTicket.value
      gate.insertTicket(charlieTicket)
      expect(charlieTicket.value).to.equal(initialValue)
    })
  })

  describe('walkThrough method', function () {
    it('returns false if state is currently closed', function () {
      gate.state = 'closed'
      expect(gate.walkThrough()).to.equal(false)
    })

    it('transitions state to closed if state is currently open', function () {
      gate.state = 'open'
      gate.walkThrough()
      expect(gate.state).to.equal('closed')
    })
  })

  describe('exit method', function () {
    it('transitions state to open', function () {
      gate.exit()
      expect(gate.state).to.equal('open')
    })
  })
})
