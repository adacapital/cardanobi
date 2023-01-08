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
        document.getElementById('brand_logo_side').src = logoSrc;
        document.getElementById('theme_toggle_btn').setAttribute('title', toggleBtnTitle);
        // document.getElementById('theme_toggle_btn').setAttribute('aria-label', toggleBtnTitle);
    });

    const onNavToggleClick = useCallback((id) => {
        // alert(`onNavToggleClick`);
        // console.log("data-theme:", document.documentElement.getAttribute("data-theme"));
        // console.log("onNavToggleClick: ", id);

        if (id == "navbar__toggle") {
            document.getElementById('navbar').classList.add('navbar-sidebar--show');    
        }

        if (id == "navbar-sidebar__close") {
            document.getElementById('navbar').classList.remove('navbar-sidebar--show');    
        }
    });

    return (
    <nav class="navbar navbar--fixed-top" id="navbar">
        <div class="navbar__inner">
            <div class="navbar__items">
                <button aria-label="Toggle navigation bar" aria-expanded="false" class="navbar__toggle clean-btn" id="navbar__toggle" type="button" onClick={() => { onNavToggleClick(`navbar__toggle`); }}>
                    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                        <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path>
                    </svg>
                </button>
                <a class="navbar__brand" href="#home">
                    <div class="navbar__logo"><img src="img/cardanobi_logo_full_white.png" id="brand_logo" alt="CardanoBI" class="themedImage_node_modules-@docusaurus-theme-classic-lib-theme-ThemedImage-styles-module themedImage--dark_node_modules-@docusaurus-theme-classic-lib-theme-ThemedImage-styles-module"/></div>
                    <b class="navbar__title text--truncate">Alpha</b>
                </a>
                <a class="navbar__item navbar__link" href="#features">Features</a>
                <a class="navbar__item navbar__link" href="#team">Team</a>
                <a class="navbar__item navbar__link" href="#contact">Contact</a>
                <a class="navbar__item navbar__link" href="https://docs.cardanobi.io" target="_blank" rel="noopener noreferrer">Docs 
                    &nbsp;<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                </a>
                    <a class="navbar__item navbar__link" href="https://docs.cardanobi.io/blog" target="_blank" rel="noopener noreferrer">Blog 
                    &nbsp;<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                </a>
                </div>
                <div class="navbar__items navbar__items--right">
                    <a href="https://github.com/cardanobi" target="_blank" rel="noopener noreferrer" class="navbar__item navbar__link"><FaGithub size={30} />
                    </a>
                    <div class="toggle_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module colorModeToggle_node_modules-@docusaurus-theme-classic-lib-theme-Navbar-Content-styles-module">
                        <button class="clean-btn toggleButton_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module" type="button" id="theme_toggle_btn" title="Switch between dark and light mode (currently dark mode)" aria-label="Switch between dark and light mode (currently dark mode)" aria-live="polite" onClick={() => { onThemeToggleClick(`theme_toggle_btn`); }}>
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
        <div role="presentation" class="navbar-sidebar__backdrop"></div>
        <div class="navbar-sidebar" id="navbar-sidebar">
            <div class="navbar-sidebar__brand">
                <a class="navbar__brand" href="/">
                    <div class="navbar__logo"><img src="img/cardanobi_logo_full_white.png" id="brand_logo_side" alt="CardanoBI" class="themedImage_node_modules-@docusaurus-theme-classic-lib-theme-ThemedImage-styles-module themedImage--dark_node_modules-@docusaurus-theme-classic-lib-theme-ThemedImage-styles-module"/></div>
                    <b class="navbar__title text--truncate">Alpha</b>
                </a>
                <div class="toggle_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module margin-right--md">
                    <button class="clean-btn toggleButton_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module" type="button" title="Switch between dark and light mode (currently light mode)" aria-label="Switch between dark and light mode (currently light mode)" aria-live="polite" onClick={() => { onThemeToggleClick(`theme_toggle_btn`); }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" class="lightToggleIcon_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module">
                            <path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24" width="24" height="24" class="darkToggleIcon_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module">
                            <path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path>
                        </svg>
                    </button>
                </div>
                <button type="button" aria-label="Close navigation bar" class="clean-btn navbar-sidebar__close" id="navbar-sidebar__close" onClick={() => { onNavToggleClick(`navbar-sidebar__close`); }}>
                    <svg viewBox="0 0 15 15" width="21" height="21"><g stroke="var(--ifm-color-emphasis-600)" stroke-width="1.2">
                        <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path>
                    </g>
                    </svg>
                </button>
            </div>
            <div class="navbar-sidebar__items navbar-sidebar__items--show-secondary">
                <div class="navbar-sidebar__item menu">
                    <ul class="menu__list">
                        <li class="menu__list-item"><a aria-current="page" class="menu__link menu__link--active" href="/docs/introduction">Docs</a></li>
                        <li class="menu__list-item"><a class="menu__link" href="/blog">Blog</a></li>
                        <li class="menu__list-item">
                            <a href="https://github.com/cardanobi" target="_blank" rel="noopener noreferrer" class="menu__link">GitHub
                            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module">
                                <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-sidebar__item menu">
                    {/* <button type="button" class="clean-btn navbar-sidebar__back">← Back to main menu</button> */}
                    <ul class="theme-doc-sidebar-menu menu__list">
                        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
                            <a class="menu__link menu__link--active" aria-current="page" href="#features">Features</a>
                        </li>
                        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
                            <a class="menu__link" href="#team">Team</a>
                        </li>
                        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
                            <a class="menu__link" href="#contact">Contact</a>
                        </li>
                        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
                                <a class="menu__link" href="https://docs.cardanobi.io" target="_blank" rel="noopener noreferrer">Docs 
                                    &nbsp;<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                                </a>
                        </li>
                        <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
                            <a class="menu__link" href="https://docs.cardanobi.io/blog" target="_blank" rel="noopener noreferrer">Blog 
                                &nbsp;<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
