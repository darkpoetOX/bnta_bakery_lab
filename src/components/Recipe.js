const Recipe = ({cakeName, ingredients, price, rating}) => {
   
    return (
        <>
            <h3>{cakeName} Recipes</h3>
            <p>Ingredients List: {ingredients.join(", ")}</p>
            {/* the .join(", ") after ingredients joins the array elements in ingredients using a comma and a space */}
            <p>The price is: {price}</p>
            <p>This cake is rated: {rating}</p>
            <hr></hr>
        </>
    )
}

export default Recipe;