$(document).ready(function(){
  var thermostat = new Thermostat
  $('#temperature').text(thermostat.temperature)

  $('#temperature-up').on('click', function() {
    thermostat.up()
    updateTemperature()
  })

  $('#temperature-down').click(function(){
    thermostat.down()
    updateTemperature()
  })

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature()
    updateTemperature()
  })

  $('#powersaving-on').on('click', function(){
    thermostat.switchPowerSavingModeOn()
    $('#power-saving-status').text('on')
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff()
    $('#power-saving-status').text('off')
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature())
    $('#temperature').attr('class', thermostat.energyUsage())
  }
})
