import styles from './Description.module.css';
import React from 'react';

let recipeTitle = "food";
let recipeShortDiscription = "yum";


const RecipeAuthor = () => {
    let authorLink = "https://www.epicurious.com/recipes/food/views/vegetarian-skillet-stuffed-shells?epik=dj0yJnU9X3RTdmZlRnVZLVpqamRtdUFlYnc0eVJ4bVFOaC1BY3gmcD0wJm49dnVoTjlrLTN1UThhakNBOGtCaWJpdyZ0PUFBQUFBR1ZXVmRj";
    let authorPhoto = "https://assets.epicurious.com/photos/5be1c1bf587ad42d4b37c134/1:1/w_1280,c_limit/Vegetarian-Skillet-Stuffed-Shells-01112018.jpg";
    let authorName = "person"; 

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img 
            src={authorPhoto} 
            alt = {authorName} 
            className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends Component {
   render () {
    return (
        <div> 
            <div>
                <h1>{recipeTitle}</h1>
                <p>{recipeShortDiscription}</p>
            </div>
            <RecipeAuthor />
        </div>
    )
}
}

export default RecipeDescription;