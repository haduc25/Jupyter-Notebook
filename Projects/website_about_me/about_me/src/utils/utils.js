// utils.js
import { bankingData } from './Data';

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
                        src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/344803825_259905209786528_2805273012473307820_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NtBVZuCqrVQAX823QPx&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCoHz9NSX881wEGKPmBGpFQQEK01tYvoSLCguBlhEjM1Q&oe=645C260D"
                        alt="Oops!!!"
                        style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '8px' }}
                    />
                </div>
            )}

            <div>
                {bankingData.map((index) => (
                    <h2 key={index}>{index.id}</h2>
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                    marginLeft: '28px',
                    marginRight: '28px',
                }}
            >
                <button
                    style={{
                        // display: 'inline-flex',
                        // justifyContent: 'center',

                        // textAlign: 'center',
                        // backgroundColor: '#fff',
                        // color: '#ccc',
                        // padding: '12px',

                        borderRadius: '1rem',
                        // fontWeight: '500',
                        // width: '100%',

                        backgroundColor: '#4CAF50',
                        border: 'none',
                        color: 'white',
                        padding: '15px 32px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                        width: '80%',
                    }}
                    onClick={() => {
                        const randomBankingData = getRandomBankingData();
                        console.log(randomBankingData);
                    }}
                >
                    Rand
                </button>
            </div>
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
