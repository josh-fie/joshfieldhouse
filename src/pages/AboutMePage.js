import { Link, NavLink } from 'react-router-dom';
import classes from './AboutMePage.module.css';

import html from '../assets/html.png';
import css from '../assets/css-3.png';
import js from '../assets/js2.png';
import react from '../assets/react.png';
import git from '../assets/git.png';

import tennis from '../assets/tennis.png';
import piano from '../assets/piano.png';
import hook from '../assets/hook.png';


function AboutMe(props) {
    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h3>Background</h3>
                <div className={classes.Card}>
                    <p>"I have more than 5 years experience in customer services and administration in public and private sectors and have undertaken supervisory roles managing and working in teams and achieving departmental targets. I have now pivoted into web development, a long term interest of mine, and constructed a set of projects showcased below. I am learning new skills in Node.js and SQL and seeking front-end positions."</p>
                </div>
            </div>
            <div className={classes.section}>
                <h3>Skills</h3>
                <div className={[classes.skills, classes.Card].join(' ')}>
                    <div className={classes.indIcons}>
                        <img src={html} alt='HTML5'></img>
                        <span>HTML5</span>
                    </div>
                    <div className={classes.indIcons}>
                        <img src={css} alt='CSS3'></img>
                        <span>CSS3</span>
                    </div>
                    <div className={classes.indIcons}>
                        <img src={js} alt='Javascript'></img>
                        <span>Javascript</span>
                    </div>
                    <div className={classes.indIcons}>
                        <img src={react} alt='React'></img>
                        <span>React</span>
                    </div>
                    <div className={classes.indIcons}>
                        <img src={git} alt='Git'></img>
                        <span>Git</span>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <h3>Interests / Hobbies</h3>
                <div className={[classes.interests, classes.Card].join(' ')}>
                    <div className={classes.indIcons}>
                        <img src={tennis} alt='Tennis'></img>
                        <span>Tennis</span>
                    </div>
                    <div className={classes.indIcons}>
                        <img src={piano} alt='Keyboard'></img>
                        <span>Keyboard</span>
                    </div>
                    <div className={classes.indIcons}>
                        <img src={hook} alt='Construction & Transport'></img>
                        <span>Construction</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;