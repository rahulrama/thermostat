'use strict';

function Thermostat(default_temp = 20) {
  this.DEFAULT_TEMPERATURE = default_temp
  this.temperature = this.DEFAULT_TEMPERATURE
  this.MINIMUM_TEMPERATURE = 10
  this.powerSavingModeOn = true
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function() {
  this.temperature += 1
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return
  }
  this.temperature -= 1
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingModeOn === true
}
