import React from 'react'
import heroimg from "../Assests/herobanner.png"
import heropf from "../Assests/heropf.svg"

const Hero = () => {
  return (
    <div>
         <div className="hero-container pr-5 pl-5">
         <div className="hero-head">
             <p className='text-2xl text-gray-500 pl-35 pb-15 pt-25'>Blog</p>
             <h1 className='text-6xl pl-35 '>We help solve your most complex business problems at every level using Salesforce</h1>      
             <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 pl-35 pt-20">
    {/* <!-- Left Side - Image --> */}
    <div>
        {<img src={heroimg}/>}
    </div>
{/* 
    <!-- Right Side - Content --> */}
     <div class="justify-center pt-4">
        <button className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>SALEFORCE INTEGRATION</button>
        <h2 class="text-6xl mb-4 pt-10">Choosing the Right Cloud Consulting Company: A Decision-Making Guide</h2>
    <div className="hero-footer flex gap-8 pt-20">
        {<img src={heropf}/>}
        <p className='text-2xl pt-1'>lorem ipsum</p>
        <p className='text-2xl text-gray-500 pt-1'>5 mins</p>
</div>
    </div>
</div>
</div>
   </div>
   </div>
  </div>
 )
}

export default Hero