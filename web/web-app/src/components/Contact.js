import React from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <div class="page-header bg-darker" id="contact">
            <section>
                <div class="row align-items-center justify-content-center">
                    <div class="col d-flex justify-content-center">
                        <h1 class="h1-grad">Get In Touch</h1>
                    </div>
                </div>
            </section>

            <div class="always_centered">
                <p>To follow us on social media please use the links below.</p>
            </div>

            <div class="row always_centered">
                <div class="" style={{ width: '100px'}}>
                    <a href="https://twitter.com/CardanoBI" class="popup-button glow-on-hover" target="_blank" rel="noopener noreferrer">
                        <div class="align-items-center justify-content-center" style={{ width: "60px", height: "60px", display: "inline" }}><FaTwitter size={30} /></div>
                    </a>
                </div>
                <div class="" style={{ width: '100px'}}>
                    <a href="https://github.com/adacapital/cardanobi" class="popup-button glow-on-hover" target="_blank" rel="noopener noreferrer">
                        <div class="align-items-center justify-content-center" style={{ width: "60px", height: "60px", display: "inline" }}><FaGithub size={30} /></div>
                    </a>
                </div>
                <div class="" style={{ width: '100px'}}>
                    <a href="mailto:contact@cardanobi.io" class="popup-button glow-on-hover" target="_blank" rel="noopener noreferrer">
                        <div class="align-items-center justify-content-center" style={{ width: "60px", height: "60px", display: "inline" }}><MdAlternateEmail size={30} /></div>
                    </a>
                </div>
            </div>

            <svg width="100%" height="100%" id="svg" viewBox="0 75 1440 250" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 97.82142857142861,266.3571428571429 195.64285714285722,282.7142857142857 314,301 C 432.3571428571428,319.2857142857143 571.2499999999998,339.5 709,311 C 846.7500000000002,282.5 983.3571428571429,205.28571428571428 1105,187 C 1226.642857142857,168.71428571428572 1333.3214285714284,209.35714285714286 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
            <svg width="100%" height="100%" id="svg" viewBox="0 175 1440 250" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 97.82142857142861,266.3571428571429 195.64285714285722,282.7142857142857 314,301 C 432.3571428571428,319.2857142857143 571.2499999999998,339.5 709,311 C 846.7500000000002,282.5 983.3571428571429,205.28571428571428 1105,187 C 1226.642857142857,168.71428571428572 1333.3214285714284,209.35714285714286 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
        </div> 
    )
}

export default Contact
