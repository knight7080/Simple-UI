import React, { useState } from 'react'
import './App.css'
import Open from "../src/assets/eye-open.svg"
import Close from "../src/assets/eye-close.svg"

function App() {
  const [open, setOpen] = useState(false);
  const openHandler = () =>{
    setOpen(!open);
  }
  return (
    <React.Fragment>
      <div className='main-container'>
          <div className="img-container">
               <img className="responsive-svg" src = {open ? Open : Close} />
          </div>
          <h2>Name: Kaushik R</h2>
          <p>Register No: 212221040077</p>
          <button className='btn' onClick={openHandler}>{open === false ? "Show" : "Hide"} Details</button>
          {open === false ? "" : <p>This is Kaushik from CSE department</p>}
          {console.log(open)}
      </div>
    </React.Fragment>
  )
}

export default App
