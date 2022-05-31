import { Box } from "./component/card/Box";
import Heading from "./component/heading/Heading";
import Search from "./component/search/Search";



function App() {
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
<Search products={products} />

   </div>
  );
}

export default App;
