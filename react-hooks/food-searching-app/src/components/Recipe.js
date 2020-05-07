import React,{useState} from 'react'
import RecipeDetais from './RecipeDetais';

const Recipe = (props) => {
    const {label, image, url, ingredients} = props.recipe;

    const [showIngredients, setShowIngredients] = useState(true);

    const handleShowIngredients=()=>{
        setShowIngredients(!showIngredients);
    }

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="_blank" rel="noopener noreferrer">
                URL
            </a>
            <button onClick={handleShowIngredients}>Ingredients</button>
            {
                showIngredients && <RecipeDetais ingredients={ingredients}/>
            }
        </div>
    )
}

export default Recipe
