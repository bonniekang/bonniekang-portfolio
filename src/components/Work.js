import React from 'react';
import "../scss/work.scss";

const Work = ({name, github, live, techstack, description, img}) => {
    return(
        <div className="projects-container">
            <div className="projects-box">
                <div className="img-box">
                    <img src={img} alt=""/>
                </div>
                <div className="text-box">
                    <h3>{name}</h3>
                    <div> : {description}</div>
                    <div>Techstack : {techstack}</div>
                    <div>
                        <a href={live} target="_blank">live</a>
                        <a href={github} target="_blank">github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work