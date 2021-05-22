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
                        <div>Email</div>
                    </div>
                    <div className="itemContainer">
                        <div>LinkedIn</div>
                    </div>
                    <div className="itemContainer">
                        <div>Github</div>
                    </div>
                </div>
            </div>
            <div className="wrapper2">
                <div className="left">
                    <div id="line"></div>
                    <div id="lineHead"></div>
                </div>
                <div className="right">
                    <a href="#about">ABOUT ME</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#works">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
        </div>
    )
}
