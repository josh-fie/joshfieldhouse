import { useRef } from 'react';

import gitHubIcon from '../assets/github-sign.png';
import linkedInIcon from '../assets/linkedin.png';
import tanzanite from '../assets/tanzanite.png';

import classes from './HomePage.module.css';

import MainNavigation from '../components/MainNavigation';
import AboutMe from './AboutMePage';
import Projects from './ProjectsPage';
import Contact from './ContactPage';

function HomePage(props) {

    const home = useRef();
    const about = useRef();
    const projects = useRef();
    const contact = useRef();

    const scrollToSection = (elementRef) => {
        console.log(elementRef.current);
        const element = elementRef.current;
        // window.scrollTo({
        //     top: elementRef.current.offsetTop,
        //     behavior: "smooth"
        // })
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div ref={home}>
            <MainNavigation scrollToSection={scrollToSection} home={home} about={about} projects={projects} contact={contact}/>
            <section className={classes.showcase}>
                <div className={classes.backgroundShapes}>
                    <div className={[classes.circle, classes.cfirst].join(' ')}>
                    <img src={tanzanite}></img>
                    </div>
                    <div className={[classes.circle,  classes.csecond].join(' ')}>
                    <img src={tanzanite} className={classes.animateReverse}></img>
                    </div>
                    <div className={[classes.circle, classes.cthird].join(' ')}>
                    <img src={tanzanite}></img>
                    </div>
                </div>
                <div className={classes.content}>
                    <div>
                        <h2>I am</h2>
                        <h1>Josh Fieldhouse</h1>
                        <h2>Front-End Web Developer</h2>
                    </div>
                    <div className={classes.btnContainer}>
                        <img src={gitHubIcon} alt='GitHub link' className={classes.btn}></img>
                        <img src={linkedInIcon} alt='LinkedIn link' className={classes.btn}></img>
                    </div>
                </div>
            </section>
            <section ref={about}>
                <AboutMe />
            </section>
            <section ref={projects}>
                <Projects />
            </section>
            <section ref={contact}>
                <Contact />
            </section>
        </div>
    )
}

export default HomePage;