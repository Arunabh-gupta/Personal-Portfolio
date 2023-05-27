import React from 'react'
import { useNavigate } from 'react-router-dom';
function Projectitem({image, name, id}) {
    const Navigate = useNavigate();
  return (
    <div className='projectItem' onClick={()=>(Navigate("/projects/"+id))}>
        <div style={{backgroundimage: `url(${image})` }} className='bgImage' />
            <h1>{name}</h1>
    </div>
  )
}

export default Projectitem;