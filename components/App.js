import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import data from "./data"

export default function App(){
       const main = data.map(item=>{
           return (
               
               <Main
               key={item.title}
               {...item}
               />
           )
   })

    return (
        <div>
         <Navbar/>
         <section>
          {main}
         </section>
        </div>
    )
}
