import { Link, NavLink } from 'react-router-dom';
import gitHubIcon from '../assets/github-sign.png';
import webIcon from '../assets/web.png';

import ScreenshotGenerator from '../components/ScreenshotGenerator';

function MHPC(props) {
    return (
        <>
            <div>
                <h2>Microsoft Homepage Clone App</h2>
                <div>
                    {console.log(props)}
                    <Link to={props.data.links.github}><img src={gitHubIcon} alt='View Project on GitHub'></img></Link>
                    <span>Code</span>
                    <Link to={props.data.links.live}><img src={webIcon} alt='View Deployed Project'></img></Link>
                    <span>Live</span>
                </div>
                <div><p>{props.data.description}</p></div>
            </div>
                <ScreenshotGenerator images={props.data.images}/>
        </>
    )
}

export default MHPC;