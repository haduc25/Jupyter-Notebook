import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    //  ############# Handle Nav ############# //
    const [item, setItem] = useState({ name: 'all' }); // current value is all
    const [projects, setProjects] = useState([]); // empty array
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            console.log('projectsData: ', projectsData);
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => project.category.toLowerCase() === item.name);
            console.log('newProjects: ', newProjects);
            setProjects(newProjects);
        }
    }, [item]);

    // handle when clicked
    const handleClick = (e, index) => {
        // set Item
        console.log(e.target.textContent.toLowerCase(), index);
        setItem({ name: e.target.textContent });

        // set Active
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => (
                    <span
                        className={`${active === index ? 'active-work' : ''} work__item`}
                        key={index}
                        onClick={(e) => handleClick(e, index)}
                    >
                        {item.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => (
                    <WorkItems item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Works;
