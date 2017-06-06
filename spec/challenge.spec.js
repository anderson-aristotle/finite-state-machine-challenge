'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')

describe('Finite State Machine', function () {
  const gate = new challenge.SubwayGate()

  it('has an initial state that is closed', function () {
    expect(gate.state).to.equal('closed')
  })

  it("has a tapCard method that transitions state to open if the charlieCard's monthlyValue is true", function () {
    expect(gate.tapCard).to.be.a.function
    gate.tapCard()
    expect(gate.state).to.equal('open')
    expect(gate.tapCard()).to.equal(true)
    gate.walkThrough()
  })

  it('has a walkThrough method that transitions state to closed if state is currently open', function () {
    gate.tapCard()
    expect(gate.walkThrough()).to.equal(true)
    expect(gate.walkThrough).to.be.a.function
    gate.walkThrough()
    expect(gate.state).to.equal('closed')
  })

  it('has a walkThrough method that returns false if state is currently closed', function () {
    expect(gate.walkThrough()).to.equal(false)
  })

  it('has an exit method that transitions state to open', function () {
    expect(gate.exit).to.be.a.function
    gate.exit()
    expect(gate.state).to.equal('open')
  })
})
