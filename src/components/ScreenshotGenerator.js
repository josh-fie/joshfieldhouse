import classes from './ScreenshotGenerator.module.css';

function ScreenshotGenerator(props) {

    const images = props.images;

    console.log(images);

    return (
        <>
            {images.map((obj, index) => {
                return <div className={classes.imgContainer}><img src={obj} key={index}></img></div>
            })}
        </>
    )
};

export default ScreenshotGenerator;