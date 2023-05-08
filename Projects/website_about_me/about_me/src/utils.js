// utils.js

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// handle when call the notify
export const handleNotify = (e, { haveImage = false, title, content, type = 'toast', ...props }) => {
    // bcs dont have pages preview so i'll show them the message (toast message)

    // first remove preventDefault() of a card
    e.preventDefault();

    // handle for dark theme & light theme
    const isDarkTheme = getComputedStyle(document.body).getPropertyValue('--body-color') === '#202124';

    const toastFuncs = haveImage && props.srcImg ? toast[type] : toast;

    toast.info(
        <div>
            {haveImage && <img src={props.srcImg} alt="Oops!!!" style={{ maxWidth: '100%', maxHeight: '250px' }} />}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>,
        {
            // autoClose: 5000,
            // hideProgressBar: false,
            // closeOnClick: true,
            // pauseOnHover: true,
            // draggable: true,
            // progress: undefined,
            // theme: isDarkTheme ? 'dark' : 'light',
            ...props,
            theme: isDarkTheme ? 'dark' : 'light',
        },
    );
};
