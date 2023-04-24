import React from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => (
                    <span className="work__item" key={index}>
                        {item.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {projectsData.map((item) => (
                    <WorkItems item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Works;
