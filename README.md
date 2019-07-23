# Giftastic

https://mattdague.github.io/Giftastic/

Welcome to my giftastic website! This site uses the giphy API to generate 10 giphys on the page when you click any of the movie buttons at the top. You can also add movies if you type in the box and hit submit!

All the buttons and any ones added in the future will be dynamically placed accroos the top of the screen. In addition to this, the gifs that are created also have some interactivity. They are displayed initially in a "paused" state. Clicking them turns them to an active state and clicking again re-pauses them. 



Challenge 
-------------------------------
The goal of this project was the interact with the Giphy API in a way that allowed users to submit movies and return back the top 10 gifs for that movie. For this project uses Javascript/Jquery and the Giphy API almost exclusively to generate buttons that a user can use to search for gifs of any movie they want. It accepts user input by taking the information they type in the box and pushes that information to an array. Then for each index in the array it creates a button and gives it a data based on the name that is then passed on to the API. Each displayed gif is also given an on click functionality that changes its state from the still image to the moving gif provided by the API and the reverse when clicked again.