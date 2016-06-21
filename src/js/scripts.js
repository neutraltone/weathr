(function ($, window, document, undefined) {

	'use strict';

	$(function () {

		// Global Variables
		var logo              = document.getElementById('logo');
		var background        = document.getElementById('background');
		var weatherContainer  = document.getElementById('weatherContainer');
		var weatherTitle      = document.getElementById('weatherTitle');
		var weatherDesc       = document.getElementById('weatherDesc');
		var weatherIcon       = document.getElementById('weatherIcon');
		var locationForm      = document.getElementById('locationForm');
		var locationContainer = document.getElementById('locationContainer');
		var locationInput     = document.getElementById('locationInput');

		// Get location with Geolocation API
		function getLocation() {

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(getNearestCity);
			} else {
				locationInput.placeholder='Search for Town...';
			}

		}

		getLocation();

		// Reverse geocode to nearest village / town / city
		function getNearestCity(position) {

			var lat = position.coords.latitude;
			var lng = position.coords.longitude;

			var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true';

			$.ajax({
				dataType: 'json',
				url: url,
				success: function(data){
					console.log('Google Maps Location JSON:');
					console.log(data);

					// Store locality in variable
					/* jshint camelcase: false */
					var locality = data.results[0].address_components[2].short_name;

					// Replace placeholder with locality
					locationInput.placeholder = locality;

					weather(lat, lng);
				}
			});

		}

		// Get data from openweathermap.org
		function weather(lat, lng) {

			var apikey         = 'f0caebbbb4e0d5c3265bd231ba822360';
			var openWeatherMap = '//api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&mode=json&APPID=' + apikey;

			// Log OpenWeatherMap API URL
			console.log('\nOpenWeatherMap API URL:\n', openWeatherMap);

			$.ajax({
				dataType: 'jsonp',
				url: openWeatherMap,
				success: function(data) {
					// Log data returned from OpenWeatherMap API
					console.log('\nOpenWeatherMap JSON:');
					console.dir(data);
					console.log('\nOpenWeatherMap Weather JSON:');
					console.dir(data.weather[0]);

					weatherData(data);
				}
			});

		}

		// Handle and process weather data
		function weatherData(data) {

			// Weather data variables
			var weatherDataID    = data.weather[0].id;
			var weatherDataTitle = data.weather[0].main;
			var weatherDataDesc  = data.weather[0].description;
			var weatherJson      = '/assets/data/weather.json';

			// Log retrived weather variables
			console.log(
				'\nEchoed Vars: \n',
				'weatherDataID: ' + weatherDataID + '\n',
				'weatherDataTitle: ' + weatherDataTitle + '\n',
				'weatherDataDesc: ' + weatherDataDesc + '\n',
				'weatherJson: ' + weatherJson + '\n'
			);

			function showWeatherData() {
				weatherTitle.innerHTML = weatherDataTitle;
				weatherDesc.innerHTML  = weatherDataDesc;

				logo.className              = logo.className + ' loaded';
				background.className        = background.className + ' loaded';
				locationContainer.className = locationContainer.className + ' loaded';
				weatherTitle.className      = weatherTitle.className + ' loaded';
				weatherDesc.className       = weatherDesc.className + ' loaded';
				weatherIcon.className       = weatherIcon.className + ' loaded';
			}

			// Weather Icons
			$.ajax({
				dataType: 'json',
				type: 'get',
				url: weatherJson,
				complete: function(data) {

					console.log(data);

					data = data.responseJSON.weatherAssets;

					// Log data arrray
					console.dir(data);

					// Loop through data to find matching id
					for (var i=0;i<data.length;i++) {
						console.log(data[i].id);
						console.log(weatherDataID);
						if (data[i].id === weatherDataID) {
							background.className = background.className + ' ' + data[i].background;
							weatherContainer.className = weatherContainer.className + ' ' + data[i].iconTheme;
							weatherIcon.className = weatherIcon.className + ' ' + data[i].icon;
							locationForm.className = locationForm.className + ' ' + data[i].formTheme;
							showWeatherData();
							break;
						}
					}
				}
			});

		}

	});

})(jQuery, window, document);
