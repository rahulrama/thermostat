'use strict'

$(document).ready(function(){
  var thermostat = new Thermostat
  var city

  function getSettings(){
		$.getJSON('http://localhost:4567/settings', function(data){
		var request = data
		thermostat.temperature = request.temperature
		updateTemperature()
		if(request.powerSavingModeOn) {
      $('#power-saving-status').text('on')} else {
      $('#power-saving-status').text('off')
    }
		thermostat.powerSavingModeOn = request.powerSavingModeOn
    city = request.city
    displayWeather(city)
		})
	}

  getSettings()



  $('#current-city').change(function(){
    city = $('#current-city').val()
    displayWeather(city)
  })


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
    postSettings(thermostat.getCurrentTemperature(), thermostat.powerSavingModeOn, city)
  })

  $('#powersaving-on').on('click', function(){
    thermostat.switchPowerSavingModeOn()
    $('#power-saving-status').text('on')
      postSettings(thermostat.getCurrentTemperature(), thermostat.powerSavingModeOn, city)
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff()
    $('#power-saving-status').text('off')
    postSettings(thermostat.getCurrentTemperature(), thermostat.powerSavingModeOn, city)
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature())
    $('#temperature').attr('class', thermostat.energyUsage())
    postSettings(thermostat.getCurrentTemperature(), thermostat.powerSavingModeOn, city)
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
    var units = '&units=metric'
    $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
   })
   postSettings(thermostat.getCurrentTemperature(), thermostat.powerSavingModeOn, city)
  }

  function postSettings(temperature, powerSavingModeOn, city){
    $.ajax ({
  		type: "POST",
  		url: "http://localhost:4567/settings",
  		dataType: "json",
  		data: JSON.stringify({"temperature":temperature,"powerSavingModeOn":powerSavingModeOn, "city":city}),
      // contentType: "application/json; charset=utf-8",
      failure: function(errMsg) {
        alert(errMsg)
      }
    })
  }
})
