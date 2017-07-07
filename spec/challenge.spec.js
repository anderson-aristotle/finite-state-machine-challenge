'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')
const gate = new challenge.SubwayGate()

describe('SubwayGate', function () {
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

  it('is instantiated with an immutable _state property', function () {
    expect(gate).to.have.ownPropertyDescriptor('_state', {
      configurable: true,
      enumerable: false,
      writable: false,
      value: 'closed'
    })
  })

  it('has a state method that returns the value of _state', function () {
    expect(typeof gate.state).to.equal('function')
    expect(gate.state()).to.equal(gate._state)
  })
})

describe('exit method', function () {
  it('transitions _state to open if invoked while _state is closed', function () {
    gate.exit()
    expect(gate._state).to.equal('open')
  })

  it('does not transition _state to closed if invoked while _state is open', function () {
    gate.exit()
    expect(gate._state).to.equal('open')
  })
})

describe('walkThrough method', function () {
  it('transitions _state to closed if invoked while _state is open', function () {
    gate.walkThrough()
    expect(gate._state).to.equal('closed')
  })

  it('returns false if invoked while _state is closed, and does not transition _state to open', function () {
    expect(gate.walkThrough()).to.equal(false)
    expect(gate.state()).to.equal('closed')
  })
})

describe('insertTicket method with sufficient value', function () {
  const charlieTicket = {
    value: 10
  }
  const initialValue = charlieTicket.value
  it('transitions _state to open if invoked while _state is closed and charlieTicket has enough value', function () {
    gate.insertTicket(charlieTicket)
    expect(gate.state()).to.equal('open')
  })

  it('subtracts 2.25 from charlieTicket\'s value after transitioning _state to open', function () {
    expect(charlieTicket.value).to.equal(initialValue - 2.25)
  })
})
