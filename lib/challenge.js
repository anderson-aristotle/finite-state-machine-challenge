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

module.exports = {
  SubwayGate
}
