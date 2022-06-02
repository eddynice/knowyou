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



const options = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  params: {
    id: 'YQHsXMglC9A',
    hl: 'en',
    gl: 'US',
    next: 'CBQSDRILWVFIc1hNZ2xDOUEYACreAQjQr43tubfzi64BCNi24eOapu-n7AEIgejpz9fcuPajAQjwqMe8v7SEuJ0BCI3CwqDWu4nahAEItNrrwNnAzuQ1CK6-ooCH-Jj5JAik8O-ahq3L1sYBCMb965f10YS4UwiNkaXwtL_gzi4I1vOMu5f7r4HeAQjEuYHvqNfimgwIzvHK75mt1Z27AQjw_7n5yaLZ3_UBCJOq5eCOo-XS_QEIocGSnpeajIsXCN2F2tj65L_4zwEI4KbhwtjP98duCI_C_IbhttbzTAi2gO-y3KbjuZgBCNbN7-m31YCKVmoPd2F0Y2gtbmV4dC1mZWVk'
  },
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
  
  return (
   <div>
<Heading/>
<Box/>
<Search products={products} search={search} />

   </div>
  );
}

export default App;
