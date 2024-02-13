// import React from 'react'
import { useNavigate } from "react-router-dom"
import "./FrontPage.css"
const FrontPage = () => {
const navigate = useNavigate()
const success = (()=>{
  navigate("/successPage")
})


  return (
    <div className='wrapper '>
    <div>
    <img className='image' src="https://i.pinimg.com/originals/17/5d/d3/175dd321b228e72ef723cafdf430eb35.gif" alt="" /> 
    <h1 className='header-text' >Will you be mine Valentine?</h1>
    <div className="button-section">
      <button onClick={success}  className='button1' type="submit">Yes</button>
      <button className='button2' type="submit">No</button>
    </div>
   </div>
   </div>
  )
}

export default FrontPage