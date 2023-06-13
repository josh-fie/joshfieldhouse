import classes from './ScreenshotGenerator.module.css';
import PopOutImage from './PopoutImage';
import { useState } from 'react';

function ScreenshotGenerator(props) {

    const [expanded, setExpanded] = useState(false);

    const images = props.images;
    let clickedDiv;

    const handleImgClick = function(e) {
        clickedDiv = e.target.parentNode;

        if(!expanded) {
        // Add expanded class (fixed position)
            clickedDiv.classList.add('expanded');
            setExpanded(true);

        } else if(expanded && clickedDiv.classList.contains('expanded')) {
            clickedDiv.classList.remove('expanded');
            setExpanded(false);
        } else console.log('Already expanded an image')
    }

    return (
        <>
            {/* {popupVisible ? <PopOutImage image={clicked} /> : null} */}
            {images.map((obj, index) => {
                return <div className={classes.imgContainer} onClick={e => handleImgClick(e)}><img src={obj} key={index}></img></div>
            })}
        </>
    )
};

export default ScreenshotGenerator;