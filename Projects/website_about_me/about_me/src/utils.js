// utils.js

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// handle when call the notify
export const handleNotify = (e, { haveImage = false, title, content, ...props }) => {
    // bcs dont have pages preview so i'll show them the message (toast message)

    // first remove preventDefault() of a card
    e.preventDefault();

    // handle for dark theme & light theme
    const isDarkTheme = getComputedStyle(document.body).getPropertyValue('--body-color') === '#202124';

    toast.info(
        <div>
            {/* <h3>Thông báo</h3> */}
            {/* <p>Tính năng đang được phát triển. Vui lòng thử lại sau! ❤️</p> */}
            {/* {haveImage && (
                <img
                    src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/344803825_259905209786528_2805273012473307820_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NtBVZuCqrVQAX823QPx&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCoHz9NSX881wEGKPmBGpFQQEK01tYvoSLCguBlhEjM1Q&oe=645C260D"
                    alt=""
                />
            )} */}
            {haveImage && <img src={props.srcImg} alt="" />}
            <h3>{title}</h3>
            <p>{content}</p>
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
