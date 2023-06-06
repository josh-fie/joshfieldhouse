import ProjectsNavigation from '../components/ProjectsNavigation.js';
import { Outlet } from 'react-router-dom';

function ProjectsLayout(props) {
    return (
        <>
            <ProjectsNavigation />
            <main>
            <Outlet/>
            </main>
        </> )
}

export default ProjectsLayout;