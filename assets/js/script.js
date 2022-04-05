var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";
var userRecipeInput = "beef wellington"

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
            })
        }
    })
    .catch(function(error) {
        alert('Unable to get data');
    })
