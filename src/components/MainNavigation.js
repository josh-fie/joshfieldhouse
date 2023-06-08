import { NavLink as Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import classes from './MainNavigation.module.css';

// import homeIcon from '../assets/home.png';
// import aboutIcon from '../assets/user.png';
// import contactIcon from '../assets/mail.png';
// import projectsIcon from '../assets/layers.png';

function MainNavigation(props) {
    console.log(props);
    return (
        <nav className={classes.nav}>
            <div className={classes.nameLogo}>
                <h3>JoshFieldhouse</h3>
            </div>
            <div>
                <div>
                    {/* <NavLink to={'/'} className={nav => (nav.isActive ? classes.linkActive : '')}>Home</NavLink> */}
                    <Link onClick={() => props.scrollToSection(props.home)} >Home</Link>
                </div>
                <div>
                    {/* <NavLink to={'/aboutme'} className={nav => (nav.isActive ? classes.linkActive : '')}>About</NavLink> */}
                    <Link onClick={() => props.scrollToSection(props.about)} >About</Link>
                </div>
                <div>
                    {/* <NavLink to={'/projects'} className={nav => (nav.isActive ? classes.linkActive : '')}>Projects</NavLink> */}
                    <Link onClick={() => props.scrollToSection(props.projects)} >Projects</Link>
                </div>
                <div>
                    {/* <NavLink to={'/contact'} className={nav => (nav.isActive ? classes.linkActive : '')}>Contact</NavLink> */}
                    <Link onClick={() => props.scrollToSection(props.contact)}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default MainNavigation;