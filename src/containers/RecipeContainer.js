import { useState } from "react";
import Recipe from "../components/Recipe";

const originalVictoriaSpongeRecipe = {
	cakeName: "Victoria Sponge",
   	ingredients: [
   		"eggs",
      	"butter",
      	"sugar",
      	"self-raising flour",
      	"baking powder",
      	"milk"
  	],
  	price: 5,
   	rating: 5
}

const originalTeaLoafRecipe = {
    cakeName: "Tea Loaf",
      ingredients: [
          "eggs",
         "oil",
         "dried fruit",
         "sugar",
         "self-raising flour",
         "strong tea",
     ],
     price: 2,
     rating: 3
}

const originalCarrotCakeRecipe = {
    cakeName: "Carrot Cake",
      ingredients: [
       "carrots",
         "walnuts",
         "oil",
         "cream cheese",
         "flour",
         "sugar",
      ],
      price: 8,
      rating: 5
}

const RecipeContainer = () => {

    const [victoriaSpongeRecipe] = useState(originalVictoriaSpongeRecipe); // no need for setter as a second argument after victoriaSpongeRecipe in [victoriaSpongeRecipe] because we are only DISPLAYING the cakes.
    const [teaLoafRecipe] = useState(originalTeaLoafRecipe);
    const [carrotCakeRecipe] = useState(originalCarrotCakeRecipe);

    const averageRating =  (victoriaSpongeRecipe.rating + teaLoafRecipe.rating + carrotCakeRecipe.rating) / 3;

    return(
        <>
        <h2>Cake Recipes</h2>
        {/* spread operator passes the recipe details as props to the Recipe component; remember the props have to be passed from parent (RecipeContainer) to child (Recipe) */}
        <Recipe {...victoriaSpongeRecipe} /> 
        <Recipe {...teaLoafRecipe} />
        <Recipe {...carrotCakeRecipe} />


        {/* .toFixed(2) below is used here to format the average rating to 2 decimal places */}
        <p>Average Rating: {averageRating.toFixed(2)}</p>
        </>
    )
}

export default RecipeContainer;