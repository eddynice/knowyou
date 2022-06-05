import React from 'react';
import Search from "../search/Search";
import  {Header } from "../header/Header";


export const Home = () => {
    
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
        <Header  products={product}/>
        <Search products={products} />
    

    </div>
  )
}
