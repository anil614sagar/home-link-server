/**
 * Created by Anil on 18/02/16.
 */
var Device = require('zetta').Device
var util = require('util')

var dishWasher = module.exports = function() {
  Device.call(this)
}

util.inherits(dishWasher, Device);


dishWasher.prototype.init = function(config) {

  // Set up the state machine
  config
    .type('dish-washer')
    .name('Dish Washer')
    .state('off')
    .when('off', { allow: ['turnOn'] })
    .when('on', { allow: ['turnOff'] })
    .map('turnOff', this.turnOff)
    .map('turnOn', this.turnOn)
}


dishWasher.prototype.turnOff = function(cb) {
  this.state = 'off'
  console.log(this.name + " turned off..")
  cb();
}

dishWasher.prototype.turnOn = function(cb) {
  console.log(this.name + " turned on..")
  this.state = 'on';
  cb();
}
