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
            {srcImg && <img src={srcImg} alt="Oops!!!" style={{ maxWidth: '100%', maxHeight: '250px' }} />}

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
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '6%',
                        paddingLeft: '5%',
                    }}
                >
                    <img
                        src={srcImg}
                        alt="Oops!!!"
                        style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '8px' }}
                    />
                </div>
            )} */}

            {/* handle qrcode */}
            {isQR && (
                <div>
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
                            src={randomBankingData2.image}
                            alt="Oops!!!"
                            style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '8px' }}
                        />
                    </div>
                    <div>
                        <h2 className={`data-item-${randomBankingData2.id}`}>
                            {randomBankingData2.bank} - {randomBankingData2.number}
                        </h2>
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

    // set the styles for the container of the toast messages
    const containerStyle = {
        zIndex: 9999,
        position: 'fixed',
        top: '80px',
        right: '20px',
        maxWidth: '400px',
        width: '100%',
    };

    return <ToastContainer style={containerStyle} />;
};
