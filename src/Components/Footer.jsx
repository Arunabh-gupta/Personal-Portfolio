import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import "../assets/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedIn />
        </div>
        <p>&copy; 2023 arunabh-gupta.com</p>
    </div>
  )
}

export default Footer