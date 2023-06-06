import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import homeIcon from '../assets/home.png';
import aboutIcon from '../assets/user.png';
import contactIcon from '../assets/mail.png';
import projectsIcon from '../assets/layers.png';

function MainNavigation(props) {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to={'/'} className={nav => (nav.isActive ? classes.linkActive : '')}><img src={homeIcon} /></NavLink>
            </div>
            <div>
                <NavLink to={'/aboutme'} className={nav => (nav.isActive ? classes.linkActive : '')}><img src={aboutIcon} /></NavLink>
            </div>
            <div>
            <NavLink to={'/projects'} className={nav => (nav.isActive ? classes.linkActive : '')}><img src={projectsIcon} /></NavLink>
            </div>
            <div>
            <NavLink to={'/contact'} className={nav => (nav.isActive ? classes.linkActive : '')}><img src={contactIcon} /></NavLink>
            </div>
        </nav>
    )
}

export default MainNavigation;