import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://simple-veganista.com/the-ultimate-vegetable-lentil-loaf/";
   let authorPhoto = "https://simple-veganista.com/wp-content/uploads/2012/11/ultimate-vegetable-lentil-loaf-recipe-1.jpg";
   let authorName = "Julie";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["lentils", "broth", "garlic", "oats", "ketchup"];

   let ingredientsListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
   });

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredientsListItems}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1> Lentil Meatloaf </h1>
            <p> It's a great meal for Thanksgiving </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://simple-veganista.com/wp-content/uploads/2012/11/ultimate-vegetable-lentil-loaf-recipe-1.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
