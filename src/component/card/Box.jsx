import React from 'react';
import "./box.css"
import{ Link} from "react-router-dom"

export const Box = () => {
  return (
    <div className="picture" style={{
      backgroundImage:"url(/pic.jpg)"
    }}>
      <h1> Previou Search</h1>
    <div className="box">
      <Link to="/" className="links">box1wjjjjjjj</Link>
      <Link to="/" className="links">boxj</Link>
      <Link to="/" className="links">box1wjjjjjjj</Link>
      <Link to="/" className="links">boxj</Link>
        
        </div>

    </div>
  )
}
