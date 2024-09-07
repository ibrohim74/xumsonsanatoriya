import  {useState, useEffect} from 'react';
import './App.css';
import Navbar from "./component/navbar/navbar.jsx";
import videoXumson from './assets/xumson.mp4';
import {useTranslation} from "react-i18next";
import about_box_img_1 from './assets/h1.jpg';
import about_box_img_2 from './assets/h2.jpg';
import offer1 from './assets/room/8b-2x-2o-1i.jpg';
import offer2 from './assets/ovqat3.jpg';
import offer3 from './assets/xizmat2.jpg';
import offer4 from './assets/diag2.jpg';
import Room from "./component/room_component/room.jsx";
import {SwiperSlide, Swiper} from "swiper/react";
import {Pagination} from 'swiper/modules';
import {SlideDB} from "./component/slideDB/slideDB.jsx";
import Footer from "./component/footer/footer.jsx";
import {Button, Input, message, Modal} from "antd";
import logo from './assets/logo.png'
import axios from "axios";

function App() {
    const {t} = useTranslation();
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialState, setInitialState] = useState({
        username: "",
        tell: ""
    })
    const [messageApi, contextHolder] = message.useMessage();
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth > 800 ? 3 : 1);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
        };
        const formattedDate = date.toLocaleDateString("ru-RU", options);
        return formattedDate;
    };

    const checkForm = () => {
        setDisabled(true);

        const hasNumber = /\d/;

        if (!initialState.username || initialState.username.trim().length === 0) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_empty'),
            });
            setDisabled(false)
            return;
        }

        if (initialState.username.trim().length <= 3 || hasNumber.test(initialState.username)) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_error'),
            });
            setDisabled(false)
            return;
        }

        if (!initialState.tell || initialState.tell.trim().length < 17) {
            messageApi.open({
                type: 'error',
                content: t('errors.tell_error'),
            });
            setDisabled(false)
            return;
        }

        let msg = `<b>Новое сообщение ${formatDate(new Date())} </b> \n`;
        msg += `\n имя: ${initialState.username}\n`;
        msg += `\n телефон: ${initialState.tell}\n`;


        const TOKEN = "6074522329:AAGMVIVFbWijL_BlKeeiVjCvouoG9HVC5w8";
        const CHAT_ID = "-1001913731987";

        axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: msg
        }).then((res) => {
            if (res?.status === 200) {
                messageApi.open({
                    type: 'success',
                    content: t('errors.success'),
                });
                setIsModalOpen(false)
                setTimeout(() => {
                    setInitialState({username: "", tell: ""})
                    setDisabled(false)
                }, 5000);
            }

        }).catch(() => {
            messageApi.open({
                type: 'error',
                content: t('errors.server_error'),
            });
            setDisabled(false)
        });
    };

    return (
        <>

            <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
                {contextHolder}
                <div className="modal_header">
                    <img src={logo} alt={'xumson'}/>
                    <p>{t("modal.title")}</p>
                </div>
                <div className="modal_form">
                    <label>{t("modal.username")}</label>
                    <Input placeholder={t("modal.username")}
                    value={initialState.username}
                           onChange={e=>setInitialState({...initialState, username: e.target.value})}
                    />
                    <label>{t("modal.tell")}</label>
                    <Input type="text" placeholder="+998" name="input"
                           value={initialState?.tell}
                           onChange={e => {
                               const formattedValue = e.target.value.replace(/\D/g, '');
                               let formattedNumber = '+998';
                               if (formattedValue.length > 3) {
                                   formattedNumber += ' ' + formattedValue.substring(3, 5);
                               }
                               if (formattedValue.length > 5) {
                                   formattedNumber += ' ' + formattedValue.substring(5, 8);
                               }
                               if (formattedValue.length > 8) {
                                   formattedNumber += ' ' + formattedValue.substring(8, 10);
                               }
                               if (formattedValue.length > 10) {
                                   formattedNumber += ' ' + formattedValue.substring(10, 12);
                               }
                               setInitialState({...initialState, tell: formattedNumber});
                           }}
                    />
                    <Button type={"primary"} disabled={disabled} onClick={checkForm}>{t("modal.send")}</Button>
                </div>

            </Modal>
            <Navbar/>
            <header id={'home'}>
                <div className="opacity"></div>
                <video src={videoXumson} autoPlay muted loop width={'100%'}></video>
                <div className="header_content">
                    <div className="container">
                        <h1>{t("header.h1")}</h1>
                        <p>{t("header.p")}</p>
                        <button onClick={() => setIsModalOpen(true)}>{t("header.button")}</button>
                    </div>
                </div>
            </header>

            <section className={'about'} id={'about'}>
                <div className="container">
                    <p className="subtitle_text">{t("about.subtitle")}</p>
                    <h1 className="title_text">{t("about.title")}</h1>
                    <div className="about_box">
                        <div className="about_top">
                            <div className="about_text">
                                <p>{t("about.texts.t1")}</p>
                                <hr></hr>
                                <p>{t("about.texts.t2")}</p>
                                <hr></hr>
                                <p>{t("about.texts.t3")}</p>
                                <hr></hr>
                                <p>{t("about.texts.t4")}</p>
                            </div>
                            <div className="about_box_img">
                                <img src={about_box_img_1} alt=""/>
                            </div>
                        </div>
                        <div className="about_bottom">
                            <div className="about_box_img">
                                <img src={about_box_img_2} alt=""/>
                            </div>
                            <div className="about_text">
                                <p>{t("about.texts.t5")}</p>
                                <hr></hr>
                                <p>{t("about.texts.t6")}</p>
                                <hr></hr>
                                <p>{t("about.texts.t7")}</p>
                                <hr></hr>
                                <p>{t("about.texts.t8")}</p>
                                <hr></hr>
                                <p>{t("about.texts.t9")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"offer"} id="offer">
                <div className="container">
                    <p className="subtitle_text">{t("offer.subtitle")}</p>
                    <h1 className="title_text">{t("offer.title")}</h1>
                    <div className="s2-box">
                        <div className="s2-box-item">
                            <img src={offer1} alt="Qulay turar joy" style={{objectFit: "cover"}}/>
                            <div className="s2-item-text">
                                <h1>{t("offer.offer1.title")}</h1>
                                <p>{t("offer.offer1.text")}</p>
                            </div>
                        </div>
                        <div className="s2-box-item">
                            <img src={offer2} alt="Taomlar" style={{objectFit: "cover"}}/>
                            <div className="s2-item-text">
                                <h1>{t("offer.offer2.title")}</h1>
                                <p>{t("offer.offer2.text")}</p>
                            </div>
                        </div>
                        <div className="s2-box-item">
                            <img src={offer3} alt="Tibbiy xizmatlar" style={{objectFit: "cover"}}/>
                            <div className="s2-item-text">
                                <h1>{t("offer.offer3.title")}</h1>
                                <p>{t("offer.offer3.text")}</p>
                            </div>
                        </div>
                        <div className="s2-box-item">
                            <img src={offer4} alt="Zamonaviy diagnostika, fizioterapiya" style={{objectFit: "cover"}}/>
                            <div className="s2-item-text">
                                <h1 style={{fontSize: "18px"}}>{t("offer.offer4.title")}</h1>
                                <p>{t("offer.offer4.text")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Room setIsModalOpen={setIsModalOpen} />

            <section className={'galarey'}>
                <div className={'swiper_box'}>
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={30}
                        grabCursor={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {SlideDB?.map((item, index) => {
                            return <SwiperSlide key={index}><img src={item.img_url}
                                                                 alt={`xumson sanatoriyasi ${index}`}/></SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default App;
