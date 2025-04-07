import React from 'react'
import rectangle from "../assets/Rectangle-1246.png"

const Fullimg = () => {
  return (
    <div>
        <div class="full-img">
           {<img src={rectangle} style={{width:"100%"}}/>}
        </div>
    </div>
  )
}

export default Fullimg