import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ErrandApp from './ErrandAppPage';
import MHPC from './MHPCPage';
import IceT from './IceTPage';
import ProjectsNavigation from '../components/ProjectsNavigation';
import { errandAppData, MHPCData, iceTAppData } from '../projectdata/ProjectData';

import classes from './ProjectsPage.module.css';


function Projects(props) {
    const [project, setProject] = useState(1);

    const handleProjectState = function(num) {
        setProject(num);
    }


    return (
        <div className={classes.projectSection}>
            <h3>Projects</h3>
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
        </div>
    )
}

export default Projects;