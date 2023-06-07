import { Link, NavLink } from 'react-router-dom';
import gitHubIcon from '../assets/github-sign.png';
import webIcon from '../assets/web.png';


function MHPC(props) {
    return (
        <div>
            <h2>Microsoft Homepage Clone App</h2>
            <div>
                <img src={webIcon} alt='View Deployed Project'></img>
                <span>View Deployed Project</span>
                <img src={gitHubIcon} alt='View Project on GitHub'></img>
                <span>View Project on GitHub</span>
            </div>
        </div>
    )
}

export default MHPC;