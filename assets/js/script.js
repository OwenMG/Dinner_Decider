var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";
var recipeName = "lasagna"
var analysisURL = "https://api.spoonacular.com/recipes/analyze"
fetch(foodAPIUrl+"?query="+recipeName+"&number=1&apiKey=cd67472648f34dd6a33c096e8313fcea")
    .then(function (response) {
        if(response.ok) {
            console.log(response)
            response.json().then(function(data) {
                console.log(data);
                var recipeId = data.results[0].id;
                console.log(recipeId);
                fetch(analysisURL+"?="+recipeId+"&apiKey=cd67472648f34dd6a33c096e8313fcea")
                    .then(function(data) {
                        console.log(data);
                    })
            })
        }
    })
    .catch(function(error) {
        alert('Unable to get data');
    })