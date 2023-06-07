import { Link, NavLink } from 'react-router-dom';
import ErrandApp from './ErrandAppPage';
import MHPC from './MHPCPage';
import IceT from './IceTPage';
import ProjectsNavigation from '../components/ProjectsNavigation';


function Projects(props) {
    return (
        <div>
            <h3>Projects</h3>
            <div>
                <ProjectsNavigation />
            </div>
            {/* Tabbed Component Full Page with Nav absolutely positioned  inside background image of app */}
            {/* State changes determine conditionally generated/rendered page info below */}
            <ErrandApp />
            <MHPC />
            <IceT />
        </div>
    )
}

export default Projects;