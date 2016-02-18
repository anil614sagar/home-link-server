var Device = require('zetta').Device
var util = require('util')



var thermostat = module.exports = function() {
  Device.call(this)
  this.temp = Math.floor(Math.random()*(35-15+1)+15);
}

util.inherits(thermostat, Device);


thermostat.prototype.init = function(config) {

  // Set up the state machine
  config
    .type('thermostat')
    .name('Living Room Thermostat')
    .state('online')
    .monitor('temp')
    .when('online', { allow: ['increaseTemp', 'decreaseTemp', 'setTemp'] })
    .map('increaseTemp', this.increaseTemp)
    .map('decreaseTemp', this.decreaseTemp)
    .map('setTemp', this.setTemp, [{ name: 'temp', title: 'Set Temparature', type: 'range',
      min: 15, max: 35, step: 1, units: 'celsius'}])
}



thermostat.prototype.increaseTemp = function(cb) {
  if (this.temp < 35) {
    this.temp = this.temp + 1;
    console.log("Temparature Set to : " + this.temp)
  }
  cb()
}

thermostat.prototype.decreaseTemp = function(cb) {
  if (this.temp > 15) {
    this.temp = this.temp - 1;
    console.log("Temparature Set to : " + this.temp)
  }
  cb()
}

thermostat.prototype.setTemp = function(temp, cb) {
  this.temp = temp
  console.log("Temparature Set to : " + this.temp)
  cb()
}