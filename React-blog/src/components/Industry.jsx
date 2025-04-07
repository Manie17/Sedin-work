import React from 'react'
import group from "../assets/Group-152.svg"

const Industry = () => {
  return (
    <div>
         <section className="indus-expert bg-dark">
                <div class="container cmn-container">
                    <div class="row">
                        <h1 class="text-h2 text-white">Rated #1 by analysts, industry experts, and our customers</h1>
                        <div class="col-lg-3 col-md-6  pt-3 pb-2">
                           {<img src={group}/>}
                           <p class="star-text">4.9 / 5 rating</p>
                        </div>
                        <div class="col-lg-3 col-md-6 pt-3 pb-2">
                        {<img src={group}/>}
                            <p class="star-text pb-1">4.9 / 5 rating</p>
                        </div>
                        <div class="col-lg-3 col-md-6 pt-3 pb-2">
                        {<img src={group}/>}
                            <p class="star-text pb-1">4.9 / 5 rating</p>
                        </div>
                        <div class="col-lg-3 col-md-6 pt-3 pb-2">
                        {<img src={group}/>}
                            <p class="star-text pb-1">4.9 / 5 rating</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Industry