import React from 'react';
import './footer.css';
import { handleNotify } from '../../utils/utils';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Hà Minh Đức</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#project" className="footer__link">
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            className="footer__link"
                            onClick={(e) =>
                                handleNotify(e, {
                                    isQR: true,
                                    // srcImg: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/344803825_259905209786528_2805273012473307820_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NtBVZuCqrVQAX823QPx&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCoHz9NSX881wEGKPmBGpFQQEK01tYvoSLCguBlhEjM1Q&oe=645C260D',
                                    title: 'Mua cho tôi một ly trà đá 😁😁',
                                    content: 'Tính năng đang được phát triển. Vui lòng thử lại sau!',
                                    // autoClose: 10000,
                                    autoClose: 1000,
                                    // autoClose: false,
                                })
                            }
                        >
                            Donate
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/haduc.25.09/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com/haduc.25/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://twitter.com/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>

                    <a href="https://github.com/haduc25" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    Copyright &#169; {new Date().getFullYear()} haduc25. All rigths reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
