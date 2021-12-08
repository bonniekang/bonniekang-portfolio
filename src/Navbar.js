import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import './navbar.scss'

export default withRouter(({location: { pathname }}) => (
    <header>
        <ul>
            <li>
                <Link to="/" className="nav">BONNIE KANG</Link>
            </li>
            <li>
                <Link to="/skills" className="nav">SKILLS</Link>
            </li>
            <li>
                <Link to="/works" className="nav">PROJECTS</Link>
            </li>
            <li>
                <Link to="/contact" className="nav">CONTACT</Link>
            </li>
        </ul>
    </header>
))

