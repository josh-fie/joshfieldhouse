import { Link, NavLink } from 'react-router-dom';
import gitHubIcon from '../assets/github-sign.png';
import webIcon from '../assets/web.png';


function IceT(props) {
    return (
        <div>
            <h2>IceT App</h2>
            <div>
                <img src={webIcon} alt='View Deployed Project'></img>
                <span>View Deployed Project</span>
                <img src={gitHubIcon} alt='View Project on GitHub'></img>
                <span>View Project on GitHub</span>
            </div>
        </div>
    )
}

export default IceT;