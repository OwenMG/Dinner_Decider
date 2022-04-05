var foodAPIUrl = "https://api.spoonacular.com/recipes/complexSearch";
var recipeName = "beef wellington"
var ingredients = ["test"];

async function fetchRecipe() {
    try {
        const response=await fetch(foodAPIUrl+"?query="+recipeName+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea");
        if (!response.ok) {
            throw new Error("HTTP error");
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error("could not get data");
    }
    // fetch(foodAPIUrl+"?query="+recipeName+"&number=1&fillIngredients=true&apiKey=cd67472648f34dd6a33c096e8313fcea")
    // .then(function (response) {
    //     if(response.ok) {
    //         console.log(response)
    //         response.json().then(function(data) {
    //             console.log(data);
    //             var recipeId = data.results[0].id;
    //             console.log(recipeId);
                
    //             for (i=0; i<data.results[0].missedIngredients.length; i++){
    //                 ingredients.push(data.results[0].missedIngredients[i].original);
                    
    //             }
    //             // console.log(ingredients);
    //         })
    //     }
    // })
    // .catch(function(error) {
    //     alert('Unable to get data');
    // })

}

const recipeData = fetchRecipe();
console.log(recipeData);
console.log(recipeData.results[1]);
// for (i=0; i<recipeData.results[0].missedIngredients.length; i++) {
//     ingredients.push(recipeData.results[0].missedIngredients[i].original);
// }
// console.log(ingredients);