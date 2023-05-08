// utils.js

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// handle when call the notify
export const handleNotify = (e, { haveImage = false, title, content, toastType = 'info2', ...props }) => {
    // bcs dont have pages preview so i'll show them the message (toast message)

    // first remove preventDefault() of a card
    e.preventDefault();

    // handle for dark theme & light theme
    // const isDarkTheme = getComputedStyle(document.body).getPropertyValue('--body-color') === '#202124';
    const isDarkTheme = document.body.getAttribute('data-theme') === 'dark';

    console.log('isDarkTheme: ', isDarkTheme);
    // return;

    // handle message of toast
    const message = (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            {haveImage && props.srcImg && (
                <img src={props.srcImg} alt="Oops!!!" style={{ maxWidth: '100%', maxHeight: '250px' }} />
            )}

            {/* {console.log('toastType: ', toastType)} */}
            <ToastContainer />
        </div>
    );

    // handle message of toast2
    const message2 = (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            {/* <form>
                <input type="text" />
            </form> */}
            {haveImage && props.srcImg && (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '6%',
                        paddingLeft: '5%',
                    }}
                >
                    <img
                        src={props.srcImg}
                        alt="Oops!!!"
                        style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '8px' }}
                    />
                </div>
            )}
        </div>
    );

    // handle options of toast
    const options = {
        // default
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: false,
        theme: isDarkTheme ? 'dark' : 'light',
        closeButton: false,

        // more options
        ...props,
    };

    // handle for toast types
    let toastFuncs;

    switch (toastType) {
        case 'info':
        case 'success':
        case 'warning':
        case 'error':
            toastFuncs = toast[toastType](message, options);
            break;

        default:
            toast(message2, options);
    }
};
