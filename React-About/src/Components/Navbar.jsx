import React from 'react'
import sedcloud from "../Assests/SedcloudCrmlogo.svg"
const Navbar = () => {

  //contact btn

  const contact=()=> {
    alert("Thank you for your interest on it")
  }
  return (
    <div>
        <div className="nav-container pr-5 pl-35">
        <div className="navbar flex gap-120">
          {<img src={sedcloud}/>}
          <div className="nav-content">
          <button className='pr-15 cursor-pointer outline-none'>Services</button>
          <button className='pr-15 cursor-pointer outline-none'>Platform</button>
          <button className='pr-15 cursor-pointer outline-none'>About us</button>
          <button className='pr-15 cursor-pointer outline-none'>Insights</button> 
          <button className=' px-8 py-1 cursor-pointer outline-none bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'onClick={()=>contact()}>Contact us</button>
          </div>
        </div>
        </div>
   </div>
  )
}
export default Navbar