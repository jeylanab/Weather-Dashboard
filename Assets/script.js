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
        var tempCelcius = TempC.toFixed(2) + "°C";
        var Date = data.list[0].dt_txt
        var WindSpeed = data.list[0].wind.speed
        var humidity = data.list[0].main.humidity
       
       console.log(Date);
       console.log(TempC.toFixed(2));


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

                $('#city-name').text(cityName);
                var tempR = "Temp:"

                var currentDate = dayjs();
                var formattedDate = currentDate.format(' (D/MM/YYYY)');
               var Day = $('<span>');
               Day.text(formattedDate);
                $('#Weather-Dashboard').append(Day);
                var tempDiv = $('<h5>');
                tempDiv.text(tempCelcius);
                $('#Weather-Dashboard').append(tempR,tempDiv);


            }
            DisplayOnDashboard();
               
              
           


    })



})





