/* ReactDOM.render(
<ul><li>Thing 1</li><li>Thing 2</li></ul>,
document.getElementById("root")
) */

/* function MainContent(){
    return(
        <h1>
            I'am learning React
        </h1>

    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,

    document.getElementById("root")
) */


    // vanilla js taste
/* 
    const h1=document.createElement("h1")
    h1.textContent="this is an imperative way to program"
    h1.className="header"
    document.getElementById("root").append(h1) */


    //jsx 
 /* const element = <h1 className="header">This is JSX</h1>
 console.log(element)
    ReactDOM.render(element , document.getElementById("root"))
 */
    
    //notes.image1  diff of jsx react converts jsx into plane old js in the background 
    
/* const page =(
    <div>
    <h1 className="header">This is JSX</h1>,
    <p>This is a partagraph </p>
    </div>
    
)
ReactDOM.render(page , document.getElementById("root"))
    */

/* import React from "react"
import ReactDOM from "react-dom" */
/* const navbar=(
    <nav>
        <h1>debjit's shop</h1>
        <ul>
            <li>menu</li>
            <li>about</li>
            <li>contacs</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar,document.getElementById("root")) */

import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"




function App(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
       
    )
}

/* document.getElementById("root").append(JSON.stringify(page)) */
// we get [object object]

/* deprecated oin React 18 so fk off
ReactDOM.render(<App/>,document.getElementById("root")) */

const root= ReactDOM.createRoot("root")
root.render(<App/>)