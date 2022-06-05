import React from 'react';
import "./head.css"
import {Boxes} from "./Head"

export const Header = ({products}) => {
  console.log(products)
  return (
    <div>
    <div className="picture" style={{
      backgroundImage:"url(/pic.jpg)"
    }}>
    
      <h2> Trending</h2>
      
      <ul style={{textAlign:"center"}}>
      {products.map((trend)=>{
        return(
         <li className="fleex">
          <Boxes trend={trend}/>
  </li>

        )
       
      })}
        </ul>
        </div>

    </div>
  )
}
