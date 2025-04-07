import React from 'react'
import partner1 from "../Assests/partner-1.svg"
import partner2 from "../Assests/partner 2.svg"
import partner3 from "../Assests/partner 3.svg"
import sedcloud from "../Assests/SedcloudCrmlogo.svg"
import clutch from "../Assests/clutch 1.png"


const Footer = () => {
  return (
    <div className='bg-black pt-15'>
        <div className="footer pr-5 pl-35 pb-45">
            <div className="grid grid-cols-5">
                <div className="row">
              {<img src={sedcloud} className='pb-10'/>}
              {<img src={clutch} className='pb-10'/>}
              
         <div className="footer-img flex gap-4">
                    {<img src={partner1}/>}
                    {<img src={partner2}/>}
                    {<img src={partner3}/>}
         </div>
         </div>
            <div className="about pl-30">
                <h1 className='text-2xl pb-5 text-white'>About</h1>
            <ul class="list-unstyled">
                <li className='pb-2'>
                 <a href="#" className='text-gray-500'>Our Company</a>
                 </li>
                 <li className='pb-2'>
                 <a href="#"  className='text-gray-500'>Blogs</a>
                 </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Case Studies</a>
                 </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Contact us</a>
                </li>
           </ul>
            </div>
            <div className="about pl-30">
                <h1 className='text-2xl pb-5 text-white'>Services</h1>
            <ul class="list-unstyled">
                <li className='pb-2'>
                 <a href="#" className='text-gray-500'>Consulting</a>
                 </li>
                 <li className='pb-2'>
                 <a href="#"  className='text-gray-500'>Salesforce Implementation</a>
                 </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Development & Customization</a>
                 </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Admin Support & Maintenance</a>
                </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Lightning Migration</a>
                </li>
            </ul>
            </div> <div className="about pl-30">
                <h1 className='text-2xl pb-5 text-white'>Platform</h1>
            <ul class="list-unstyled">
                <li className='pb-2'>
                 <a href="#" className='text-gray-500'>Sales cloud</a>
                 </li>
                 <li className='pb-2'>
                 <a href="#"  className='text-gray-500'>Services Cloud</a>
                 </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Marketing Cloud </a>
                 </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>pardot</a>
                </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Finance cloud</a>
                </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Data cloud</a>
                </li>
                </ul>
            </div> 
            <div className="about pl-30">
            <ul class="list-unstyled">
                <li className='pb-2'>
                 <a href="#" className='text-gray-500'>Sales cloud</a>
                 </li>
                 <li className='pb-2'>
                 <a href="#"  className='text-gray-500'>Services Cloud</a>
                 </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Marketing Cloud </a>
                 </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>pardot</a>
                </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Finance cloud</a>
                </li>
                <li className='pb-2'><a href="#"  className='text-gray-500'>Data cloud</a>
                </li>
                </ul>
            </div>
        </div>
  </div>
    </div>
  )
}

export default Footer