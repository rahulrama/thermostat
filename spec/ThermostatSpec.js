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
})
