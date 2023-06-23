import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import classes from './AboutMePage.module.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

import html from '../assets/html.png';
import css from '../assets/css-3.png';
import js from '../assets/js2.png';
import react from '../assets/react.png';
import git from '../assets/git.png';

import tennis from '../assets/tennis.png';
import piano from '../assets/piano.png';
import hook from '../assets/hook.png';

import photoPhones from '../assets/photo_phones.png';
import photoBulb from '../assets/photo_laptop_light.png';
import photoTennis from '../assets/photo_tennis.png';


function AboutMe(props) {

    // useEffect(() => {
    //     Aos.init();
    // }, []);

    // data-aos="fade-up" data-aos-once="true" data-aos-delay="100"

    return (
        <div className="container">
            <h1>About</h1>
            <div className={classes.section}>
                <h2>Background</h2>
                <div className={classes.Card}>
                    <p>"I have more than 5 years experience in customer services and administration in public and private sectors."</p>
                    <p>"With experience supervising and managing and working in teams and achieving departmental KPI's and targets."</p>
                    <p>"I have made a career change into web development and have constructed a set of projects showcased below following over 1 year of self-study and course completion. I am continuously learning new skills in both front and back end technologies."</p>
                </div>
                <img src={photoPhones} alt="Telephones and tablet"></img>
            </div>
            <div className={classes.section}>
                <h2>Skills</h2>
                <div className={classes.Card}>
                    <div className={classes.skills}>
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
                    <div className={classes.concepts}>
                        <h3>Concepts / Technologies</h3>
                        <ul>
                            <li>GitHub and version control</li>
                            <li>NPM package Manager</li>
                            <li>Embedding REST API's</li>
                            <li>Firebase</li>
                            <li>Parcel</li>
                        </ul>
                        <h3>Learning</h3>
                        <ul>
                            <li>SQL</li>
                            <li>PHP</li>
                            
                        </ul>
                    </div>
                </div>
                <img src={photoBulb} alt="Laptop and lightbulb"></img>
            </div>
            <div className={classes.section}>
                <h2>Interests / Hobbies</h2>
                <div className={[classes.interests, classes.Card].join(' ')}>
                    <Link to=''><button type='button'>Open CV</button></Link>
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
                <img src={photoTennis} alt="Tennis court and tennis ball"></img>
            </div>
        </div>
    )
}

export default AboutMe;