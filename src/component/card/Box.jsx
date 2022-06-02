import React from 'react';
import "./box.css"
import {Boxes} from "./Boxes"

export const Box = ({products}) => {
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
