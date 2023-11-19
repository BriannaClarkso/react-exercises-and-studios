import recipedata from "./recipe.json";

function IngredientList() {

  const IngredientListItems = recipedata.map(recipe => {
    return recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });
  })
   return <div>{IngredientListItems</div>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 