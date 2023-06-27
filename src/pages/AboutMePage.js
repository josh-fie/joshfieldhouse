import { Link } from 'react-router-dom';
import classes from './AboutMePage.module.css';

import html from '../assets/html.png';
import css from '../assets/css-3.png';
import js from '../assets/js2.png';
import react from '../assets/react.png';
import git from '../assets/git.png';

import photoPhones from '../assets/photo_phones.png';
import photoBulb from '../assets/photo_laptop_light.png';
import photoCV from '../assets/photo_cv.png';
import cvPDF from '../assets/Josh_Fieldhouse_CV.pdf';


function AboutMe(props) {

    return (
        <div className="container">
            <h1>About</h1>
            <div className={classes.section}>
                <h2>Background</h2>
                <div className={classes.Card}>
                    <p>"I have made a career change into web development and have constructed a set of projects showcased below following over a year of self-study and course completion. I am continuously learning new skills in both front and back end technologies."</p>
                    <p>"I have more than 5 years experience in customer services and administration in public and private sectors."</p>
                    <p>"With experience supervising and managing and working in teams and achieving departmental KPI's and targets."</p>
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
                <h2>Most Recent Work Experience</h2>
                
                <div className={classes.Card}>
                    <div className={classes.work}>
                        <div>
                            <h3>Senior Administrator (Supervisor) - Traffic Process Unit</h3>
                            <h4>Lincolnshire Police</h4>
                            <h4>Lincoln, UK June 2021 - Feb 2023</h4>
                        </div>
                        <ul>
                            <li>Supervising staff and workflow of the Traffic Department helping to train staff and troubleshoot departmental issues.</li>
                            <li>Implementing new projects and process changes independently to the department using my own workflow.</li>
                            <li>Meeting personal and departmental KPI’s for management and working in a large team 30+ staff</li>
                            <li>Communicating written and oral information to the public as well as stakeholders.</li>
                        </ul>
                        <div>
                            <span>View CV:</span>
                            <Link to={cvPDF} target="_blank"><button type='button'>Open PDF</button></Link>
                        </div>
                    </div>
                </div>
                <img src={photoCV} alt="Tennis court and tennis ball"></img>
            </div>
        </div>
    )
}

export default AboutMe;