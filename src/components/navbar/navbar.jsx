import "./navbar.scss"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper1">
                <div className="left">
                    <a href="#intro">BONNIE KANG</a>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <a href="mailto:jihye59kang@gmail.com?subject=Hello!">Email</a> 
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/bonniek0827/" target="blank">LinkedIn</a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/bonniekang" target="blank">Github</a>
                    </div>
                </div>
            </div>
            <div className="wrapper2">
                <div className="left">
                    <div id="line"></div>
                    <div id="lineHead"></div>
                </div>
                <div className="right">
                    <a href="#skills">SKILLS</a>
                    <a href="#works">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
        </div>
    )
}
