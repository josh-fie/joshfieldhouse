import { Link, NavLink } from 'react-router-dom';
import LinkButtons from '../components/LinkButtons';

import ScreenshotGenerator from '../components/ScreenshotGenerator';


function ErrandApp(props) {
    return (
        <>
            <div>
                <h2>Errand App</h2>
                <div>
                    <LinkButtons data={props.data}/>
                </div>
                <div><p>{props.data.description}</p></div>
            </div>
            <ScreenshotGenerator images={props.data.images} setVisible={props.setVisible} setImgId={props.setImgId}/>

        </>
    )
}

export default ErrandApp;