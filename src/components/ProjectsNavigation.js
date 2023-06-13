import { NavLink } from 'react-router-dom';
import classes from './ProjectsNavigation.module.css';
import errandIcon from '../assets/errand_logo.png';
import microsoftIcon from '../assets/windows_logo.png';
import iceTIcon from '../assets/IceT_logo.png';


function ProjectsNavigation(props) {

    // On Button Img Click
    const imgClickHandler = function(num) {
        props.setProject(num);
    }

    return (
        <nav className={classes.projectNav}>
            <div className={props.project === 1 ? classes.active : null}>
                <NavLink><img src={errandIcon} onClick={() => imgClickHandler(1)}/></NavLink>
            </div>
            <div className={props.project === 2 ? classes.active : null}>
                <NavLink><img src={microsoftIcon} onClick={() => imgClickHandler(2)}/></NavLink>
            </div>
            <div className={props.project === 3 ? classes.active : null}>
                <NavLink><img src={iceTIcon} onClick={() => imgClickHandler(3)}/></NavLink>
            </div>
        </nav>
    )
}

export default ProjectsNavigation;