import React from 'react'
import social from "../assets/Social.svg"
import navlogo from "../assets/sedcloudcrmlogo.svg"

const Navbar = () => {
  return (
    <div>
        <header class="header-navbar">
        <nav class="navbar navbar-for-home fixed-top navbar-expand-lg salesforce-header mt-0" id="myHeader">
            <div class="container">
                <div class="sedin-salesforce-logo">
                    <a href="https://sedcloudcrm.com/">
                        {<img src={navlogo}/>}
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        {/* <!-- <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="https://sedcloudcrm.com/">Home</a>
                        </li> --> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="servicesDropdown" aria-expanded="false"
                                data-bs-toggle="dropdown">
                                Services
                            </a>
                            <div class="dropdown-menu shadow border-0">
                                <div class="row custom-row">
                                    <div class="col-md-6">
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                          {<img src={social} style={{widht:30}} />}
                                            <div>
                                                <p class="nav-p1">Consulting & Strategy</p>
                                                <p class="dropdown-desc">Connect to your warehouse</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}style={{widht:30}} />}
                                            <div>
                                                <p class="nav-p1">Salesforce Implementation</p>
                                                <p class="dropdown-desc">Optimize CRM for your business</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}style={{widht:30}} />}
                                            <div>
                                                <p class="nav-p1">Data Migration & Management</p>
                                                <p class="dropdown-desc">Seamless data transfer solutions</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}style={{widht:30}} />}
                                            <div>
                                                <p class="nav-p1">Custom Development Services</p>
                                                <p class="dropdown-desc">Tailor-made business solutions</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6">
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}style={{widht:30}} />}
                                            <div>
                                                <p class="nav-p1">AI & Automation</p>
                                                <p class="dropdown-desc">Enhance efficiency with AI tools</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}style={{widht:30}} />}
                                            <div>
                                                <p class="nav-p1">Cloud Solutions</p>
                                                <p class="dropdown-desc">Scalable and secure cloud systems</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}style={{widht:30}} />}
                                            <div>
                                                <p class="nav-p1">Enterprise Integration</p>
                                                <p class="dropdown-desc">Seamless app & system integration</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}style={{widht:30}} />}
                                            <div>
                                                <p class="nav-p1">Cybersecurity</p>
                                                <p class="dropdown-desc">Advanced protection for your data</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="servicesDropdown" aria-expanded="false"
                                data-bs-toggle="dropdown">
                                Platform
                            </a>
                            <div class="dropdown-menu shadow border-0">
                                <div class="row custom-row">
                                    <div class="col-md-6">
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}/>}
                                            <div>
                                                <p class="nav-p1">Consulting & Strategy</p>
                                                <p class="dropdown-desc">Connect to your warehouse</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}/>}
                                            <div>
                                                <p class="nav-p1">Salesforce Implementation</p>
                                                <p class="dropdown-desc">Optimize CRM for your business</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}/>}
                                            <div>
                                                <p class="nav-p1">Data Migration & Management</p>
                                                <p class="dropdown-desc">Seamless data transfer solutions</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}/>}
                                            <div>
                                                <p class="nav-p1">Custom Development Services</p>
                                                <p class="dropdown-desc">Tailor-made business solutions</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-6">
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}/>}
                                            <div>
                                                <p class="nav-p1">AI & Automation</p>
                                                <p class="dropdown-desc">Enhance efficiency with AI tools</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}/>}
                                            <div>
                                                <p class="nav-p1">Cloud Solutions</p>
                                                <p class="dropdown-desc">Scalable and secure cloud systems</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}/>}
                                            <div>
                                                <p class="nav-p1">Enterprise Integration</p>
                                                <p class="dropdown-desc">Seamless app & system integration</p>
                                            </div>
                                        </a>
                                        <a class="dropdown-item d-flex align-items-start" href="#">
                                        {<img src={social}/>}
                                            <div>
                                                <p class="nav-p1">Cybersecurity</p>
                                                <p class="dropdown-desc">Advanced protection for your data</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about-us.html">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Insights</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="contact-btn text text-decoration-none" href="contact-us.html">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    </div>
  )
}

export default Navbar