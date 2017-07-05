'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')

describe('SubwayGate', function () {
  const gate = new challenge.SubwayGate()

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
})
