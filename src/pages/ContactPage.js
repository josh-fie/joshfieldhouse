import { Link, NavLink } from 'react-router-dom';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';


function ContactPage(props) {
    return (
        <div>
            <div>
                <img src={linkedinIcon}></img>
                <p>
                    LinkedIn
                </p>
                <img src={emailIcon}></img>
                <p>
                    Email Link
                </p>
            </div>
        </div>
    )
}

export default ContactPage;