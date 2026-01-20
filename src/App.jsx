import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Meta/Home'
import About from './Meta/About'
import Frontend from './Meta/Frontend'
import Backend from './Meta/Backend'
import Cyber from './Meta/Cyber'
import Smm from './Meta/Smm'
import Login from './Meta/Login'
import Androit from './Meta/Androit'
import Graphic from './Meta/Graphic'
import Max from './Meta/Max'
import Robotics from './Meta/Robotics'

const App = () => {
  return (
    <div>
        <div className="navbar bg-base-100  fixed z-1">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-accent">
                <li><Link to="/about">About Us</Link></li>
                <li>
                  <a>Courses</a>
                  <ul className="p-2">
                    <li><Link to="/frontend">Frontend</Link></li>
                    <li><Link to="/backend">Backend</Link></li>
                    <li><Link to="/cyber-security">Cyber Security</Link></li>
                    <li><Link to="/smm">SMM</Link></li>
                  </ul>
                </li>
                <li><Link to="/login">For Communication</Link></li>
              </ul>
            </div>
            <Link to="/" className="btn btn-dash text-accent hover:bg-gray-500 hover:text-white">Meta IT School</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2 flex-nowrap text-accent">
              <li className="whitespace-nowrap"><Link to="/about">About Us</Link></li>
              <li className="whitespace-nowrap">
                <details>
                  <summary>Courses</summary>
                  <ul className="check p-2 bg-base-100 w-40 z-1">
                    <li><Link to="/frontend">Frontend</Link></li>
                    <li><Link to="/backend">Backend</Link></li>
                    <li><Link to="/cyber-security">Cyber Security</Link></li>
                    <li><Link to="/smm">SMM</Link></li>
                  </ul>
                </details>
              </li>
              <li className="whitespace-nowrap"><Link to="/login">For Communication</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/login" className="btn hover:bg-gray-500 hover:text-white btn-dash text-accent">Login</Link>
          </div>
        </div>


      {/* https://www.youtube.com/watch?v=a3N4Dpy9SpA */}




        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/cyber-security" element={<Cyber />} />
          <Route path="/smm" element={<Smm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/androit" element={<Androit />} />
          <Route path="/grophic" element={<Graphic />} />
          <Route path="/max" element={<Max />} />
          <Route path="/robotics" element={<Robotics />} />

        </Routes>

      </div>
  )
}

export default App