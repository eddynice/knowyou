import React from 'react';
import "./head.css"
import {Boxes} from "./Head"
import {getInvoices} from './data';
import {Link,Outlet} from "react-router-dom"
export const Header = ({products}) => {
  console.log(products)
  let invoice = getInvoices()
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
        {invoice.map((invoices)=>((
      <Link to={`/detail/${invoices.number}`}
      key={invoices.number}>{invoices.name} </Link>
    )))}
        </div>
        <Outlet/>

    </div>
  )
}
