$(document).ready(function() {
  var lonn;
  var latt;
  var tempC;
  var city;
  var tempF;

  $.getJSON("http://ip-api.com/json/?callback=?", function(data) {

    latt = data.lat;
    lonn = data.lon;
    city = data.city;
    //$(".p2").text("Longitude is: " + lonn); //Test variables
    //$(".p1").text("Lattitude is: " + latt); //Test variables
    $(".ct").text("in " + city);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latt + "&lon=" + lonn + "&appid=074255154585858f6e8b1333c9bfac78", function(data) {
      tempC = Math.round(((data.main.temp) - 273.15));
      tempF = Math.round(tempC * 1.8 + 32);
      $(".temp").text(tempC + "°C");

      var icon = data.weather[0].icon;
      $('.con').attr("src", "http://openweathermap.org/img/w/" + icon + ".png");
    });

    $('.btn-toggle').click(function() {
      $(this).find('.btn').toggleClass('active');
      $(".temp").toggleClass("tempC2");
      $(".temp").text(tempC + " °C");
      $(".tempC2").text(tempF + " °F");

      if ($(this).find('.btn-primary').size() > 0) {
        $(this).find('.btn').toggleClass('btn-primary');

      }
      $(this).find('.btn').toggleClass('btn-default');

    });

  });

});