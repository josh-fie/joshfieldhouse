import { Link, NavLink } from 'react-router-dom';
import classes from './AboutMePage.module.css';


function AboutMe(props) {
    return (
        <div className={classes.container}>
            <div>
                <h3>Background</h3>
                <div>
                    <p>I have more than 5 years experience in customer services and administration in public and private sectors and have undertaken supervisory roles managing and working in teams and achieving departmental targets. I have now pivoted into web development, a long term interest of mine, and constructed a set of projects showcased below. I am learning new skills in Node.js and SQL and seeking front-end positions.</p>
                </div>
            </div>
            <div>
                <h3>Skills</h3>
                <div className={classes.skills}>
                    <div className={classes.card}>
                        <img src='#' alt='HTML5'></img>
                        <span>HTML5</span>
                    </div>
                    <div>
                        <img src='#' alt='CSS3'></img>
                        <span>CSS3</span>
                    </div>
                    <div>
                        <img src='#' alt='Javascript'></img>
                        <span>Javascript</span>
                    </div>
                    <div>
                        <img src='#' alt='React'></img>
                        <span>React</span>
                    </div>
                    <div>
                        <img src='#' alt='Git'></img>
                        <span>Git</span>
                    </div>
                </div>
            </div>
            <div>
                <h3>Interests / Hobbies</h3>
                <div className={classes.interests}>
                    <div className={classes.card}>
                        <img src='#' alt='Tennis'></img>
                        <span>Tennis</span>
                    </div>
                    <div className={classes.card}>
                        <img src='#' alt='Keyboard'></img>
                        <span>Keyboard</span>
                    </div>
                    <div className={classes.card}>
                        <img src='#' alt='Construction & Transport'></img>
                        <span>Construction & Transport</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;