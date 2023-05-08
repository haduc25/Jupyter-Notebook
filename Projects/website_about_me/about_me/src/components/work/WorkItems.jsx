import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleNotify } from '../../utils';

const WorkItems = ({ item }) => {
    const [hovered, setHovered] = useState(false);

    //  handle when clicked
    const whenClickedToDemo = (e) => {
        // bcs dont have pages preview so i'll show them the message (toast message)

        // first remove preventDefault() of a card
        e.preventDefault();

        const isDarkTheme = getComputedStyle(document.body).getPropertyValue('--body-color') === '#202124';

        toast.info(
            <div>
                <h3>Thông báo</h3>
                {/* <p>Tính năng đang được phát triển. Vui lòng thử lại sau! ❤️</p> */}
                <img
                    src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/344803825_259905209786528_2805273012473307820_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NtBVZuCqrVQAX823QPx&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCoHz9NSX881wEGKPmBGpFQQEK01tYvoSLCguBlhEjM1Q&oe=645C260D"
                    alt=""
                />
            </div>,
            {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: isDarkTheme ? 'dark' : 'light',
            },
        );
    };

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

            {/* <a href="#" className="work__button" onClick={(e) => whenClickedToDemo(e)}> */}
            <a
                href="#"
                className="work__button"
                onClick={(e) =>
                    handleNotify(e, {
                        haveImage: true,
                        srcImg: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/344803825_259905209786528_2805273012473307820_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NtBVZuCqrVQAX823QPx&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCoHz9NSX881wEGKPmBGpFQQEK01tYvoSLCguBlhEjM1Q&oe=645C260D',
                        title: 'Thông báo',
                        content: 'Tính năng đang được phát triển. Vui lòng thử lại sau! ❤️',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
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
