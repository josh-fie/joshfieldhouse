import { NavLink } from 'react-router-dom';
import classes from './ProjectsNavigation.module.css';
import errandIcon from '../assets/errand_logo.png';
import microsoftIcon from '../assets/windows_logo.png';
import iceTIcon from '../assets/IceT_logo.png';


function ProjectsNavigation(props) {
    return (
        <nav className={classes.projectNav}>
            <div>
                {/* <NavLink to={'errandapp'} className={nav => (nav.isActive ? classes.linkActive : '')}><img src={errandIcon} /></NavLink> */}
                <img src={errandIcon} />
            </div>
            <div>
                {/* <NavLink to={'microsofthpclone'} className={nav => (nav.isActive ? classes.linkActive : '')}><img src={microsoftIcon} /></NavLink> */}
                <img src={microsoftIcon} />
            </div>
            <div>
                {/* <NavLink to={'icetapp'} className={nav => (nav.isActive ? classes.linkActive : '')}><img src={iceTIcon} /></NavLink> */}
                <img src={iceTIcon} />
            </div>
        </nav>
    )
}

export default ProjectsNavigation;