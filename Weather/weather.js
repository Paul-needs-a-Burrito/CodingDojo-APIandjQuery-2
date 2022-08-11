function kelvinToFarenheit(kelvin) {
    kelvin = parseFloat(kelvin);
    let Farenheit = Math.trunc(((kelvin-273.15)*1.8)+32);
    return Farenheit;
}

$('form').submit(function() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + $('#city').val() + "&&appid=WeatherAPIkey";
    console.log(url);
    $.get(url, function(res) {
        let currentWeather = "<h4>" + res.name + ": " + res.weather[0].description + "</h4>";

        currentWeather += "<h4>Temperature: " + kelvinToFarenheit(res.main.temp) + " F</h4>";
        currentWeather += "<h4>Coord: " + res.coord.lon + ", " + res.coord.lat + "</h4>";

        $('.response').html(currentWeather);
    }, 'json');

    return false;
} );
