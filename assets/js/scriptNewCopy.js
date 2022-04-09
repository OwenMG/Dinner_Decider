// Url for the food api before the parameters have been added
var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";

var videoExists = false;
// This variable links to the player element in the HTML which will contain the embedded youtube video
var playerEl = document.getElementById("player");


// This function will fetch spoonacular API
 function getRecipe(){

// Links to the first search bar in the HTML file
    var userRecipeInput =  document.getElementById("searchInput").value; 


console.log(userRecipeInput);
    fetch(foodAPIUrl+"?query="+userRecipeInput+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea")
    .then(function (response) {
        if(response.ok) {
          
            response.json().then(function(data) {
// creating a variable that contains the data we want from the API including, recipe title and a blank var for ingredients
                var recipeResult = {
                    title: data.results[0].title,
                    ingredients: [""],
                }
// A for loop to get the ingredients in to our ingredients var( since the ingredients are an array )
                for (i=0; i<data.results[0].missedIngredients.length; i++){
                    recipeResult.ingredients.push(data.results[0].missedIngredients[i].original);
                    }
            
// appends text to the DOM that includes our recipe title, and ingredients needed
      document.getElementById("recipe-column").textContent = recipeResult.title + recipeResult.ingredients;
                
                console.log(recipeResult);
                gatherVideo(recipeResult.title);
                
            })
        }
    })
    .catch(function(error) {
        alert('Unable to get data');
    }) 

// This function and fetch call adds the title of our recipe we got into the youtube APIs url. It then searches for a youtube video based on our recipe. 

var gatherVideo = function(title) {
    var youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBmkn_T3iV6lGMMszsHF7QJNfiD0CLOUj4&type=video&q=How%20To%20Cook%20";
   fetch(youtubeApi + title )
       .then(function (response) {
           if (response.ok) {
               console.log(response);
               response.json().then(function (data) {
                   console.log(data);
//  Here we create an element to embed the youtube video in
                   displayVideo(data);
                })
            }
                })

                .catch(function(error) {
                    alert("Unable to get data from YouTube")
                })

                
            }
        

}

// This function lets us get a recipe by searching for ingredients we have already
function getIngredients(){

    var ingInput = document.getElementById("ingredientsSearchbar").value;
    var  arr = ingInput.split(',');
    console.log(arr); 

     
    fetch(foodAPIUrl+ "?query="+arr+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea")
    .then(function (response) {
        if(response.ok) {
            console.log(response)
            response.json().then(function(data) {
               
                var recipeResultTwo = {
                    title: data.results[0].title,
                    ingredients: [""],
                }
                
                
                
                for (i=0; i<data.results[0].missedIngredients.length; i++){
                    recipeResultTwo.ingredients.push(data.results[0].missedIngredients[i].original);
                    }
                
                
                
                    document.getElementById("recipe-column").textContent = recipeResultTwo.title + recipeResultTwo.ingredients;
                
                    gatherVideo(recipeResultTwo.title); 
                console.log(recipeResultTwo);  
                 })
                }


// This function works just like the original gatherVideo function, inserts title, pulls and embeds youtube video
                 var gatherVideo = function(title) {
                    var youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBmkn_T3iV6lGMMszsHF7QJNfiD0CLOUj4&type=video&q=How%20To%20Cook%20";
                   fetch(youtubeApi + title )
                       .then(function (response) {
                           if (response.ok) {
                               console.log(response);
                               response.json().then(function (data) {
                                   console.log(data);
                                   displayVideo(data);
                                })
                            }
                                })
                
                                .catch(function(error) {
                                    alert("Unable to get data from YouTube")
                                })
                
                                
                            } })}
// Camerons JS
function displayVideo(data) {
    function populateVideo(data) {
        var videoFrame = document.createElement("iframe");
        var videosrc = "http://www.youtube.com/embed/"+data.items[0].id.videoId;
        videoFrame.setAttribute("src", videosrc);
        videoFrame.setAttribute("width", "420");
        videoFrame.setAttribute("height", "315");
        videoFrame.setAttribute("frameborder", "0");
        playerEl.appendChild(videoFrame);
        console.log("video loaded");
    }
    if (!videoExists) {
    videoExists=true;
    populateVideo(data);
    console.log("first load");
    }
    else {
        playerEl.removeChild(playerEl.firstChild)
        populateVideo(data);
        console.log("second load");
    }
}