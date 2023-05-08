import React from 'react';
import './footer.css';
import { handleNotify } from '../../utils';

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
                                    title: 'Thông báo',
                                    content: 'Tính năng đang được phát triển. Vui lòng thử lại sau! ❤️',
                                    toastType: 'info',
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
