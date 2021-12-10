import React from 'react';
import Work from './Work'
import workData from '../utils/workData';

const Works = () => {
    const projects = workData.map((work) => {
        return (
            <Work name={work.name} github={work.github} techstack={work.techstack} description={work.description} img={work.img} live={work.live}/>
        )
    })

    return (
        <div>
            {projects}
        </div>
    )
}

export default Works