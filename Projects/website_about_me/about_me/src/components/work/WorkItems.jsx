import React, { useState } from 'react';

const WorkItems = ({ item }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="work__card" key={item.id}>
            <img
                src={hovered ? item.imgSlider : item.image}
                alt={item.title}
                className="work__img"
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
            />
            <h3 className="work__title">{item.title}</h3>

            <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
};

export default WorkItems;
