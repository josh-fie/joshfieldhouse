import { Link, NavLink } from 'react-router-dom';
import backgroundVideo from '../assets/background_video.mp4';
import gitHubIcon from '../assets/github-sign.png';
import linkedInIcon from '../assets/linkedin.png';
import classes from './HomePage.module.css';

function HomePage(props) {
    return (
        <section className={classes.showcase}>
			<div className={classes.videoContainer}>
				<video src={backgroundVideo} autoPlay muted loop></video>
			</div>
			<div className={classes.content}>
                <div>
                    <h1>Josh Fieldhouse</h1>
                    <h2>Web Developer</h2>
                </div>
                <div>
                    <img src={gitHubIcon} alt='GitHub link'></img>
                    <img src={linkedInIcon} alt='LinkedIn link'></img>
                </div>
            </div>
		</section>
    )
}

export default HomePage;