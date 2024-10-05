import React from "react"
/* import Pic from "../images/wallpaper.png" */
export default function Hero(){
    return(
        <section className="hero">
            <img src="images/wallpaper.png" alt="hero section" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind host without leaving home </p>
        </section>
    )
}