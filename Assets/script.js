// TODO: When a user searches for a city they are presented with current and future conditions for that city

//  TODO:and that city is added to the search history
//  TODO:When a user views the current weather conditions for that city they are presented with:
                // TODO: The city name
                // TODO: The date
                // TODO: An icon representation of weather conditions
                // TODO: The temperature
                // TODO: The humidity
                // TODO:The humidity
//TODO: The wind speed
//TODO:When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
//  TODO: The date
//  TODO:An icon representation of weather conditions
//  TODO:The temperature
//  TODO:The humidity
//TODO:When a user click on a city in the search history they are again presented with current and future conditions for that city -->



$('#searchTab').on("click", function(){
    
var inputValue = $('#input-City').val();
    

    var city = inputValue;
    var APIKey = "7fb5012e43e784bc170e0090ed9cf631";
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&appid=" + APIKey;
    // Here we are building the URL we need to query the database
    fetch(queryURL).then(function (response) {
        return response.json();
    })
     .then(function (data){

        var cityName = data.city.name;
        var TempK = data.list[0].main.temp;
        var TempC = TempK - 273.15;
        var tempCelcius =  "🌡Temp: " +TempC.toFixed(2) + "°C";
        var Date = data.list[0].dt_txt;
        var WindSpeed = "🌄Wind:" + data.list[0].wind.speed
        var humidity = "☁️Humidity:" + data.list[0].main.humidity


      function appendButton () {   
            //create element to append new Button on 
            var newButton = $('<button>');
            // add text to the button
            newButton.text(data.city.name);
            // add class to the button
            newButton.addClass('new-button')
            //  append to new button div
            $('#added-city').append(newButton);
            $('#input-City').val("");
            }
            appendButton(); 

          
             
            // add Info to the weather dashboard
            function DisplayOnDashboard(){
                $('#Weather-Dashboard').empty();

                // create element for weather information
                 var infoDiv = $('<div>');
                var cityText = $('<h4>')
                var tempText = $('<h5>')
                var windText = $('<h5>')
                var humidityText = $('<h5>')
                var currentDate = dayjs();
                var formattedDate = currentDate.format(' (D/MM/YYYY)');
                // Assign inner text for each Element 
                cityText.text(cityName  + formattedDate);
                tempText.text(tempCelcius);
                windText.text(WindSpeed);
                humidityText.text(humidity);
                // Append info on weather dashboard div
                infoDiv.append(cityText, tempText,windText,humidityText);
                $('#Weather-Dashboard').append(infoDiv); 
            }

            DisplayOnDashboard();
         
          function FiveDayForcast(){
         

          function day1(){

            $('#forecast-1').empty();

            var i = 8;
            var TempK = data.list[i].main.temp;
            var TempC = TempK - 273.15;
            var tempCelcius =  "Temp: " +TempC.toFixed(2) + "°C";
            var WindSpeed = "Wind:" + data.list[i].wind.speed
            var humidity = "Humidity:" + data.list[i].main.humidity
    
            var currentDate = dayjs();
            var nextDay = currentDate.add(1, 'day');
            var formattedDate = nextDay.format(' (D/MM/YYYY)');
                var dayText = $('<h5>')
                var tempText = $('<p>')
                var windText = $('<p>')
                var humidityText = $('<p>')
                
                dayText.text(formattedDate);
                tempText.text(tempCelcius);
                windText.text(WindSpeed);
                humidityText.text(humidity);

                var day1Div = $('<div>');
                day1Div.append(dayText,tempText,windText,humidityText)

                $('#forecast-1').append(day1Div)


                console.log(formattedDate,tempCelcius,WindSpeed,humidity);
                
              
          }
        day1();
         
        function day2(){
            
            $('#forecast-2').empty();

            var i = 16;
            var TempK = data.list[i].main.temp;
            var TempC = TempK - 273.15;
            var tempCelcius =  "Temp: " +TempC.toFixed(2) + "°C";
            var WindSpeed = "Wind:" + data.list[i].wind.speed
            var humidity = "Humidity:" + data.list[i].main.humidity
    
            var currentDate = dayjs();
            var nextDay = currentDate.add(2, 'day');
            var formattedDate = nextDay.format(' (D/MM/YYYY)');
                var dayText = $('<h5>')
                var tempText = $('<p>')
                var windText = $('<p>')
                var humidityText = $('<p>')
                
                dayText.text(formattedDate);
                tempText.text(tempCelcius);
                windText.text(WindSpeed);
                humidityText.text(humidity);

                var day2Div = $('<div>');
                day2Div.append(dayText,tempText,windText,humidityText)

                $('#forecast-2').append(day2Div)


                console.log(formattedDate,tempCelcius,WindSpeed,humidity);
                
          }
        day2(); 

        function day3(){
            
            $('#forecast-3').empty();

            var i = 24;
            var TempK = data.list[i].main.temp;
            var TempC = TempK - 273.15;
            var tempCelcius =  "Temp: " +TempC.toFixed(2) + "°C";
            var WindSpeed = "Wind:" + data.list[i].wind.speed
            var humidity = "Humidity:" + data.list[i].main.humidity
    
            var currentDate = dayjs();
            var nextDay = currentDate.add(3, 'day');
            var formattedDate = nextDay.format(' (D/MM/YYYY)');
                var dayText = $('<h5>')
                var tempText = $('<p>')
                var windText = $('<p>')
                var humidityText = $('<p>')
                
                dayText.text(formattedDate);
                tempText.text(tempCelcius);
                windText.text(WindSpeed);
                humidityText.text(humidity);

                var day3Div = $('<div>');
                day3Div.append(dayText,tempText,windText,humidityText)

                $('#forecast-3').append(day3Div)


                console.log(formattedDate,tempCelcius,WindSpeed,humidity);
                
          }
        day3(); 
        function day4(){
            
            $('#forecast-4').empty();

            var i = 32;
            var TempK = data.list[i].main.temp;
            var TempC = TempK - 273.15;
            var tempCelcius =  "Temp: " +TempC.toFixed(2) + "°C";
            var WindSpeed = "Wind:" + data.list[i].wind.speed
            var humidity = "Humidity:" + data.list[i].main.humidity
    
            var currentDate = dayjs();
            var nextDay = currentDate.add(4, 'day');
            var formattedDate = nextDay.format(' (D/MM/YYYY)');
                var dayText = $('<h5>')
                var tempText = $('<p>')
                var windText = $('<p>')
                var humidityText = $('<p>')
                
                dayText.text(formattedDate);
                tempText.text(tempCelcius);
                windText.text(WindSpeed);
                humidityText.text(humidity);

                var day4Div = $('<div>');
                day4Div.append(dayText,tempText,windText,humidityText)

                $('#forecast-4').append(day4Div)


                console.log(formattedDate,tempCelcius,WindSpeed,humidity);
                
          }
        day4(); 

        function day5(){
            
            $('#forecast-5').empty();

            var i = 39;
            var TempK = data.list[i].main.temp;
            var TempC = TempK - 273.15;
            var tempCelcius =  "Temp: " +TempC.toFixed(2) + "°C";
            var WindSpeed = "Wind:" + data.list[i].wind.speed
            var humidity = "Humidity:" + data.list[i].main.humidity
    
            var currentDate = dayjs();
            var nextDay = currentDate.add(5, 'day');
            var formattedDate = nextDay.format(' (D/MM/YYYY)');
                var dayText = $('<h5>')
                var tempText = $('<p>')
                var windText = $('<p>')
                var humidityText = $('<p>')
                
                dayText.text(formattedDate);
                tempText.text(tempCelcius);
                windText.text(WindSpeed);
                humidityText.text(humidity);

                var day5Div = $('<div>');
                day5Div.append(dayText,tempText,windText,humidityText)

                $('#forecast-5').append(day5Div)


                console.log(formattedDate,tempCelcius,WindSpeed,humidity);
                
          }
        day5(); 


          } 
          
          FiveDayForcast();

        // console.log(data.list[0].dt_txt); 
           





    })



})





