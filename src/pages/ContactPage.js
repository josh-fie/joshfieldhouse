import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

import classes from './ContactPage.module.css';


function Contact(props) {

    // useEffect(() => {
    //     Aos.init();
    // }, []);

    // data-aos="fade-up" data-aos-once="true" data-aos-delay="100"

    return (
        <div className="container">
            <h1 className={classes.header}>Contact Me</h1>
            <div className={classes.infoContainer}>
                <div>
                    <div>
                        <img src={emailIcon}></img>
                        <p>My CV</p>
                        <button type='button'>Open PDF</button>
                    </div>
                    <div>
                        <img src={linkedinIcon}></img>
                        <p>LinkedIn Profile</p>
                        <Link to="https://www.linkedin.com/hp"><button type='button'>Go to</button></Link>
                    </div>
                    <div>
                        <img src={emailIcon}></img>
                        <p>Email: josh.fieldhouse@yahoo.com</p>
                    </div>
                </div>
            </div>
            <div className="polygonContact"></div>
        </div>
    )
}

export default Contact;