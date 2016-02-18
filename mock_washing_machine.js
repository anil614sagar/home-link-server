/**
 * Created by Anil on 18/02/16.
 */
var Device = require('zetta').Device
var util = require('util')

var washingMachine = module.exports = function() {
  Device.call(this)
}

util.inherits(washingMachine, Device);


washingMachine.prototype.init = function(config) {

  // Set up the state machine
  config
    .type('Washing-Machine')
    .name('Washing Machine')
    .state('off')
    .when('off', { allow: ['turnOn'] })
    .when('on', { allow: ['turnOff'] })
    .map('turnOff', this.turnOff)
    .map('turnOn', this.turnOn)
}


washingMachine.prototype.turnOff = function(cb) {
  this.state = 'off'
  console.log(this.name + " turned off..")
  cb();
}

washingMachine.prototype.turnOn = function(cb) {
  console.log(this.name + " turned on..")
  this.state = 'on';
  cb();
}
