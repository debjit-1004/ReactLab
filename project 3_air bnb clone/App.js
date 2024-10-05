import React from "react";
import Data from "./components/Data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
/* import srija1 from "./images/srija1.jpg"
import srija2 from "./images/srija2.jpg"
import srija3 from "./images/srija3.jpg" */


export default function App(){
    const cards= Data.map(item=>{
        return(
            <Card pic={item.pic}  rating={item.stats.rating}   country={item.country} count={item.stats.count}  title={item.title} openSlots={item.openSlots}/>
        )

    })
    return(
        <div>
            <Navbar/>
            <Hero/>
            {cards}
            
        </div>
    )
}

{/* 
 */}