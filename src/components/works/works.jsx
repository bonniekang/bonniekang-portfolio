import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="wrapper">
                <div className="title">
                    <h1>PROJECTS</h1>
                    <div className="border"></div>
                </div>
                <div className="projects">
                    <div className="project">
                        <div className="project-info">
                            <h2>The guild</h2>
                            <p>New type of task-based social platform for large group of friends or family</p>
                            <div className="project-icon">
                                <a href="https://theguild-lw.herokuapp.com" className="icon" target="_blank">live</a>
                                <a href="https://github.com/tarumae/the-guild" className="icon" target="_blank">github</a>
                        </div>
                        </div>
                        <div className="img-container">
                            <img src="assets/guild-1.png" alt=""/>
                            <img src="assets/guild-2.png" alt=""/>
                            <img src="assets/guild-3.png" alt=""/>
                            <img src="assets/guild-4.png" alt=""/>
                            <img src="assets/guild-5.png" alt=""/>
                            <img src="assets/guild-6.png" alt=""/>
                            <img src="assets/guild-7.png" alt=""/>
                            <img src="assets/guild-8.png" alt=""/>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-info">
                            <h2>Groundbnb</h2>
                            <p>AirBnb clone website having an allotment rental system</p>
                            <div className="project-icon">
                                <a href="https://groundbnb-tarumae.herokuapp.com" className="icon" target="_blank">live</a>
                                <a href="https://github.com/tarumae/rails-groundbnb" className="icon" target="_blank">github</a>
                        </div>
                        </div>
                        <div className="img-container">
                            <img src="assets/groundbnb-1.png" alt=""/>
                            <img src="assets/groundbnb-2.png" alt=""/>
                            <img src="assets/groundbnb-3.png" alt=""/>
                            <img src="assets/groundbnb-4.png" alt=""/>
                            <img src="assets/groundbnb-5.png" alt=""/>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-info">
                            <h2>Watch List</h2>
                            <p>A CRUD web application for archiving movie selections</p>
                            <div className="project-icon">
                                <a href="https://movie-watch-list-app.herokuapp.com" className="icon" target="_blank">live</a>
                                <a href="https://github.com/bonniekang/movie-watch-list" className="icon" target="_blank">github</a>
                        </div>
                        </div>

                        <div className="img-container">
                            <img src="assets/movie-1.png" alt=""/>
                            <img src="assets/movie-2.png" alt=""/>
                            <img src="assets/movie-3.png" alt=""/>
                            <img src="assets/movie-4.png" alt=""/>
                            <img src="assets/movie-6.png" alt=""/>
                            <img src="assets/movie-7.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
