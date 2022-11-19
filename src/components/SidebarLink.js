import React from 'react'
import { NavLink } from 'react-router-dom';
import { sidebarLink } from '../data'; 


function SidebarLink() {

     (console.log(sidebarLink))
  return (
    <ul className='nav'> 
      {sidebarLink.map((item) => (
        <li key={item.id}>
          {<NavLink  to={item.path}>
            <i className={item.icon}></i>
            {item.title}
          </NavLink>}
        </li>
      ))}
    </ul>
  )
}
export default SidebarLink