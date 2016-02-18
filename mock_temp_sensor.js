var Device = require('zetta').Device
var util = require('util')


var READ_INTERVAL = 5000;

var tempSensor = module.exports = function() {
  Device.call(this)
  this.temp = Math.floor(Math.random()*(35-15+1)+15);
}

util.inherits(tempSensor, Device);


tempSensor.prototype.init = function(config) {

  // Set up the state machine
  config
    .type('temperature-sensor')
    .name('Living Room Temparature Sensor')
    .monitor('temp')
}
