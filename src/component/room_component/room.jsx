import React, {useState} from 'react';
import './room.css';
import {RoomDB} from './roomDB.jsx';
import {useTranslation} from "react-i18next";

const Room = ({setIsModalOpen}) => {
    const {t} = useTranslation()
    const [visibleRooms, setVisibleRooms] = useState(4);
    const langStorage = window.localStorage.getItem('i18nextLng')

    const showMoreRooms = () => {
        setVisibleRooms(RoomDB[0].room.length);
    };

    return (
        <section className="room" id={'room'}>
            <div className="container">
                <p className="subtitle_text">{t('room.subTitle')}</p>
                <h1 className="title_text">{t('room.title')}</h1>
                <div className="room_box">
                    {RoomDB[0].room.slice(0, visibleRooms).map((room, index) => (
                        <div className="room_item" key={index}>
                            <div className="room_photo">
                                <img src={room.title_img} alt={`Bino ${room.bino}`} className="img-item"/>
                                <ul>
                                    {room.subtitle_img1 &&
                                        <li>
                                            <img src={room.subtitle_img1} alt={`Bino ${room.bino} rasm1`}/>
                                        </li>
                                    }
                                    {room.subtitle_img2 &&
                                        <li>
                                            <img src={room.subtitle_img2} alt={`Bino ${room.bino} rasm2`}/>
                                        </li>
                                    }
                                    {room.subtitle_img3 &&
                                        <li>
                                            <img src={room.subtitle_img3} alt={`Bino ${room.bino} rasm3`}/>
                                        </li>
                                    }
                                </ul>
                            </div>
                            <div className="room_content">
                                {room.bino === 'Asosiy' ? <h1>{t('room.asosiy')}</h1> : <h1>{room.bino}-{t("room.bino")}</h1>}

                                <p>
                                    {langStorage === 'uzk' || langStorage === 'uzk-UZK' ? "1 кунга 1 киши учун" :
                                        langStorage === 'uz' || langStorage === 'uz-UZ' ? "1 kunga 1 kishi uchun" :
                                            langStorage === 'ru' || langStorage === 'ru-RU' ? "На 1 человека в 1 день" : ""}

                                    <br/>
                                    <span>{room.price} </span> {t('room.price')}
                                </p>
                                <button className="btnModal" onClick={()=>setIsModalOpen(true)}>
                                    {t("boglanish")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {visibleRooms < RoomDB[0].room.length && (
                <div className="show-hidden-box">
                    <button onClick={showMoreRooms}>
                        {t("barcha_xonalar")}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Room;
