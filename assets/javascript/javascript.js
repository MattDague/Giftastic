var topics = ["Wet Hot American Summer", "Big Trouble in Little China", "The Fifth Element", "Kung Fu Hustle", "Burn After Reading", "Hot Fuzz", "Austin Powers", "Best in Show", "In Bruges", "True Romance", "Kill Bill", "Leon The Professional", "The Room", "The Life Aquatic with Steve Zissou", "Dark City", "Seven Psychopaths"]

//function to generate buttons across top
function generateButton() {
  // clears initial div to avoid duplicates
  $("#buttonHolder").html("");
  for (var i = 0; i < topics.length; i++) {
    // creates button for each movie
    var j = $("<button>");
    //sets the data tag for each movie based on its name
    j.attr("data-movie", topics[i]);
    // gives each button a movie class
    j.addClass("movie");
    j.addClass("btn");
    j.addClass("btn-success");
    //adds text to each button
    j.text(topics[i]);
    //adds movie button to the div
    $("#buttonHolder").append(j);


  }
}
//button on click functionality
$(document).on("click", ".movie", function () {

  console.log("howdy");
  // variable for each movies, gets its value from the data-movie value assigned in the original function
  var movie = $(this).attr("data-movie");

  // url for giphy api, adds movie name and my api key with a limit of
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    movie + "&api_key=pNGgdso4Q7BzzXy7pvceA2r8mmbi4gLO&limit=10";
  //ajax call to GET information from giphy api
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      //variable for data from ajax
      var results = response.data;

      //loop to run for each movie
      for (var i = 0; i < results.length; i++) {
        //creates a new div
        var gifDiv = $("<div>");

        //variable that pulls the rating from the ajax call
        var p = $("<p>").text("Rating: " + results[i].rating);

        //vaiable for gif itself
        var movieGif = $("<img>");
        movieGif.attr("src", results[i].images.fixed_height_still.url);
        movieGif.attr("data-still", results[i].images.fixed_height_still.url);
        movieGif.attr("data-active", results[i].images.fixed_height.url);
        movieGif.attr("data-state", "still");



        //adds class to new div
        gifDiv.addClass("gif");

        // attaches the text and gif to the new div
        gifDiv.append(p);
        gifDiv.prepend(movieGif);

        //adds the new div to the premade gif holder div
        $("#gifHolder").prepend(gifDiv);
      }
    });
});

$(document).on("click", "img", function () {

  var state = $(this).attr("data-state");

  if (state == "still") {
    $(this).attr("src", $(this).attr("data-active"));
    $(this).attr("data-state", "active");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

});



//adding movie functionality
//on click event for submit buttion
$("#movieSubmit").on("click", function (event) {
  //if statement to prevent blank text boxes from being added
  if ($("#movieInput").val().trim() !== "") {
    event.preventDefault();
    // create variable for the movie entered
    var movie = $("#movieInput").val().trim();
    //add it to the array
    topics.push(movie)
    //re-run generate button function to display buttons
    generateButton()
  }
});
//first call of generate button function
generateButton();