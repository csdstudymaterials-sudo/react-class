import React, { useState } from 'react'

const InputSubmit = () => {
    const [text,setText]=useState("");
    const settext=(e)=>{
        setText(e.target.value);
    }
    const handle=(e)=>{
        e.preventDefault();
        alert(`Submitted ${text}`);
    }
  return (
    <div>
        <form onSubmit={handle}>

      <input type="text" 
      onChange={settext}
      placeholder='Enter Text'/>
      <button type='submit'>Submit</button>
       </form>
    </div>
    
  )
}

export default InputSubmit
