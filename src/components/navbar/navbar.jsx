import "./navbar.scss"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">Bonnie Kang</a>
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
        </div>
    )
}
