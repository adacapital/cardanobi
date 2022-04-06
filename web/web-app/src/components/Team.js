import React from 'react'
import { FaLinkedinIn, FaLink, FaTwitter, FaTelegramPlane, FaMediumM, FaYoutube, FaGithub } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi'

const Team = () => {
    return (
        <div class="page-header bg-darker" id="team">
            <section class="">
                <div class="row align-items-center justify-content-center">
                    <div class="col d-flex justify-content-center">
                        <h1 class="h1-grad">Meet Our Team</h1>
                    </div>
                </div>
            </section>
            <div class="navbar-container margin-bottom-0">
                <div class="grid features-full x4">
                    <div class="features-card">
                        <div class="features-card-top-2">
                            <img src="img/thomas_stylized_3.png" style={{ width: '200px', height: '200px', borderRadius: 200 / 2 }} alt="" />
                            <h4><b>Thomas Langlois</b></h4>
                            <h5 class="sub-text">Lead architect, backend/frontend developer</h5>
                            <a class="a-lnk" href="https://www.linkedin.com/in/langloisthomas/" target="_blank" rel="noopener noreferrer">
                              <div class="popup-button glow-on-hover align-items-center justify-content-center" style={{width: "50px", height: "50px"}}><FaLinkedinIn size={25} /></div>
                            </a>
                        </div>
                    </div>
                    <div class="features-card">
                        <div class="features-card-top-2">
                            <img src="img/ahmed.jpg" style={{ width: '200px', height: '200px', borderRadius: 200 / 2 }} alt="" />
                            <h4><b>Ahmed Abouelnour</b></h4>
                            <h5 class="sub-text">Data architect, event-driven architect, backend developer</h5>
                            <a class="a-lnk" href="https://www.linkedin.com/in/ahmed-abouelnour0/" target="_blank" rel="noopener noreferrer">
                              <div class="popup-button glow-on-hover align-items-center justify-content-center" style={{width: "50px", height: "50px"}}><FaLinkedinIn size={25} /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br>
            <section class="">
                <div class="row align-items-center justify-content-center">
                    <div class="col d-flex justify-content-center">
                        <h1 class="h1-grad">Meet Our Partners</h1>
                    </div>
                </div>
            </section>
            <div class="navbar-container margin-bottom-0">
                <div class="grid features-full x4">
                    <div class="features-card">
                        <div class="features-card-top-2">
                            <img src="img/adacapital_logo2_white4_crop.png" style={{ width: '450px', height: '114px'}} alt="" />
                            <h4><b>ADA Capital</b></h4>
                            <a class="a-lnk" href="https://adacapital.io/" target="_blank" rel="noopener noreferrer">
                              <div class="popup-button glow-on-hover align-items-center justify-content-center" style={{width: "50px", height: "50px"}}><FaLink size={25} /></div>
                            </a>
                        </div>
                    </div>
                    <div class="features-card">
                        <div class="features-card-top-2">
                            <img src="img/zete_logo.jpg" style={{ width: '120px', height: '120px', borderRadius: 120 / 2  }} alt="" />
                            <h4><b>Zetetic Staking</b></h4>
                            <a class="a-lnk" href="https://zetetic.tech/" target="_blank" rel="noopener noreferrer">
                              <div class="popup-button glow-on-hover align-items-center justify-content-center" style={{width: "50px", height: "50px"}}><FaLink size={25} /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <svg width="100%" height="100%" id="svg" viewBox="0 75 1440 250" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 97.82142857142861,266.3571428571429 195.64285714285722,282.7142857142857 314,301 C 432.3571428571428,319.2857142857143 571.2499999999998,339.5 709,311 C 846.7500000000002,282.5 983.3571428571429,205.28571428571428 1105,187 C 1226.642857142857,168.71428571428572 1333.3214285714284,209.35714285714286 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            <svg width="100%" height="100%" id="svg" viewBox="0 175 1440 250" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 97.82142857142861,266.3571428571429 195.64285714285722,282.7142857142857 314,301 C 432.3571428571428,319.2857142857143 571.2499999999998,339.5 709,311 C 846.7500000000002,282.5 983.3571428571429,205.28571428571428 1105,187 C 1226.642857142857,168.71428571428572 1333.3214285714284,209.35714285714286 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
        </div>
    )
}

export default Team
