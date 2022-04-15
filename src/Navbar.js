import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './navbar.scss'

const content = {
    english: {
        lang: "English",
        flag: '🇬🇧'
    },
    korean: {
        lang: "Korean",
        flag: '🇰🇷'
    }
}

const Navbar = withRouter(({location: { pathname }}) => {

    const { search, flag } = content[0];
    return(
        <header>
            <button>
                <span>{flag}</span>
            </button>
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
