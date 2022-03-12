import React from 'react'

const Education = () => {
  return (
      <div class="page-header bg-dark" id="education">
          <div class="container">
              <div class="row align-items-center justify-content-center">
                  <div class="col-12 d-flex justify-content-center">
                      <h1><strong>Education</strong></h1>
                  </div>
                  <div class="col-12 d-flex align-items-center justify-content-center p-4">
                      <div>
                          <p class="large-first-letter">Our ambition is to create compelling content that will <strong>educate</strong>, <strong>inform</strong> and <strong>inspire</strong> others to get into Cardano as <strong>investors</strong> or as <strong>developers</strong> to help build new utilities on Cardano.</p>
                          <p class="large-first-letter">For our Educational content we will be using 2 channels: <a class="a-grad1 glow-on-hover" href="https://medium.com/ada-capital" target="_blank" rel="noopener noreferrer"><strong>Medium</strong></a>  and <a class="a-grad1 glow-on-hover" href="https://www.youtube.com/channel/UCnZQvrAsqteYLpmEWb418yA" target="_blank" rel="noopener noreferrer"><strong>Youtube</strong></a>.</p>
                      </div>
                  </div>
                  <div class="col-12 d-flex align-items-center justify-content-center p-4">
                      <div class="card-static slide-in-bottom align-items-center justify-content-center" style={{ width: '70%' }}>
                          <div class="align-items-center"><a class="a-grad1 glow-on-hover" href="https://medium.com/ada-capital" target="_blank" rel="noopener noreferrer"><strong>ADA Capital</strong> Medium Publications</a></div>
                          {/* <div id="medium-widget"></div> */}
                      </div>
                  </div>
              </div>
          </div>
          <svg id="svg" viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150">
              <defs>
                  <linearGradient id="gradient_2">
                      <stop offset="5%" stop-color="#d6ff30ff"></stop>
                      <stop offset="95%" stop-color="#00f6ffff"></stop>
                  </linearGradient>
              </defs>
              <path d="M 0,400 C 0,400 0,200 0,200 C 106.42857142857142,225.96428571428572 212.85714285714283,251.92857142857142 328,252 C 443.14285714285717,252.07142857142858 567.0000000000001,226.25000000000003 684,200 C 800.9999999999999,173.74999999999997 911.1428571428571,147.07142857142856 1036,147 C 1160.857142857143,146.92857142857144 1300.4285714285716,173.46428571428572 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient_2)" class="transition-all duration-300 ease-in-out delay-150"></path>
          </svg>
          <svg id="svg2" viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150">
              <defs>
                  <linearGradient id="gradient">
                      <stop offset="5%" stop-color="#00f6ffff"></stop>
                      <stop offset="95%" stop-color="#d6ff30ff"></stop>
                  </linearGradient>
              </defs>
              <path d="M 0,400 C 0,400 0,200 0,200 C 141.75,221.28571428571428 283.5,242.57142857142856 401,256 C 518.5,269.42857142857144 611.7499999999999,275 722,268 C 832.2500000000001,261 959.5000000000002,241.42857142857142 1082,228 C 1204.4999999999998,214.57142857142858 1322.25,207.28571428571428 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>
      </div>
  )
}

export default Education
