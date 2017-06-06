'use strict'

const card = true

const SubwayGate = function () {
  this.state = 'closed'
}

SubwayGate.prototype.walkThrough = function () {
  this.state = 'closed'
}

SubwayGate.prototype.exit = function () {
  this.state = 'open'
  this.walkThrough()
}

SubwayGate.prototype.enter = function () {
  if (card) {
    this.state = 'open'
    this.walkThrough()
  }
}

module.exports = {
  SubwayGate
}
