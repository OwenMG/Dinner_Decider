var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";



 function getRecipe(){
    var userRecipeInput =  document.getElementById("searchInput").value; 
console.log(userRecipeInput);
    fetch(foodAPIUrl+"?query="+userRecipeInput+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea")
    .then(function (response) {
        if(response.ok) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data);
                var recipeResult = {
                    title: data.results[0].title,
                    ingredients: [],
                };
                for (i=0; i<data.results[0].missedIngredients.length; i++){
                    recipeResult.ingredients.push(data.results[0].missedIngredients[i].original);
                    
                }
                console.log(recipeResult);
                gatherVideo(recipeResult.title);
                
            })
        }
    })
    .catch(function(error) {
        alert('Unable to get data');
    }) 

var gatherVideo = function(title) {
        
    
var youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBmkn_T3iV6lGMMszsHF7QJNfiD0CLOUj4&type=video&q="
fetch(youtubeApi + title )
    
.then(function (response) {

response.json().then(function(data) {
            console.log(data);})
        })




    }

}
function getIngredients(){

    var ingInput = document.getElementById("ingredientsSearchbar").value;
    var  arr = ingInput.split(',');
    console.log(arr); 




    fetch(foodAPIUrl+ "?query="+arr+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea")
    .then(function (response) {
        if(response.ok) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data);       })
            }
        })}
