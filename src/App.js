import { useState,useEffect } from "react";
import { Box } from "./component/card/Box";
import Heading from "./component/heading/Heading";
import Search from "./component/search/Search";
import axios from 'axios'


function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

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
  
  return (
   <div>
<Heading/>
<Box  products={product}/>
<Search products={products} search={search} />

   </div>
  );
}

export default App;
