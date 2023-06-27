import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import tanzanite from '../assets/tanzanite.png';
import portrait from '../assets/Screenshots/self-portrait_edited.png';

import classes from './HomePage.module.css';

import MainNavigation from '../components/MainNavigation';
import AboutMe from './AboutMePage';
import Projects from './ProjectsPage';
import Contact from './ContactPage';

function HomePage(props) {

    const [dropdown, setDropdown] = useState(false);

    // const [tablet, setTablet] = useState(false);

    const home = useRef();
    const about = useRef();
    const projects = useRef();
    const contact = useRef();

    useEffect(() => {

        const sectionArray = [about.current, projects.current, contact.current];

        // Fade in Sections on Scroll Down Page

        const revealSection = function (entries, observer) {
            console.log(entries, observer);
            const [entry] = entries;

            // Guard Clause
            if (!entry.isIntersecting) return; 

            // conditional so if class is present remove it otherwise just unobserve
            if(entry.target.classList.contains('section--hidden')){
                entry.target.classList.remove('section--hidden');
            }

            observer.unobserve(entry.target); //unobserves after hidden class removed first time so won't happen again.
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0,
        });

        sectionArray.forEach(function (section) {
            console.log(section);
            sectionObserver.observe(section);
            section.classList.add('section--hidden');
        });

        console.log(sectionObserver);
    //     AOS.init();
    }, []);

    // Toggle Hamburger Menu

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
        console.log(`Dropdown: ${dropdown}`);
    }, [dropdown])

    // Scroll to Section on Home Link Click

    const scrollToSection = (elementRef, navRef) => {

        const sectionArray = [about.current, projects.current, contact.current];

        // Where link is clicked remove hidden class if present and observer will be manually removed in background once sectino is intersected.
        // if(elementRef.current.classList.contains('section--hidden')) {
        //     console.log('Section hidden. Class to be removed now')
        //     elementRef.current.classList.remove('section--hidden');
        // }

        console.log(sectionArray, elementRef.current);
        const element = elementRef.current;
        let headerOffset;

        if(elementRef.current.classList.contains('section--hidden')) {
            headerOffset = 144;
            console.log('Section hidden. Offset increased');
        } else {
            headerOffset = 80;
        }

        const elementPosition = element.getBoundingClientRect().top;

        console.log(element, elementPosition, headerOffset);
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

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
                        {/* <img src={gitHubIcon} alt='GitHub link' className={classes.btn}></img> */}
                        <Link to='https://github.com/josh-fie/' target="_blank" rel="noopener noreferrer"><button type='button'>GitHub
            </button></Link>
                        
                    </div>
                </div>
                <div className="polygon">
                    <div className={[classes.portraitContainer, classes.anim].join(' ')}>
                    <img src={portrait} alt='Josh Fieldhouse portrait'></img>
                    </div>
                    {/* Polygon Background Shape */}
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