import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { School } from '@mui/icons-material'
import { Work } from '@mui/icons-material'
import "../assets/Experience.css"
function Experience() {
  return (
    <div className='experience'>
       <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2010-2014'
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>My random school, dreamland</h3>
          <p>12th passout from here</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='May 2023 - July 2023'
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<Work/>}
        >
          <h3 className='vertical-timeline-element-title'>LTI Mindtree</h3>
          <p>SDE Intern</p>
        </VerticalTimelineElement>
       </VerticalTimeline>
    </div>
  )
}

export default Experience