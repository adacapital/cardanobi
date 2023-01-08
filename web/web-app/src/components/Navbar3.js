import React from 'react'
import { useCallback } from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const onThemeToggleClick = useCallback(() => {
    // alert(`I was clicked, ${obj_id}`);
    // console.log("data-theme:", document.documentElement.getAttribute("data-theme"));
    let logoSrc = "img/cardanobi_logo_full_black.png";
    let toggleBtnTitle = "Switch between dark and light mode (currently light mode)";

    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
        logoSrc = "img/cardanobi_logo_full_white.png";
        toggleBtnTitle = "Switch between dark and light mode (currently dark mode)";
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);

    document.getElementById('brand_logo').src = logoSrc;
    document.getElementById('theme_toggle_btn').setAttribute('title', toggleBtnTitle);
    // document.getElementById('theme_toggle_btn').setAttribute('aria-label', toggleBtnTitle);
  });
  
  return (
    // <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#home"><img src="img/cardanobi_logo_full_white.png" id="brand_logo" style={{ width: '192px', height: '40px' }} alt="" /></a>
        <b class="navbar__title text--truncate">Alpha</b>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav no-wrap">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#docs">Docs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <div class="navbar__items navbar__items--right">
            <a href="https://github.com/cardanobi" target="_blank" rel="noopener noreferrer" class="navbar__item navbar__link"><FaGithub size={30} />
            </a>
            <div class="toggle_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module colorModeToggle_node_modules-@docusaurus-theme-classic-lib-theme-Navbar-Content-styles-module">
                <button class="clean-btn toggleButton_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module" type="button" id="theme_toggle_btn" title="Switch between dark and light mode (currently dark mode)" aria-label="Switch between dark and light mode (currently dark mode)" aria-live="polite" onClick={() => { onThemeToggleClick(this); }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" class="lightToggleIcon_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module">
                        <path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24" width="24" height="24" class="darkToggleIcon_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module">
                        <path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path>
                    </svg>
                </button>
            </div>
            <div class="searchBox_node_modules-@docusaurus-theme-classic-lib-theme-Navbar-Search-styles-module"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
