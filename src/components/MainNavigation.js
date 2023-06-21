import { NavLink as Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

import classes from './MainNavigation.module.css';

import hamburger from '../assets/hamburger.png';
import closeIcon from '../assets/close.png';


function MainNavigation(props) {

    const navigation = useRef();

    return (
        <header>
            <div className={classes.nameLogo}>
                <h3>JoshFieldhouse</h3>
            </div>
            <nav className={classes.nav} ref={navigation}>
                    <div>
                        {/* <NavLink to={'/'} className={nav => (nav.isActive ? classes.linkActive : '')}>Home</NavLink> */}
                        <Link onClick={() => props.scrollToSection(props.home, navigation)} >Home</Link>
                    </div>
                    <div>
                        {/* <NavLink to={'/aboutme'} className={nav => (nav.isActive ? classes.linkActive : '')}>About</NavLink> */}
                        <Link onClick={() => props.scrollToSection(props.about, navigation)} >About</Link>
                    </div>
                    <div>
                        {/* <NavLink to={'/projects'} className={nav => (nav.isActive ? classes.linkActive : '')}>Projects</NavLink> */}
                        <Link onClick={() => props.scrollToSection(props.projects, navigation)} >Projects</Link>
                    </div>
                    <div>
                        {/* <NavLink to={'/contact'} className={nav => (nav.isActive ? classes.linkActive : '')}>Contact</NavLink> */}
                        <Link onClick={() => props.scrollToSection(props.contact, navigation)}>Contact</Link>
                    </div>
                    <button type='button' className={[classes.navBtn, classes.closeBtn].join(' ')} onClick={() => props.toggleNav(navigation)}><img src={closeIcon} /></button>
            </nav>
            <button type='button' className={classes.navBtn} onClick={() => props.toggleNav(navigation)}><img src={hamburger} /></button>
        </header>
    )
}

export default MainNavigation;