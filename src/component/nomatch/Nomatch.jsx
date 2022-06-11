import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import style from "./nomatch.module.css"
export const Nomatch = () => {
    let location = useLocation();

    return (
      <div className={style.match}>
        <h3>
          No match for <code>{location.pathname}</code> 
        </h3>{" "}
         <Link to="/">Back to HomePage</Link>
      </div>
    )
}
