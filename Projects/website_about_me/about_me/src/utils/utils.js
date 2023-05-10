// utils.js
import { bankingData } from './Data';
import './utils.css';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// handle for banking
let previousIndex = null;

function getRandomBankingData() {
    let randomIndex = Math.floor(Math.random() * bankingData.length);

    // Generate a new random index if it is the same as the previous index
    while (randomIndex === previousIndex) {
        randomIndex = Math.floor(Math.random() * bankingData.length);
    }

    previousIndex = randomIndex;
    return bankingData[randomIndex];
}

// handle when call the notify
export const handleNotify = (e, { isQR = false, title, content, srcImg, toastType = 'none', ...props }) => {
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
            {srcImg && <img src={srcImg} alt="Oops!!!" className="utils_msg-img" />}

            {/* {console.log('toastType: ', toastType)} */}
        </div>
    );

    // call rand
    let randomBankingData2 = getRandomBankingData();

    // handle message of toast2
    const message2 = (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            {/* <form>
                <input type="text" />
            </form> */}
            {/* {srcImg && (
                <div
                    className="utils_msg-wrapper_img"
                >
                    <img
                        src={srcImg}
                        alt="Oops!!!"
                        className="utils_msg-img"
                    />
                </div>
            )} */}

            {/* handle qrcode */}
            {isQR && (
                <div>
                    <div className="utils_msg-wrapper_img">
                        <img src={randomBankingData2.image} alt="Oops!!!" className="utils_msg-img" />
                    </div>
                    <div className={`utils_msg-wrapper_text data-item-${randomBankingData2.id}`}>
                        <h3>{randomBankingData2.bank}</h3>
                        <h3>{randomBankingData2.number}</h3>
                    </div>
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
    switch (toastType) {
        case 'info':
        case 'success':
        case 'warning':
        case 'error':
            toast[toastType](message, options);
            break;

        default:
            toast(message2, options);
    }

    return <ToastContainer className="utils_container" />;
};

// Handle VALIDATOR FORM (Using for Contact)
// ################## START: VALIDATOR ################## //
export const validateForm = (e, { errorMsg = 'Please fill out all fields.' }) => {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const project = document.querySelector('textarea[name="project"]');

    if (!name.value || !email.value || !project.value) {
        console.error(errorMsg);
        // show msg
        handleNotify(e, {
            title: 'Lỗi',
            content: errorMsg,
            toastType: 'error',
        });
        return false;
    }

    // Add more validation rules for the other fields here

    console.log('Success!');
    // return true;
};
// ################## END: VALIDATOR ################## //
