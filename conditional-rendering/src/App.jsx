import React, { useEffect, useState } from 'react'

const App = () => {
  const [user,setUser]=useState([]);
  const loggedIn=false;
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data=>data.json())
    .then(data=>setUser(data));
  },[]);
  if(!loggedIn){
   return (
    <div>
      {user.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
};


return(
  <div><h1>Prakash</h1></div>
)
}
export default App
