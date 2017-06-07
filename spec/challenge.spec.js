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
    expect(gate.tapCard).to.be.a.function
  })

  it('has an insertTicket method', function () {
    expect(gate.insertTicket).to.be.a.function
  })

  it('has a walkthrough method', function () {
    expect(gate.walkthrough).to.be.a.function
  })

  it('has an exit method', function () {
    expect(gate.exit).to.be.a.function
  })

  describe('tapCard method', function () {
    const charlieCard = {
      monthlyValue: true
    }

    it("transitions state to open if the charlieCard's monthlyValue is true", function () {
      gate.tapCard(charlieCard)
      expect(gate.state).to.equal('open')
    })

    it('does not transition state to closed if invoked while state is open', function () {
      gate.state = 'open'
      expect(gate.tapCard(charlieCard)).to.equal(true)
      expect(gate.state).to.equal('open')
    })

    it('does not transition state to open if monthlyValue is false', function () {
      gate.state = 'closed'
      charlieCard.monthlyValue = false
      expect(gate.tapCard(charlieCard)).to.equal(false)
    })
  })

  describe('insertTicket method', function () {
    const charlieTicket = {
      value: 10
    }
    const initialValue = charlieTicket.value

    it('transitions state to open if the charlieTicket has a value greater or equal to 2.25', function () {
      gate.insertTicket(charlieTicket)
      expect(gate.state).to.equal('open')
    })

    it('subtracts 2.25 from charlieTicket after successfully transitioning state to open', function () {
      expect(charlieTicket.value).to.equal(initialValue - 2.25)
    })

    it('does not subtract 2.25 from charlieTicket if insertTicket is invoked while state is currently open', function () {
      charlieTicket.value = 10
      gate.state = 'open'
      gate.insertTicket(charlieTicket)
      expect(charlieTicket.value).to.equal(10)
    })
    //   if (gate.insertTicket(charlieTicket)) {
    //     expect(gate.state).to.equal('open')
    //   } else {
    //     expect(gate.state).to.equal('closed')
    //   }
    //   if (charlieTicket.value >= 2.25) {
    //     expect(charlieTicket.value).to.equal(ticketValue - 2.25)
    //   }
    //   gate.state = 'closed'
    // })
  })

    // it('has an insertTicket method that transitions state to open if the Charlie Ticket has a value greater or equal to 2.25 & then subtracts 2.25 from the value', function () {
    //   const ticketValue = challenge.charlieTicket.value
    //   if (gate.insertTicket()) {
    //     expect(gate.state).to.equal('open')
    //   } else {
    //     expect(gate.state).to.equal('closed')
    //   }
    //   if (challenge.charlieTicket.value >= 2.25) {
    //     expect(challenge.charlieTicket.value).to.equal(ticketValue - 2.25)
    //   }
    //   gate.walkThrough()
    // })
    //
    // it('has an insertTicket method that does not transition state or subtract value from charlieTicket if state is open', function () {
    //   gate.tapCard()
    //   const ticketValue = challenge.charlieTicket.value
    //   gate.insertTicket()
    //   expect(gate.state).to.equal('open')
    //   expect(challenge.charlieTicket.value).to.equal(ticketValue)
    // })
    //
    // it('has a walkThrough method that transitions state to closed if state is currently open', function () {
    //   gate.tapCard()
    //   expect(gate.walkThrough()).to.equal(true)
    //   expect(gate.walkThrough).to.be.a.function
    //   gate.walkThrough()
    //   expect(gate.state).to.equal('closed')
    // })
    //
    // it('has a walkThrough method that returns false if state is currently closed', function () {
    //   expect(gate.walkThrough()).to.equal(false)
    // })
    //
    // it('has an exit method that transitions state to open', function () {
    //   expect(gate.exit).to.be.a.function
    //   gate.exit()
    //   expect(gate.state).to.equal('open')
    // })
})
