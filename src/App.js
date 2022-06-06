import { useState,useEffect } from "react";
import Navbar from "./component/navbar/Navbar";
import axios from 'axios'
import {Routes, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom" 
import {Home} from "./component/home/Home"
import  {Detail}  from "./component/page/Detail";
import  {Nomatch}  from "./component/Nomatch";

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
                console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
}, []);

  const search=()=>{
    axios.get('https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }

  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video',
  params: {id: 'dQw4w9WgXcQ'},
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'c3f843f4b5msh2f0126ac1d48315p1cd11ajsnb9a6490160d4'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  useEffect(() => {
    search()
   
  }, [loading])
  
  let products = [
    'apples', 'bananas', 'grapefruit', 'kiwi', 'avocados', 
    'lettuce', 'tomatoes', 'cheese', 'bread', 'yogurt', 
    'peas', 'carrots', 'broccoli', 'beans', 'pizza',
    'pasta', 'rice', 'cereal', 'butter', 'milk',
    'eggs', 'onions', 'garlic', 'honey', 'soup',
    'salt', 'pepper', 'oregano', 'basil', 'paprika'
  ];
  let product = [
     'honey', 'soup',
    'salt', 'pepper', 'oregano', 'basil', 'paprika'
  ];
  
  if (error) {
    return <>{error.message}</>;
} else if (!isLoaded) {
    return <>loading...</>;
} else {
    return (
        /* here we map over the element and display each item as a card  */
        <div className="wrapper">
            <ul className="card-grid">
                {items.map((item) => (
                    <li>
                        <article className="card" key={item.callingCodes}>
                            <div className="card-image">
                                <img src={item.flag} alt={item.name} />
                            </div>
                            <div className="card-content">
                                <h2 className="card-name">{item.name}</h2>
                                <ol className="card-list">
                                    <li>
                                        population:{" "}
                                        <span>{item.population}</span>
                                    </li>
                                    <li>
                                        Region: <span>{item.region}</span>
                                    </li>
                                    <li>
                                        Capital: <span>{item.capital}</span>
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}

}

export default App;
