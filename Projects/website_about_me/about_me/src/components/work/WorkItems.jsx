import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleNotify } from '../../utils';

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

            <a
                href="#"
                className="work__button"
                onClick={(e) =>
                    handleNotify(e, {
                        title: 'Thông báo',
                        content: 'Tính năng đang được phát triển. Vui lòng thử lại sau! ❤️',
                        toastType: 'info',
                    })
                }
            >
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
            <ToastContainer />
        </div>
    );
};

export default WorkItems;
