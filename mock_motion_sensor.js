var Device = require('zetta').Device
var util = require('util')


var READ_INTERVAL = 5000;

var motionSensor = module.exports = function(door) {
  Device.call(this)
  this.motionStatus = 'noMotion'
}

util.inherits(motionSensor, Device);


motionSensor.prototype.init = function(config) {

  // Set up the state machine
  config
    .type('motion-sensor')
    .name('Living Room Motion Sensor')
    .monitor('motionStatus')


  var self = this;

  setInterval(function() {
    var state
    var pirSensorValue = Math.round(Math.random())
    if (pirSensorValue == 0) {
      state = 'noMotion'
      console.log("No motion detected...")
    } else {
      state = 'motion'
      console.log("ALERT !! ALERT !! Motion detected...")
    }
    self.motionStatus = state
  }, READ_INTERVAL);
}
