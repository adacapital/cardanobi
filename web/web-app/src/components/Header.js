import React from 'react'
import 'antd/dist/antd.css';
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
      {/* <svg id="svg2" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#00f6ffff"></stop><stop offset="95%" stop-color="#d6ff30ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 141.75,221.28571428571428 283.5,242.57142857142856 401,256 C 518.5,269.42857142857144 611.7499999999999,275 722,268 C 832.2500000000001,261 959.5000000000002,241.42857142857142 1082,228 C 1204.4999999999998,214.57142857142858 1322.25,207.28571428571428 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg> */}
      {/* <svg id="visual" viewBox="0 0 1440 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150"><path d="M0 47L10 50.2C20 53.3 40 59.7 60 62.5C80 65.3 100 64.7 120 67.2C140 69.7 160 75.3 180 76C200 76.7 220 72.3 240 68.3C260 64.3 280 60.7 300 61.8C320 63 340 69 360 70.5C380 72 400 69 420 70.5C440 72 460 78 480 75.3C500 72.7 520 61.3 540 58C560 54.7 580 59.3 600 62.7C620 66 640 68 660 65.2C680 62.3 700 54.7 720 56C740 57.3 760 67.7 780 73.8C800 80 820 82 840 81.5C860 81 880 78 900 76.5C920 75 940 75 950 75L960 75L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z" fill="#ffd700"></path><path d="M0 42L10 42C20 42 40 42 60 37.8C80 33.7 100 25.3 120 24.5C140 23.7 160 30.3 180 34.7C200 39 220 41 240 41.5C260 42 280 41 300 39C320 37 340 34 360 31.8C380 29.7 400 28.3 420 28.8C440 29.3 460 31.7 480 31.8C500 32 520 30 540 30.8C560 31.7 580 35.3 600 36.3C620 37.3 640 35.7 660 32.7C680 29.7 700 25.3 720 22.8C740 20.3 760 19.7 780 22.5C800 25.3 820 31.7 840 36.3C860 41 880 44 900 45.8C920 47.7 940 48.3 950 48.7L960 49L960 0L950 0C940 0 920 0 900 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z" fill="#0057b8"></path></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" class="row transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#00f6ffff"></stop><stop offset="95%" stop-color="#d6ff30ff"></stop></linearGradient></defs><path d="M0,288L0,96L40,96L40,224L80,224L80,288L120,288L120,64L160,64L160,288L200,288L200,128L240,128L240,128L280,128L280,160L320,160L320,320L360,320L360,224L400,224L400,96L440,96L440,160L480,160L480,288L520,288L520,320L560,320L560,288L600,288L600,96L640,96L640,32L680,32L680,96L720,96L720,288L760,288L760,256L800,256L800,0L840,0L840,32L880,32L880,64L920,64L920,128L960,128L960,0L1000,0L1000,192L1040,192L1040,256L1080,256L1080,64L1120,64L1120,64L1160,64L1160,128L1200,128L1200,320L1240,320L1240,192L1280,192L1280,0L1320,0L1320,128L1360,128L1360,32L1400,32L1400,256L1440,256L1440,0L1400,0L1400,0L1360,0L1360,0L1320,0L1320,0L1280,0L1280,0L1240,0L1240,0L1200,0L1200,0L1160,0L1160,0L1120,0L1120,0L1080,0L1080,0L1040,0L1040,0L1000,0L1000,0L960,0L960,0L920,0L920,0L880,0L880,0L840,0L840,0L800,0L800,0L760,0L760,0L720,0L720,0L680,0L680,0L640,0L640,0L600,0L600,0L560,0L560,0L520,0L520,0L480,0L480,0L440,0L440,0L400,0L400,0L360,0L360,0L320,0L320,0L280,0L280,0L240,0L240,0L200,0L200,0L160,0L160,0L120,0L120,0L80,0L80,0L40,0L40,0L0,0L0,0Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path></svg> */}
      {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="40%" y1="1%" x2="60%" y2="99%"><stop offset="5%" stop-color="#2d00b8ff"></stop><stop offset="95%" stop-color="#ffd700ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 138.64285714285717,269.7857142857143 277.28571428571433,289.57142857142856 415,299 C 552.7142857142857,308.42857142857144 689.5,307.49999999999994 782,301 C 874.5,294.50000000000006 922.7142857142858,282.42857142857144 1025,273 C 1127.2857142857142,263.57142857142856 1283.642857142857,256.7857142857143 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg> */}
      {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#ff6900ff"></stop><stop offset="95%" stop-color="#fcb900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 124.10714285714286,256.8928571428571 248.21428571428572,263.7857142857143 362,274 C 475.7857142857143,284.2142857142857 579.2499999999999,297.75 693,275 C 806.7500000000001,252.25 930.7857142857142,193.2142857142857 1057,183 C 1183.2142857142858,172.7857142857143 1311.607142857143,211.39285714285717 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg> */}
      <svg width="100%" height="100%" id="svg" viewBox="0 40 1440 300" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 124.10714285714286,256.8928571428571 248.21428571428572,263.7857142857143 362,274 C 475.7857142857143,284.2142857142857 579.2499999999999,297.75 693,275 C 806.7500000000001,252.25 930.7857142857142,193.2142857142857 1057,183 C 1183.2142857142858,172.7857142857143 1311.607142857143,211.39285714285717 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" transform="rotate(-180 720 250)"></path></svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 300"><defs><linearGradient id="linear-gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><g id="Layer_2" data-name="Layer 2"><g id="svg"><path d="M1600.00008,0V277.77779c-137.89683-7.65872-388.44447-204.66667-402.22225-26.66667-16.77777,219-340.062-357.40728-367.77777-1.1111C810.31232,503.09262,168.6954-308.42061,0,277.77779V0Z" fill="url(#linear-gradient)"/></g></g></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 469.02945"><defs><linearGradient id="linear-gradient" x1="46%" y1="100%" x2="54%" y2="0%"><stop offset="5%" stop-color="#fcb900ff"></stop><stop offset="95%" stop-color="#ff6900ff"></stop></linearGradient></defs><g id="Layer_2" data-name="Layer 2"><g id="svg"><path d="M1600,166.70717V444.50709c-137.9-7.7-388.4-204.69995-402.19995-26.69995-16.80005,219-340.1-357.4-367.80005-1.1-2.34406,30.15094-16.5907,42.2648-18.70544,43.62393C746.73419,501.82356,445.00632-34.95519,234,1.80714c-81.18422,14.14423-168.675,116.62879-234,442.7v-277.8Z" fill="url(#linear-gradient)"/></g></g></svg> */}

      <div class="container">
        <section class="intro">
          <div class="intro-inner">
            <div class="intro-content">
              <br/><br/>
              <h1 class="h1-grad">A Fully Open-Source<br/>Business Intelligence<br/>API Layer For Cardano</h1>
              <h2 class="h2-custom">Build new data-driven services.<br/>Enable event-driven workflows.<br/>Access unique data-insights.</h2>
              <div class="row">
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
