// utils.js
import { bankingData } from './Data';
import './utils.css';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// handle send e-mail
import emailjs from '@emailjs/browser';

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
    e?.preventDefault();

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
    e?.preventDefault();

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
    return true;
};
// ################## END: VALIDATOR ################## //

// ################## START: HANDLE SEND MAIL ################## //
export const handleSendEmail = (e, { formValue, isAutoSending = false }) => {
    const _form = formValue.current;

    handleSaveFormToLocalStorage(_form);

    const templateId = isAutoSending ? 'template_q24uo6j' : 'template_3mjztpt';
    const resetForm = !isAutoSending;
    console.log('2');

    // emailjs
    //     .sendForm('service_gydpclk', templateId, formValue.current, '1rGYGFp3nkM6bwOk2')
    //     .then(
    //         (result) => {
    //             console.log(result.text);
    //             if (resetForm) {
    //                 // show success message
    //                 handleNotify(e, {
    //                     title: 'Thành công',
    //                     content: 'Đã gửi tin nhắn thành công!',
    //                     toastType: 'success',
    //                 });
    //             }
    //         },
    //         (error) => {
    //             console.log(error.text);
    //             if (resetForm) {
    //                 // show error message
    //                 handleNotify(e, {
    //                     title: 'Lỗi',
    //                     content: error.text,
    //                     toastType: 'error',
    //                 });
    //             }
    //         },
    //     )
    //     .finally(() => {
    //         if (resetForm) {
    //             // auto reset form
    //             e.target.reset();
    //         }
    //     });
};

// ################## END: HANDLE SEND MAIL ################## //

export const handleSaveFormToLocalStorage = (formValue) => {
    const formData = {};
    for (const field in formValue) {
        if (typeof formValue[field] === 'object' && formValue[field] !== null && formValue[field].name) {
            formData[formValue[field].name] = formValue[field].value;
        }
    }
    localStorage.setItem('formData', JSON.stringify(formData));
};

// #################################
export const handleSendEmail2 = () => {
    // // const _form = formValue.current;
    // // handleSaveFormToLocalStorage(_form);
    // const ipData = JSON.parse(localStorage.getItem('ipData'));
    // // Check if ipData exists and has valid values
    // const ip_0 = ipData && ipData.length > 0 ? ipData[0].ip : '';
    // const date_0 = ipData && ipData.length > 0 ? ipData[0].date : '';
    // console.log(ip_0, date_0);
    // const templateId = 'template_q24uo6j';
    // const resetForm = true;
    // emailjs
    //     // .sendForm('service_gydpclk', templateId, { ..._form, ip_0, date_0 }, '1rGYGFp3nkM6bwOk2')
    //     .sendForm('service_gydpclk', templateId, { ip_0, date_0 }, '1rGYGFp3nkM6bwOk2')
    //     .then(
    //         (result) => {
    //             console.log(result.text);
    //             if (resetForm) {
    //                 console.log('done');
    //                 // show success message
    //                 // handleNotify(e, {
    //                 //     title: 'Thành công',
    //                 //     content: 'Đã gửi tin nhắn thành công!',
    //                 //     toastType: 'success',
    //                 // });
    //             }
    //         },
    //         (error) => {
    //             console.log(error.text);
    //             if (resetForm) {
    //                 console.log('not done');
    //                 // show error message
    //                 // handleNotify(e, {
    //                 //     title: 'Lỗi',
    //                 //     content: error.text,
    //                 //     toastType: 'error',
    //                 // });
    //             }
    //         },
    //     )
    //     .finally(() => {});
    // ###############################
    const ipData = JSON.parse(localStorage.getItem('ipData'));
    const ip_0 = ipData && ipData.length > 0 ? ipData[0].ip : '';
    const date_0 = ipData && ipData.length > 0 ? ipData[0].date : '';
    const templateId = 'template_q24uo6j';
    const resetForm = true;
    const formElement = document.querySelector('.contact__form'); // Replace with the appropriate selector for your form element
    console.log(ip_0, date_0, formElement);
    emailjs
        .sendForm('service_gydpclk', templateId, formElement, '1rGYGFp3nkM6bwOk2')
        .then(
            (result) => {
                console.log(result.text);
                if (resetForm) {
                    console.log('done');
                }
            },
            (error) => {
                console.log(error.text);
                if (resetForm) {
                    console.log('not done');
                }
            },
        )
        .finally(() => {});
};
