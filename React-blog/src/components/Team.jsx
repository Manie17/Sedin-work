import React from "react";
import card1 from "../assets/card-1.png";
import inlogo from "../assets/Social.svg"

const Team = () => {
  return (
    <div>
        <section class="team-members">
            <div class="container cmn-container">
                <div class="row">
                    <div class="head-team">
                        <h2 class="text-h2 pb-2">Say hello to our team members</h2>
                        <p class="text-p1 fw-*400 pb-5">We love what we do and we do it with passion. We value the
                            experimentation of the message and smart incentives.</p>
                    </div>

                    <div id="carouselExampleAutoplaying" class="carousel slide d-block d-md-none"
                        data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card-border text-center">
                                    <div class="card-content">
                                        <div class="team-img px-5">
                                           {<img src={card1}/>}
                                            <h5 class="card-h pt-2">Aasri</h5>
                                            <p class="card-p">Head of Service Delivery</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                               {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-border text-center">
                                    <div class="card-content">
                                        <div class="team-img px-5">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">John Doe</h5>
                                            <p class="card-p">Project Manager</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                            {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card-border text-center">
                                    <div class="card-content">
                                        <div class="team-img px-5">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">John Doe</h5>
                                            <p class="card-p">Project Manager</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card-border text-center">
                                    <div class="card-content">
                                        <div class="team-img px-5">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">John Doe</h5>
                                            <p class="card-p">Project Manager</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center pt-5">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-border text-center">
                                    <div class="card-content">
                                        <div class="team-img px-5 ">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">John Doe</h5>
                                            <p class="card-p">Project Manager</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-border text-center">
                                    <div class="card-content">
                                        <div class="team-img px-5">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">John Doe</h5>
                                            <p class="card-p">Project Manager</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                    </div>

                    {/* <!-- Add more carousel items as needed --> */}

                    <div class="d-none d-md-block">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 pt-5">
                                <div class="card-border">
                                    <div class="card-content">
                                        <div class="team-img px-5 pt-4">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">Aasri</h5>
                                            <p class="card-p">Head of Service Delivery</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 pt-5">
                                <div class="card-border">
                                    <div class="card-content">
                                        <div class="team-img px-5 pt-4">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">Aasri</h5>
                                            <p class="card-p">Head of Service Delivery</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6  pt-5">
                                <div class="card-border">
                                    <div class="card-content">
                                        <div class="team-img px-5 pt-4">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">Aasri</h5>
                                            <p class="card-p">Head of Service Delivery</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6  pt-5">
                                <div class="card-border">
                                    <div class="card-content">
                                        <div class="team-img px-5 pt-4">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">Aasri</h5>
                                            <p class="card-p">Head of Service Delivery</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 pt-5">
                                <div class="card-border">
                                    <div class="card-content">
                                        <div class="team-img px-5 pt-4">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">Aasri</h5>
                                            <p class="card-p">Head of Service Delivery</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 pt-5">
                                <div class="card-border">
                                    <div class="card-content">
                                        <div class="team-img px-5 pt-4">
                                        {<img src={card1}/>}
                                            <h5 class="card-h pt-2">Aasri</h5>
                                            <p class="card-p">Head of Service Delivery</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="linked-in d-flex justify-content-center">
                                                  {<img src={inlogo}/>}
                                                <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
                                                    class="text-decoration-none text-white">
                                                    <p class="m-0">Linked-In</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Team
