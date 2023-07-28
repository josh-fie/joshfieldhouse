import { NavLink } from 'react-router-dom';
import classes from './ProjectsNavigation.module.css';
import errandIcon from '../assets/errand_logo2.png';
import microsoftIcon from '../assets/windows_logo2.png';
import iceTIcon from '../assets/IceT_logo2.png';
import fieldIcon from '../assets/fieldbank_logo2.png';
import persWebIcon from '../assets/pers_web_logo2.png';


function ProjectsNavigation(props) {

    // On Button Img Click
    const imgClickHandler = function(num) {
        props.setProject(num);
    }

    return (
        <nav className={classes.projectNav}>
            <div className={props.project === 4 ? classes.active : null} onClick={() => imgClickHandler(4)}>
                <img src={fieldIcon}/>
            </div>
            <div className={props.project === 5 ? classes.active : null} onClick={() => imgClickHandler(5)}>
                <img src={persWebIcon}/>
            </div>
            <div className={props.project === 1 ? classes.active : null} onClick={() => imgClickHandler(1)}>
                <img src={errandIcon}/>
            </div>
            <div className={props.project === 2 ? classes.active : null} onClick={() => imgClickHandler(2)}>
                <img src={microsoftIcon}/>
            </div>
            <div className={props.project === 3 ? classes.active : null} onClick={() => imgClickHandler(3)}>
                <img src={iceTIcon}/>
            </div>
        </nav>
    )
}

export default ProjectsNavigation;