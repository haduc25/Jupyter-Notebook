// utils.js

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// handle when call the notify
export const handleNotify = (e, { haveImage = false, title, content, toastType = 'error', ...props }) => {
    // bcs dont have pages preview so i'll show them the message (toast message)

    // first remove preventDefault() of a card
    e.preventDefault();

    // handle for dark theme & light theme
    const isDarkTheme = getComputedStyle(document.body).getPropertyValue('--body-color') === '#202124';

    // handle for toast types

    let toastFuncs2;

    switch (toastType) {
        case 'info':
        case 'success':
        case 'warning':
        case 'error':
            toastFuncs2 = toast[toastType]('meow meow');
            break;

        default:
            toastFuncs2 = toast('nahnahnah');
    }

    // const toastFuncs = haveImage && props.srcImg ? toast[type] : toast;
    // const toastFuncs = toast['info']('meow');

    // const message = (
    //     <div>
    //         {title && <h3>{title}</h3>}
    //         {content && <p>{content}</p>}
    //         {haveImage && props.srcImg && <img src={props.srcImg} alt="" />}
    //     </div>
    // );

    // console.log(toastFuncs);

    // toastFuncs(message, {
    //     ...props,
    //     theme: isDarkTheme ? 'dark' : 'light',
    // });

    // toast.info(
    //     <div>
    //         {haveImage && <img src={props.srcImg} alt="Oops!!!" style={{ maxWidth: '100%', maxHeight: '250px' }} />}
    //         <h3>{title}</h3>
    //         <p>{content}</p>
    //     </div>,
    //     {
    //         // autoClose: 5000,
    //         // hideProgressBar: false,
    //         // closeOnClick: true,
    //         // pauseOnHover: true,
    //         // draggable: true,
    //         // progress: undefined,
    //         // theme: isDarkTheme ? 'dark' : 'light',
    //         ...props,
    //         theme: isDarkTheme ? 'dark' : 'light',
    //     },
    // );
};
