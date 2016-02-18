var Device = require('zetta').Device
var util = require('util')

var LIGHT = module.exports = function(light) {
  this.light = light
  Device.call(this)
}

util.inherits(LIGHT, Device);


LIGHT.prototype.init = function(config) {

  // Set up the state machine
  config
    .type('light')
    .name(this.light)
    .state('off')
    .when('off', { allow: ['turnOn'] })
    .when('on', { allow: ['turnOff'] })
    .map('turnOff', this.turnOff)
    .map('turnOn', this.turnOn)
}


LIGHT.prototype.turnOff = function(cb) {
  this.state = 'off'
  console.log(this.name + " turned off..")
  cb();
}

LIGHT.prototype.turnOn = function(cb) {
  console.log(this.name + " turned on..")
  this.state = 'on';
  cb();
}
