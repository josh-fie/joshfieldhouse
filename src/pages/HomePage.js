import { useRef, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import gitHubIcon from '../assets/github-sign.png';
import linkedInIcon from '../assets/linkedin.png';
import tanzanite from '../assets/tanzanite.png';
import portrait_template from '../assets/test_portrait.png';
import portrait from '../assets/Screenshots/self-portrait_edited.png';

import classes from './HomePage.module.css';

import MainNavigation from '../components/MainNavigation';
import AboutMe from './AboutMePage';
import Projects from './ProjectsPage';
import Contact from './ContactPage';

function HomePage(props) {

    const [dropdown, setDropdown] = useState(false);

    const home = useRef();
    const about = useRef();
    const projects = useRef();
    const contact = useRef();

    useEffect(() => {
        AOS.init();
    }, []);

    const toggleNav = function (ref) {
        if(dropdown) {
            console.log(ref);
            ref.current.classList.toggle(`${classes.responsiveNav}`);
            setDropdown(false);
        }
        if(!dropdown) {
            console.log(ref);
            ref.current.classList.toggle(`${classes.responsiveNav}`);
            setDropdown(true);
        }
    }

    useEffect(() => {
        console.log(dropdown);
    }, [dropdown])

    const scrollToSection = (elementRef, navRef) => {
        console.log(elementRef.current);
        const element = elementRef.current;
        // window.scrollTo({
        //     top: elementRef.current.offsetTop,
        //     behavior: "smooth"
        // })
        element.scrollIntoView({ behavior: 'smooth' });

        // Toggle DropdownNav
        if(dropdown) {
            toggleNav(navRef)
        } else return;
    }

    return (
        <div ref={home}>
            <MainNavigation scrollToSection={scrollToSection} toggleNav={toggleNav} home={home} about={about} projects={projects} contact={contact}/>
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
                    <div className={[classes.headerContainer, classes.anim].join(' ')}>
                        <h2>I am</h2>
                        <h1>Josh Fieldhouse</h1>
                        <h2>Front-End Web Developer</h2>
                    </div>
                    <div className={[classes.btnContainer, classes.anim].join(' ')}>
                        <img src={gitHubIcon} alt='GitHub link' className={classes.btn}></img>
                        {/* <p>GitHub</p> */}
                        {/* <img src={linkedInIcon} alt='LinkedIn link' className={classes.btn}></img> */}
                    </div>
                </div>
                <div className="polygon">
                    <div className={[classes.portraitContainer, classes.anim].join(' ')}>
                    <img src={portrait} alt='Josh Fieldhouse portrait'></img>
                    </div>
                    {/* Polygon Background Shape */}
                </div>
            </section>
            <section ref={about} data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                <AboutMe />
            </section>
            <section ref={projects} data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                <Projects />
            </section>
            <section ref={contact} data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                <Contact />
            </section>
        </div>
    )
}

export default HomePage;