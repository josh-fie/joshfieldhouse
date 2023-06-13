import classes from './PopoutImage.module.css';

function PopOutImage (props) {
    console.log(props);
    return (
    <div className={classes.popoutDiv}>
        <button type="button">X</button>
        <img src={props.image}></img>
    </div>
    )
}

export default PopOutImage;