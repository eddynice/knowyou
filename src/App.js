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
<Navbar/>
<Router>
<Routes>
<Route  exact path="/" element={<Home/>} />
<Route  path="/detail" element={<Detail/>} />
<Route   element={<Nomatch/>} />


</Routes>
</Router>


  
   </div>
  );
}

export default App;
