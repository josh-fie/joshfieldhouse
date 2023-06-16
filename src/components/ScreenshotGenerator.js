import classes from './ScreenshotGenerator.module.css';
import { useState, useEffect, CSSProperties } from 'react';
import BarLoader from "react-spinners/BarLoader"; 

import Loader from './Loader';

function ScreenshotGenerator(props) {
    const [isLoading, setLoading] = useState(true);

    const images = props.images;

    // This Array awaits onLoad completion for all images rendered then sets loading state to false
    let imgLoadArray = [];

    function imgLoadTest(index) {
        imgLoadArray.push(`img loaded: ${index}`);
        // Check array length and setLoading false
        console.log(`${index} done`);
        if(imgLoadArray.length === 6) {
            setLoading(false);
            console.log(`All 6 loaded`);
        };
    }


    const handleImgClick = function(e, id) {

        // SetVisible - from above set to true
        props.setVisible(true);

        // Set Clicked Image - setImgId from above
        props.setImgId(id);
    }

    // If Images loaded then divs containing images become visible.
    const invisibleClass = isLoading ? classes.notVisible : null;

    return (
    <>
        {isLoading ? <Loader classtitle={classes.loader}/> : null}
        {images.map((obj, index) => {
        return <div key={obj.id} className={[classes.imgContainer, invisibleClass].join(' ')} onClick={(e) => handleImgClick(e, obj.id)}><img src={obj.src} uniq={obj.id} onLoad={() => imgLoadTest(index)}></img></div>}
        )}
    </>
    )
};

export default ScreenshotGenerator;