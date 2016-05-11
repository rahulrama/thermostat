'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat()
  })

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  })

  it('can increase the temperature with the up button', function() {
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  })

  it('can decrease the temperature with the down button', function() {
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  })

  it('has a minimum setting of 10 degrees', function() {
    for(var i = 0; i < 11; i++) {
      thermostat.down()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10)
  })

  it('has power saving mode on by default', function () {
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  })

})
