'use strict';

function Thermostat(default_temp = 20) {
  this.DEFAULT_TEMPERATURE = default_temp
  this.temperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function() {
  this.temperature += 1
}
