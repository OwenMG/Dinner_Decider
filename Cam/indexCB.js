//modal

let allergyBtn = document.querySelector("#allergy-modal");
let modalBg = document.querySelector('.modal-background');
let modal = document.querySelector('.modal')
let closeModal = document.querySelector("#close-btn")
let saveAllergies = document.querySelector("#save-allergies")
let recipeCol = document.querySelector("#recipe-column")


// Url for the food api before the parameters have been added
var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";


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
      document.getElementById("textCheck").textContent = recipeResult.title + recipeResult.ingredients;
                
                recipeCol.textContent = recipeResult; ////added this instead of console.log()
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
                
                
                
                    document.getElementById("textCheck").textContent = recipeResultTwo.title + recipeResultTwo.ingredients;
                
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
                
                                
                            } })}


// function applyAllergens() {
//     //allergen options take away from the ingredients search
//     //need variable to hold chosen allergens
//     //
// }

function showInput() {
    let output = document.getElementById('search-output');
    if (output.style.display === "none") {
        output.style.display = "block";
    } else {
        output.style.display = "none"
    }
}

// function showIng() {
//     let ingCol = document.getElementById('recipe-column');
//     let displaySetting = ingCol.style.display;
//     if (displaySetting == 'block') {
//         ingCol.style.display = 'none';
//     } else {
//         ingCol.style.display = 'block';
//     }
// }
// function showVid() {
//     let vidCol = document.getElementById('video-column')
//     let vidDisplaySetting = vidCol.style.display;
//     if (vidDisplaySetting == 'block') {
//         vidCol.style.dislay = 'none';
//     } else {
//         vidCol.style.display = 'block';
//     }
// }


  allergyBtn.addEventListener('click', () => {
      modal.classList.add('is-active');
  });

  modalBg.addEventListener('click', () => {
      modal.classList.remove('is-active');

  });

closeModal.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
  
saveAllergies.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

search.addEventListener('click', () => {
    column.classList.remove('is-hidden')
})
// searchInput.addEventListener('click', () => {
//     column.classList.remove('is-hidden');
// })
