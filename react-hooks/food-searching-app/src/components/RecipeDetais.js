import React from 'react'

const RecipeDetais = ({ingredients}) => {
    console.log(ingredients);
    {
        return ingredients && ingredients.map((ingredient, index)=>{
            return (
                <ul key={index} className="ingredient-list">
                <li className="ingredient-text">Name:{ingredient['text']}</li>
                <li className="ingredient-weight">Weight:{ingredient['weight']}</li>
               </ul>
            );
        })
    }
    
}

export default RecipeDetais
