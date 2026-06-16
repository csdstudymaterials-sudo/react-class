import React from 'react'

const msg=()=>{
    return alert("Clicked");
}
const Click = () => {
    return (
    <div>
      <button onClick={msg}>Click</button>
    </div>
  )
}

export default Click
