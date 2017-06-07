'use strict'

const SubwayGate = function () {
  this.state = 'closed'
}

SubwayGate.prototype.tapCard = function (charlieCard) {
  if (charlieCard.monthlyValue) {
    this.state = 'open'
    return true
  } else {
    return false
  }
}

SubwayGate.prototype.insertTicket = function (charlieTicket) {
  if (this.state === 'closed') {
    if (charlieTicket.value >= 2.25) {
      this.state = 'open'
      charlieTicket.value -= 2.25
      return true
    } else {
      return false
    }
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
