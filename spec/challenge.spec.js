'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')

describe('Finite State Machine', function () {
  const gate = new challenge.SubwayGate()

  it('has an initial state that is false', function () {
    expect(gate.state).to.equal(false)
  })

  it('has a walkThrough method that transitions state to false', function () {
    gate.walkThrough()
    expect(gate.state).to.equal(false)
  })
})
