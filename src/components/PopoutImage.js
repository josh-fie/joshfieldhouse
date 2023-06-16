import classes from './PopoutImage.module.css';

function PopOutImage (props) {
    console.log(props);

    const handleClickPopup = function(e) {
        console.log('Clicked on Popup')
        if(props.visible) {props.setVisible(false)} else return;
    }
    
    const dataArray = props.data.flat();
    const filteredImg = dataArray.filter(obj => obj.id === props.imageId);
    console.log(filteredImg[0].src);

    return (
    <div className={classes.popoutDiv} onClick={(e) => handleClickPopup(e)}>
        <p>click / touch the screen to close</p>
        <img src={filteredImg[0].src}></img>
    </div>
    )
}

export default PopOutImage;