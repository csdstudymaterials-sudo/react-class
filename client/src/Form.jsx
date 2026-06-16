import { useState } from "react"
import React from 'react'
const Form = () => {
const [name,setName]=useState("");
const handle=(e)=>{
    setName(e.target.value)
}
  return (
    <div>
        <input type="text" 
        onChange={handle}
        placeholder="Enter Name"/>
        <h1>{name}</h1>
    </div>
  )
}

export default Form
