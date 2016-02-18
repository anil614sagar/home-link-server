module.exports = function(server) {
  var thermoStatQuery = server.where({type: 'thermostat'});
  var tempSensorQuery = server.where({type: 'temperature-sensor'});

  server.observe([thermoStatQuery, tempSensorQuery],
    function(thermostat, tempSensor) {
      thermostat.streams.temp.on('data', function(msg) {
        setTimeout(function(){ tempSensor.temp = msg.data }, 2000)
      });
    });
}