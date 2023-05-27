import React, { useEffect } from 'react'
import { Link , useLocation} from 'react-router-dom'

import "../assets/Navbar.css"
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
function Navbar() {
    const [expandNavbar, setExpandNavbar] = React.useState(false);
    const location = useLocation(); //location gives the information about where in the website we are currently in 

    useEffect(()=>{
        setExpandNavbar(false);
    },[location])
    // this useEffect is saying that whenever the location variable changes set expandNavbar state to false

    return (
        <div className='navbar' id={expandNavbar ? "open" : "closed"}>
            <div className="toggleButton">
                <button onClick={()=>{setExpandNavbar((prev) => !prev)}}>
                    <ArticleOutlinedIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar