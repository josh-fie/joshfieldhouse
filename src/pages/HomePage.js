import { Link, NavLink } from 'react-router-dom';
import backgroundVideo from '../assets/background_video.mp4';
import backgroundVideoSnapshot from '../assets/background_video_snapshot.JPG';
import gitHubIcon from '../assets/github-sign.png';
import linkedInIcon from '../assets/linkedin.png';

function HomePage(props) {
    return (
        <div>
            <div><img src={backgroundVideoSnapshot} alt='Background Video Image'></img></div>
            <div>
                <p>Josh Fieldhouse</p>
                <p>Web Developer</p>
                <div>
                    <img src={gitHubIcon} alt='GitHub link'></img>
                    <img src={linkedInIcon} alt='LinkedIn link'></img>
                </div>
            </div>
        </div>
    )
}

export default HomePage;