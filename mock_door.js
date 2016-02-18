var Device = require('zetta').Device
var util = require('util')

var DOOR = module.exports = function(door) {
  this.door = door
  Device.call(this)
}

util.inherits(DOOR, Device);


DOOR.prototype.init = function(config) {

  // Set up the state machine
  config
    .type('door')
    .name(this.door)
    .state('closed')
    .when('closed', { allow: ['open'] })
    .when('open', { allow: ['close'] })
    .map('open', this.open)
    .map('close', this.close)
}


DOOR.prototype.open = function(cb) {
  this.state = 'open';
  console.log(this.name + " opened..")
  cb();
}

DOOR.prototype.close = function(cb) {
  this.state = 'closed';
  console.log(this.name + " closed..")
  cb();
}
