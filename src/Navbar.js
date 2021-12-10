import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './navbar.scss'

const Navbar = withRouter(({location: { pathname }}) => {
    return(
        <header>
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="active" className="nav">👩🏻‍💻 BONNIE KANG</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active"  className="nav">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/works" activeClassName="active"  className="nav">PROJECTS</NavLink>
                </li>
                <li>
                    <NavLink to="/skills" activeClassName="active"  className="nav">SKILLS</NavLink>
                </li>
            </ul>
        </header>
    )
})

export default Navbar
