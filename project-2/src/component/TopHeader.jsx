import React from 'react'
import isActive from '../hooks/isActive'


const TopHeader = ({ setCurrent, current }) => {



  return (
    <div style={{ display: "flex", gap: 2 }}>
      <div onClick={() => setCurrent("home")} style={isActive(current, "home")} >Home</div>
      <div onClick={() => setCurrent("about")} style={isActive(current, "about")}>About</div>
      <div onClick={() => setCurrent("contact")} style={isActive(current, "contact")}>Contact</div>
    </div>
  )
}

export default TopHeader