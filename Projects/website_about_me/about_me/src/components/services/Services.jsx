import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Product <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title"> Product Designer</h3>
                            <p className="services__modal-description">
                                Tôi có nhiều năm kinh nghiệm trong việc thiết kế và hoàn thiện các dự án.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Định vị thương hiệu công ty.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Phát triển trang web.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Phát triển giao diện người dùng.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Quản lý các dự án.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Thiết kế và tạo mẫu sản phẩm cho công ty.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            UI/UX <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title"> UI/UX Designer</h3>
                            <p className="services__modal-description">
                                Tôi có nhiều năm kinh nghiệm trong việc thiết kế và hoàn thiện các dự án.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Hệ thống thiết kế đảm bảo tính nhất quán.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Luôn cập nhật các xu hướng thiết kế và công nghệ
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Liên tục cải tiến dựa trên phản hồi của người dùng.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Thiết kế giao diện thân thiện với người dùng.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Tối ưu hóa thiết kế & khả năng sử dụng.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            App <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">App Designer</h3>
                            <p className="services__modal-description">
                                Tôi có nhiều năm kinh nghiệm trong việc thiết kế và hoàn thiện các dự án.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Phát triển và quản lý sản phẩm.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        Thiết kế khả thi và được tối ưu hóa cho hiệu suất.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Tạo các yếu tố thiết kế trực quan.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Tạo thiết kế cho nhiều nền tảng.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">Tạo các phần trợ giúp và hướng dẫn ứng dụng</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
