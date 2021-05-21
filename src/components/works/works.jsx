import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="wrapper">
                <div className="title">
                    <h1>PROJECTS</h1>
                </div>
                <div className="projects">
                    <div className="project">
                        <div className="project-info">
                            <h2>The guild</h2>
                            <p>New type of task-based social platform for large group of friends or family</p>
                        </div>
                        <div className="project-icon">
                            <div className="icon">github</div>
                            <div className="icon">view</div>
                        </div>
                        <img src="" alt=""/>
                    </div>

                    <div className="project">
                        <div className="project-info">
                            <h2>Groundbnb</h2>
                            <p>AirBnb clone website having an allotment rental system</p>
                        </div>
                        <div className="project-icon">
                            <div className="icon">github</div>
                            <div className="icon">view</div>
                        </div>
                        <img src="" alt=""/>
                    </div>

                    <div className="project">
                        <div className="project-info">
                            <h2>Watch List</h2>
                            <p>A CRUD web application for archiving movie selections</p>
                        </div>
                        <div className="project-icon">
                            <div className="icon">github</div>
                            <div className="icon">view</div>
                        </div>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
