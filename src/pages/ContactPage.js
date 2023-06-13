import { Link, NavLink } from 'react-router-dom';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

import classes from './ContactPage.module.css';


function Contact(props) {
    return (
        <div>
            <h3 className={classes.header}>Contact Me</h3>
            <div className={classes.infoContainer}>
                <div>
                    <img src={emailIcon}></img>
                    <p>My CV</p>
                    <button type='button' className={classes.button}>Open PDF</button>
                </div>
                <div>
                    <img src={linkedinIcon}></img>
                    <p>LinkedIn Profile</p>
                    <Link to="https://www.linkedin.com/hp"><button type='button' className={classes.button}>Go to</button></Link>
                </div>
                <div>
                    <img src={emailIcon}></img>
                    <p>Email: josh.fieldhouse@yahoo.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;