'use strict'

const SubwayGate = function () {
  this.state = 'closed'
}

SubwayGate.prototype.tapCard = function () {
  this.state = 'open'
}

SubwayGate.prototype.walkThrough = function () {
  if (this.state === 'open') {
    this.state = 'closed'
    return true
  } else {
    return false
  }
}

SubwayGate.prototype.exit = function () {
  this.state = 'open'
}

module.exports = {
  SubwayGate
}
