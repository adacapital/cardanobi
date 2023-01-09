import React from 'react'
// import 'antd/dist/antd.css';
import { Modal } from 'antd';

function countDownPopup() {
  let secondsToGo = 2;
  const modal = Modal.warning({
    title: 'Coming soon...',
    className: "modalStyle",
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

const Header = () => {
  return (
    <header class="page-header bg-darker" id="home">
      <svg width="100%" height="100%" id="svg" viewBox="0 40 1440 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 124.10714285714286,256.8928571428571 248.21428571428572,263.7857142857143 362,274 C 475.7857142857143,284.2142857142857 579.2499999999999,297.75 693,275 C 806.7500000000001,252.25 930.7857142857142,193.2142857142857 1057,183 C 1183.2142857142858,172.7857142857143 1311.607142857143,211.39285714285717 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" transform="rotate(-180 720 250)"></path></svg>

      <div class="container">
        <section class="intro">
          <div class="intro-inner">
            <div class="intro-content">
              <br/><br/>
              <h1 class="h1-grad">A Fully Open-Source<br/>Business Intelligence<br/>API Layer For Cardano</h1>
              <h2 class="h2-custom">Build new data-driven services.<br/>Enable event-driven workflows.<br/>Access unique data-insights.</h2>
              <div class="row">
                <div class="col centered pt-3">
                  <a href="https://docs.cardanobi.io" target="_blank" rel="noopener noreferrer" class="popup-button glow-on-hover">🔥Launch Docs
                  </a>
                </div>
                <div class="col centered pt-3">
                  {/* <a href="#" class="popup-button glow-on-hover" style={{width: "250px"}} onClick={() => { countDownPopup(); }}>Launch App</a> */}
                  <a href="#" class="popup-button glow-on-hover" onClick={() => { countDownPopup(); }}>Launch App</a>
                </div>
                <div class="col centered pt-3">
                  {/* <a href="#features" class="popup-button glow-on-hover" style={{width: "250px"}}>Learn More</a> */}
                  <a href="#features" class="popup-button glow-on-hover">Learn More</a>
                </div>
              </div>
            </div>
            <div class="intro-art m-n1 align-items-center">
              <img src="img/ada_net_vect.png" style={{width: '98%', height: '98%'}} alt="" />
              {/* <img src="img/ada_net_vect2.svg" style={{width: '900px', height: '900px'}} alt="" /> */}
            </div>
          </div>
        </section>
      </div>

      <svg width="100%" height="100%" id="svg" viewBox="0 75 1440 250" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 97.82142857142861,266.3571428571429 195.64285714285722,282.7142857142857 314,301 C 432.3571428571428,319.2857142857143 571.2499999999998,339.5 709,311 C 846.7500000000002,282.5 983.3571428571429,205.28571428571428 1105,187 C 1226.642857142857,168.71428571428572 1333.3214285714284,209.35714285714286 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      <svg width="100%" height="100%" id="svg" viewBox="0 175 1440 250" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 97.82142857142861,266.3571428571429 195.64285714285722,282.7142857142857 314,301 C 432.3571428571428,319.2857142857143 571.2499999999998,339.5 709,311 C 846.7500000000002,282.5 983.3571428571429,205.28571428571428 1105,187 C 1226.642857142857,168.71428571428572 1333.3214285714284,209.35714285714286 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>
    </header>
  )
}

export default Header
