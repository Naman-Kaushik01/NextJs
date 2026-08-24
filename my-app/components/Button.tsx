"use client"
export default function Button() {
    return(
         <button
            onClick={()=>{
               alert("Button Clicker") 
            }} >Click Me</button>
    )
}