import React from 'react'
import { NavLink } from 'react-router-dom';
import { sidebarLink } from '../data';
import Users from '../Pages/Users';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Services from '../Pages/Services';


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