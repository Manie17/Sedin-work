import React from 'react'
import orgback from "../Assests/background.png"

const Organisaton = () => {
  return (
    <div>
        <div className="container">
            <div className="bg-cover s-screen pr-5 pl-35 pt-35"
              style={{backgroundImage: `url(${orgback})` }}>
          <h1 className='text-6xl text-dark'>Unlock the full potential of Salesforce for your organisation</h1>   
          <div className="btn pt-25 pb-15">
          <button className='px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-black-600 transition'>Talk to a Salesforce Expert</button>  
          </div>      
         </div>
        </div>
    </div>
  )
}

export default Organisaton