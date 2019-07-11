var topics = ["Wet Hot American Summer", "Big Trouble in Little China", "The Fifth Element", "Kung Fu Hustle", "Burn After Reading"]

function generateButton() {
    $("#button").html("")
    for ( var i = 0; i < topics.length; i++) {
        // creates button for each movie
        var j = $("<button>");
        //sets the data tag for each movie based on its name
        j.attr("data-movie", topics[i]);
        // gives each button a movie class
        j.addClass("movie")
        j.addClass("btn")
        j.addClass("btn-success")
        //adds text to each button
        j.text(topics[i]);
        //adds movie button to the div
        $("#gifHolder").append(j);

        
    }
}
//button on click functionality
$("button").on("click", function() {
    // variable for each movies, gets its value from the data-movie value assigned in the original function
    var movie = $(this).attr("data-movie");
    // url for giphy api, adds movie name and my api key with a limit of 10
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=pNGgdso4Q7BzzXy7pvceA2r8mmbi4gLO&limit=10";
        //ajax call to GET information from giphy api
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {

generateButton()