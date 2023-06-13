import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrandApp from './ErrandAppPage';
import MHPC from './MHPCPage';
import IceT from './IceTPage';
import ProjectsNavigation from '../components/ProjectsNavigation';
import { errandAppData, MHPCData, iceTAppData } from '../projectdata/ProjectData';

import errandLogo from '../assets/errand_logo.png';
import windowLogo from '../assets/windows_logo.png';
import iceTLogo from '../assets/IceT_logo.png';

import classes from './ProjectsPage.module.css';


function Projects(props) {
    const [project, setProject] = useState(1);
    const [backgroundImage, setBackgroundImage] = useState(errandLogo);
    const [backgroundColour, setBackgroundColour] = useState(classes.project1Colour);

    const handleProjectState = function(num) {
        let background, bgColour;
        // if(num === 1) {background = '../assets/Screenshots/ErrandApp_screenshots/Screenshot_Homepage_Large.JPG'}
        if(num === 1) {
            background = errandLogo;
            bgColour = classes.project1Colour;
        };
        if(num === 2) {
            background = windowLogo;
            bgColour = classes.project2Colour;
        };
        if(num === 3) {
            background = iceTLogo;
            bgColour = classes.project3Colour;
        };

        setBackgroundImage(background);
        setBackgroundColour(bgColour);
        // Spinner - when above completed then setProject
        
        setProject(num);

    }

    return (
        <div className={classes.projectContainer}>
            <h3 className={classes.header}>Projects</h3>
            <div>
                <ProjectsNavigation setProject={handleProjectState} project={project}/>
            </div>
            {/* Tabbed Component Full Page with Nav absolutely positioned  inside background image of app */}
            {/* State changes determine conditionally generated/rendered page info below */}
            <div className={classes.infoContainer}>
            {project === 1 ? <ErrandApp data={errandAppData}/> : null }
            {project === 2 ? <MHPC data={MHPCData}/> : null }
            {project === 3 ? <IceT data={iceTAppData}/> : null }
            </div>
            <div className={[classes.backgroundActive, backgroundColour].join(" ")}>
            <img
                // class={classes.backgroundActive}
                src={backgroundImage}
                alt=""
            ></img>
            </div>
        </div>
    )
}

export default Projects;