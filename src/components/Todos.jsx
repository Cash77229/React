import React from 'react'
import {memo} from "react"

const Todos = ({todos ,addtodos}) => {

   console.log("child render");

 return (
  <>
  <h2>My Todos</h2>
  {todos.map((todo,index) =>{
     return <p key={index}>{todo}</p>
  })}
  <button onClick={addtodos}>Add todos</button>
  </>
 );
};
export default memo(Todos)