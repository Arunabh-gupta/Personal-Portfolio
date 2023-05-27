import React from 'react'
import Projectitem from '../Components/Projectitem'


import { projectlist } from '../helpers/Projectlist' 

import "../assets/Projects.css"
function Projects() {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
          {projectlist.map((project,idx)=> {
            return <Projectitem name={project.name} image={project.image} id={idx}/>
          })}
      </div>
    </div>
  )
}

export default Projects