import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Users from './Pages/Users';
import PageNotFound from './Pages/404 error';
import { useState } from 'react';
import Contact from './Pages/Contact';
import SidebarLink from './components/SidebarLink';

//  eslint-disable-next-line
import Pagination from './components/Pagination';


import {ErrorBoundary} from './components/ErrorBoundary';


function App() {

  //  eslint-disable-next-line
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div className="main__container">
        <div className="aside">
          {/* <div className="nav__toggler">
            <span></span>
          </div> */}

          

          {toggleSidebar &&  (
            <>
            <div className="logo">
            <Link exact to='/'><span>Jewel</span>Ivy</Link>
          </div>
          <SidebarLink />
          </>
          )
        }
        </div>

        <div className="main__content">
            <Routes>
              <Route exact  path='/' element={<Home />} />
              <Route exact  path='/about' element={<About />} />
              <Route exact  path='/services' element={<Services />} />
              <Route exact  path='/users' element={<ErrorBoundary><Users /> </ErrorBoundary>} />
              <Route exact  path='/contact' element={<Contact />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
