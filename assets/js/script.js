var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";
var recipeName = "beef wellington"
var ingredients = ["test"];

    fetch(foodAPIUrl+"?query="+recipeName+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea")
    .then(function (response) {
        if(response.ok) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data);
                var recipeId = data.results[0].id;
                console.log(recipeId);
                
                for (i=0; i<data.results[0].missedIngredients.length; i++){
                    ingredients.push(data.results[0].missedIngredients[i].original);
                    
                }
                console.log(ingredients);

            })
        }
    })
    .catch(function(error) {
        alert('Unable to get data');
    })
