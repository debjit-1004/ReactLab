import React from "react";

/* import star from "../images/react-icon-small.png" */
export default function Card(prop){

    console.log(prop)
    return(
        <div className="card">
                   {  prop.openSlots===0 && <div className="card--badge">SOLD OUT </div>} 
            <img src={prop.pic} className="card--image"/>
            <div className="card--stats">
                <img src="images/react-icon-small.png"  className="card--star"/>
                <span>{prop.rating}</span>
                <span className="gray">({prop.count})   ||  </span>
                <span className="gray">{prop.country}</span>         
            </div>
            <p>{prop.title}</p>        
            <p><span className="bold">From $ {prop.price}</span> / Per Person</p>    
        </div>
    )
}
