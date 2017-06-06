'use strict'

const card = true

const SubwayGate = function () {
  this.state = false
}

SubwayGate.prototype.walkThrough = function () {
  this.state = false
}

SubwayGate.prototype.exit = function () {
  this.state = true
  this.walkThrough()
}

SubwayGate.prototype.enter = function () {
  if (card) {
    this.state = true
    this.walkThrough()
  }
}

module.exports = {
  SubwayGate
}
