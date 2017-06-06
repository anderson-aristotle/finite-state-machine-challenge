'use strict'

const charlieCard = {
  monthlyValue: true
}

const SubwayGate = function () {
  this.state = 'closed'
}

SubwayGate.prototype.tapCard = function () {
  if (charlieCard.monthlyValue) {
    this.state = 'open'
    return true
  } else {
    return false
  }
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
