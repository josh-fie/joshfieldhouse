import { Link, NavLink } from 'react-router-dom';
import gitHubIcon from '../assets/github-sign.png';
import webIcon from '../assets/web.png';

import LinkButtons from '../components/LinkButtons';
import ScreenshotGenerator from '../components/ScreenshotGenerator';

function IceT(props) {
    return (
        <>
            <div>
                <h2>IceT App</h2>
                <div>
                    <LinkButtons data={props.data}/>
                </div>
                <div><p>{props.data.description}</p></div>
            </div>
            <ScreenshotGenerator images={props.data.images} setVisible={props.setVisible} setImgId={props.setImgId}/>
        </>
    )
}

export default IceT;