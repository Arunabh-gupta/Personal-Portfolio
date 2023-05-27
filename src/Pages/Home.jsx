import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import "../assets/Home.css"
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Arunabh</h2>
        <div className='prompt'>
          <p>A software developer in the making</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front End</h2>
            <span>React, HTML, CSS</span>
          </li>
          <li className='item'>
            <h2>Backend</h2>
            <span>Node.js, Express.js</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>C, C++, C#, Javascript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home