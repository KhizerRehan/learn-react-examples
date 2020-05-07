import React, {useState, useEffect} from 'react'
import { YOUR_APP_ID, YOUR_APP_KEY } from './config/API_KEYS';
import axios from 'axios';
import Recipe from './components/Recipe';
import Alert from './components/Alerts';
var axiosConfig = {
    crossdomain: true 
};
const App = () => {
    const [query, setQuery] = useState('chicken');
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState('');

    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;


    const getData = async()=>{
        console.log('Fetch DATA')
        if(query){
            const result = await axios.get(url, axiosConfig);
            console.log(result);
            setRecipes(result.data.hits);
            setQuery('');  
            const {more} = result.data;
            if(!more){
                setAlert(`${query} NOT EXISTS.`);
            }
        }
        else {
            setAlert('Please fill the food field');
        }
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        getData();
    }

    const handleChange= (event)=>{
        const value = event.target.value;
        setQuery(value);
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className="App">
            <h1 onClick={getData}>Food Searching App</h1>
            <h3>Query parameter:{query}</h3>

            <br />

            <form className="search-form" onSubmit={handleSubmit}>
            { alert && <Alert alert={alert}/>}

                <input type="text" 
                    autoComplete="off"
                    autoCorrect='true' 
                    autoFocus 
                    placeholder="Search food..." 
                    onChange={handleChange}
                    name="query"
                    value={query}
                />
                <input type="submit" value="Search Food"/>
            </form>


            <div className="recipes">
                {
                    (recipes && recipes.length>0) &&

                    recipes.map((item, index) => {
                        return (
                            <Recipe key={index} recipe={item.recipe}/>
                        )
                    })

                }
            </div>

        </div>
    )
}

export default App
