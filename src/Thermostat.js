'use strict';

function Thermostat(default_temp = 20) {
  this.DEFAULT_TEMPERATURE = default_temp
  this.temperature = this.DEFAULT_TEMPERATURE
  this.MINIMUM_TEMPERATURE = 10
  this.powerSavingModeOn = true
  this.MAX_LIMIT_PSM_ON = 25
  this.MAX_LIMIT_PSM_OFF = 32
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return
  }
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

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingModeOn = false
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingModeOn = true
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === true) {
    return this.temperature === this.MAX_LIMIT_PSM_ON
  }
  return this.temperature === this.MAX_LIMIT_PSM_OFF
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage'
  }
  if(this.temperature >= this.MAX_LIMIT_PSM_ON) {
    return 'high-usage'
  }
  return 'medium-usage'
}
