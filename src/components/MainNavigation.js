import { NavLink as Link } from 'react-router-dom';
import { useRef } from 'react';

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
                        <Link onClick={() => props.scrollToSection(props.home, navigation)} >Home</Link>
                    </div>
                    <div>
                        <Link onClick={() => props.scrollToSection(props.about, navigation)} >About</Link>
                    </div>
                    <div>
                        <Link onClick={() => props.scrollToSection(props.projects, navigation)} >Projects</Link>
                    </div>
                    <div>
                        <Link onClick={() => props.scrollToSection(props.contact, navigation)}>Contact</Link>
                    </div>
                    <button type='button' className={[classes.navBtn, classes.closeBtn].join(' ')} onClick={() => props.toggleNav(navigation)}><img src={closeIcon} /></button>
            </nav>
            <button type='button' className={classes.navBtn} onClick={() => props.toggleNav(navigation)}><img src={hamburger} /></button>
        </header>
    )
}

export default MainNavigation;