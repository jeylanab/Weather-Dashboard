
$('#searchTab').on("click", function(){
  $('#viewMode').addClass('viewMode')
    
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

                // if(tempCelcius>10){
                //   // create element 
                //   var cloudImg = $('<img>')
                //   // Add content to the text
                //   cloudImg.attr('src', /Assets/Images/cloudy.png)
                //   // Append to the html
                //   .append(cloudImg);
                // }
            }

            DisplayOnDashboard();
         
          function FiveDayForcast(){
            $('#view-text').empty();
          

         var viewTitle = $('<h3>');
          viewTitle.text('View next five Days forecast of ' + cityName);
          $('#view-text').append(viewTitle)



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
                day1Div.addClass('dayForecast');
                
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
                day2Div.addClass('dayForecast');
                   
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
                day3Div.addClass('dayForecast');
                
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
                day4Div.addClass('dayForecast');
                 
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
                day5Div.addClass('dayForecast');
                $('#forecast-5').append(day5Div)


                console.log(formattedDate,tempCelcius,WindSpeed,humidity);
                
          }
        day5(); 
             

          }  
          FiveDayForcast();

          var count = 0;
          function appendButton () {   
            //create element to append new Button on 
            var newButton = $('<button>');
            // add text to the button
            newButton.text(data.city.name);
            // add class to the button
            newButton.addClass('new-button').attr('id', 'newButton');
            //  append to new button div
            $('#added-city').append(newButton);
            count++;

            $('#input-City').val("");
            }
            appendButton(); 
            
      // var newlyButton = $('#newButton').
      // $('#newButton').on("click", function(){
      //   DisplayOnDashboard();
      //   FiveDayForcast();
      //   console.log("clicked")
      // })
           





    })



})





