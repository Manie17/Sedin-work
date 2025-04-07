import React from 'react'
import sedcloud from "../assets/SedcloudCrm.svg"
import clutchsaleforce from "../assets/salesforce-clutch-1.svg"
import linkedinlogo from "../assets/linkedin_logo.svg"
import partner1  from "../assets/PARTNER-1.SVG"
import partner2 from "../assets/partner-2.svg"
import partner3 from "../assets/partner-3.svg"
const Footer = () => {
  return (
    <div>
         <section class="revamped-footer">
                <footer class="footer text-light">
                    <div class="container">
                        <div class="row footer-grid">
                            {/* <!-- Left Section (Logo & Ratings) --> */}
                            <div class="col-lg-3 col-md-6 mb-4 pt-3">
                              {<img src={sedcloud} alt="sed-cloud"/>}
                              {<img src={clutchsaleforce} alt="sed-cloud"/>}
                           <div class="d-flex gap-3 pt-3">
                                   {<img src={partner1}/>}
                                   {<img src={partner2}/>}
                                   {<img src={partner3}/>}
                             </div>
                                <p class="mt-3">{<img src={linkedinlogo}></img>}</p>
                            </div>

                            {/* <!-- About --> */}
                            <div class="col-lg-2 col-md-6 mb-4">
                                <h5 class="r-footer-h5">About</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="revamped-footer-link text-decoration-none">Our Company</a>
                                    </li>
                                    <li><a href="#" class="revamped-footer-link text-decoration-none">Blogs</a></li>
                                    <li><a href="#" class="revamped-footer-link text-decoration-none">Case Studies</a>
                                    </li>
                                    <li><a href="#" class="revamped-footer-link text-decoration-none">Contact us</a>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Services --> */}
                            <div class="col-lg-3 col-md-6 mb-4">
                                <h5 class="r-footer-h5">Services</h5>
                                <ul class="list-unstyled">
                                    <li><a target="_parent" href="/services/salesforce-consulting-services.html"
                                            class="revamped-footer-link text-decoration-none">Consulting</a></li>
                                    <li><a target="_parent" href="/services/salesforce-implementation-services.html"
                                            class="revamped-footer-link text-decoration-none">Salesforce
                                            Implementation</a>
                                    </li>
                                    <li><a target="_parent" href="/services/custom-salesforce-development-services.html"
                                            class="revamped-footer-link text-decoration-none">Development &
                                            Customization</a></li>
                                    <li><a target="_parent"
                                            href="/services/salesforce-support-and-maintenance-services.html"
                                            class="revamped-footer-link text-decoration-none">Admin Support &
                                            Maintenance</a></li>
                                    <li><a target="_parent" href="/services/salesforce-data-migration-services.html"
                                            class="revamped-footer-link text-decoration-none">Lightning Migration</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <h5 class="r-footer-h5">Platform</h5>
                                <div class="row">
                                    <div class="col-lg-6 col-sm-12">
                                        <ul class="list-unstyled">
                                            <li><a target="_parent" href="/platform/salesforce-sales-cloud.html"
                                                    class="revamped-footer-link text-decoration-none">Sales Cloud</a>
                                            </li>
                                            <li><a target="_parent" href="/platform/salesforce-service-cloud.html"
                                                    class="revamped-footer-link text-decoration-none">Services Cloud</a>
                                            </li>
                                            <li><a target="_parent" href="/platform/salesforce-marketing-cloud.html"
                                                    class="revamped-footer-link text-decoration-none">Marketing
                                                    Cloud</a>
                                            </li>
                                            <li><a target="_parent" href="/platform/salesforce-pardot-cloud.html"
                                                    class="revamped-footer-link text-decoration-none">Pardot</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-sm-12">
                                        <ul class="list-unstyled">
                                            <li><a target="_parent"
                                                    href="/platform/salesforce-financial-service-cloud.html"
                                                    class="revamped-footer-link text-decoration-none">Finance Cloud</a>
                                            </li>
                                            <li><a target="_parent" href="/platform/salesforce-pardot-cloud.html"
                                                    class="revamped-footer-link text-decoration-none">Data Cloud</a>
                                            </li>
                                            <li><a target="_parent" href="/platform/salesforce-pardot-cloud.html"
                                                    class="revamped-footer-link text-decoration-none">Commerce Cloud</a>
                                            </li>
                                            <li><a target="_parent" href="/platform/salesforce-pardot-cloud.html"
                                                    class="revamped-footer-link text-decoration-none">Integration
                                                    Cloud</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* 
                        <!-- Bottom Footer  */}
                        {/* <hr class="border-light"> */}
                        <div class="d-flex justify-content-between align-items-center flex-wrap r-footer-grid">
                            <p class="r-footer-p1">©
                                <script type="text/javascript">
                                    var year = new Date();
                                    document.write(year.getFullYear());
                                </script>
                                <a class="footer-web text-decoration-none text-white"
                                    href="https://sedintechnologies.com/">Sedin Technologies Inc</a>
                            </p>
                            <p class="r-footer-p1">
                                <a href="#" class="text-light text-decoration-none">Terms & Conditions</a> |
                                <a href="#" class="text-light text-decoration-none">Privacy Policy</a>
                            </p>
                        </div>
                    </div>
         </footer>

        </section>
    </div>
  )
}

export default Footer