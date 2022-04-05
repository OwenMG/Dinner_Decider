var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";
// user input variable, manual set for now for testing purposes
var userRecipeInput = "beef wellington"
// fetching url with user input as query
    fetch(foodAPIUrl+"?query="+userRecipeInput+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea")
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
                
            })
        }
    })
    .catch(function(error) {
        alert('Unable to get data');
    })
