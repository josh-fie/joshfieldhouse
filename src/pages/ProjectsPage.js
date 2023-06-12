import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrandApp from './ErrandAppPage';
import MHPC from './MHPCPage';
import IceT from './IceTPage';
import ProjectsNavigation from '../components/ProjectsNavigation';
import { errandAppData, MHPCData, iceTAppData } from '../projectdata/ProjectData';

import classes from './ProjectsPage.module.css';


function Projects(props) {
    const [project, setProject] = useState(1);
    const [backgroundImage, setBackgroundImage] = useState(errandAppData.images[5]);

    const handleProjectState = function(num) {
        let background;
        // if(num === 1) {background = '../assets/Screenshots/ErrandApp_screenshots/Screenshot_Homepage_Large.JPG'}
        if(num === 1) {background = errandAppData.images[4]};
        // if(num === 2) {background = '../assets/Screenshots/Microsoft_screenshots/Screenshot_Mid_Large.JPG'}
        if(num === 2) {background = MHPCData.images[4]};
        // if(num === 3) {background = '../assets/Screenshots/IceT_screenshots/Screenshot_Home_Fullscreen.JPG'}
        if(num === 3) {background = iceTAppData.images[4]};

        setBackgroundImage(background);
        // Spinner - when above completed then setProject
        
        setProject(num);

    }

    return (
        <div className={classes.projectContainer}>
            <h3 className={classes.header}>Projects</h3>
            <div>
                <ProjectsNavigation setProject={handleProjectState}/>
            </div>
            {/* Tabbed Component Full Page with Nav absolutely positioned  inside background image of app */}
            {/* State changes determine conditionally generated/rendered page info below */}
            <div className={classes.infoContainer}>
            {project === 1 ? <ErrandApp data={errandAppData}/> : null }
            {project === 2 ? <MHPC data={MHPCData}/> : null }
            {project === 3 ? <IceT data={iceTAppData}/> : null }
            </div>
            <img
                class={classes.backgroundActive}
                src={backgroundImage}
                alt=""
            ></img>
        </div>
    )
}

export default Projects;