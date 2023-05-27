import React from 'react'
import { useParams } from 'react-router-dom'
import { projectlist } from '../helpers/Projectlist';
import { GitHub } from '@mui/icons-material';

import "../assets/ProjectDisplay.css"
function ProjectPage() {
    const { id } = useParams();
    
    const project = projectlist[id];
    
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <p>
                skill: {project.skill}
            </p>
            <GitHub/>
        </div>
    );
}

export default ProjectPage