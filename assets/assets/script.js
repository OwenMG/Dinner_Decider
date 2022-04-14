var playerEl = document.getElementById("player");
var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";
// user input variable, manual set for now for testing purposes
var userRecipeInput = "Chicken Tacos";
var userIngredients = [];

var ingredientQuery = userIngredients.join(",");
console.log(ingredientQuery);
processInput(userRecipeInput);
function processInput(input){
    // fetching url with user input as query
        fetch(foodAPIUrl+"?query="+input+"&includeIngredients="+ingredientQuery+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea")
        .then(function (response) {
            if(response.ok) {
                console.log(response)
                response.json().then(function(data) {
                    console.log(data);
                    // creating a "result" object, adding the recipe title, and an array to be filled with ingredients
                    var recipeResult = {
                        title: data.results[0].title,
                        ingredients: [],
                    };
                    // for each ingredient in the result, adds it to the array in our response object
                    for (i=0; i<data.results[0].missedIngredients.length; i++){
                        recipeResult.ingredients.push(data.results[0].missedIngredients[i].original);
                        
                    }
                    console.log(recipeResult);
                    gatherVideo(recipeResult.title);
                    
                })
            }
        })
        .catch(function(error) {
            alert('Unable to get data from FoodAPI');
        })
    }

var gatherVideo = function(title) {
     var youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBmkn_T3iV6lGMMszsHF7QJNfiD0CLOUj4&type=video&q=How%20To%20Cook%20";
    fetch(youtubeApi + title )
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    var videoFrame = document.createElement("iframe");
                    var videosrc = "http://www.youtube.com/embed/"+data.items[0].id.videoId;
                    videoFrame.setAttribute("src", videosrc);
                    videoFrame.setAttribute("width", "420");
                    videoFrame.setAttribute("height", "315");
                    videoFrame.setAttribute("frameborder", "0");
                    playerEl.appendChild(videoFrame);

                })
            }
        })

    .catch(function(error) {
        alert("Unable to get data from YouTube")
    })

}

// var tag = document.createElement('script');

//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       var player;
//       function onYouTubeIframeAPIReady() {
//         console.log(localStorage.getItem("videoId"))
//         player = new YT.Player('player', {
//           height: '390',
//           width: '640',
//           videoId: localStorage.getItem("videoId"),
//           playerVars: {
//             'playsinline': 1
//           },
//           events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//           }
//         });
//       }

//       // 4. The API will call this function when the video player is ready.
//       function onPlayerReady(event) {
//         event.target.playVideo();
//       }

//       // 5. The API calls this function when the player's state changes.
//       //    The function indicates that when playing a video (state=1),
//       //    the player should play for six seconds and then stop.
//       var done = false;
//       function onPlayerStateChange(event) {
//         if (event.data == YT.PlayerState.PLAYING && !done) {
//         //   setTimeout(stopVideo, 6000);
//           done = true;
//         }
//       }
//       function stopVideo() {
//         player.stopVideo();
//       }
