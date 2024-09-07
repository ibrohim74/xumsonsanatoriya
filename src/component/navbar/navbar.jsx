import React, {useEffect, useState} from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import {ArrowRightOutlined, CloseOutlined, DownOutlined, MenuOutlined} from "@ant-design/icons";
import {Dropdown, Space} from "antd";
import {useLanguage} from "../../lang/LangContext.jsx";
import {languages} from "../../lang/langs.jsx";
import {useTranslation} from "react-i18next";

const Navbar = ({onlyIcon = true}) => {
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const [navClicker, setNavClicker] = useState(false);
    const { t } = useTranslation();
    // Toggle navigation menu in mobile view
    const handleChangeNav = () => {
        setNavClicker((current) => !current);
    };

    // Add sticky class to navbar on scroll
    useEffect(() => {
        const nav = document.querySelector("nav");
        const handleScroll = () => {
            if (document.documentElement.scrollTop > 20) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <button onClick={handleChangeNav} aria-label="Toggle Navigation Menu">
                {navClicker ? <CloseOutlined style={{color: "black"}}/> : <MenuOutlined style={{color: "white"}}/>}
            </button>
            <div className="nav-content">
                <div className="logo">
                    <a href="#home">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
                <div className="nav-menu1">
                    <ul className="nav-links">
                        <li>
                            <a href="#about">{t('nav.about_us')}</a>
                        </li>
                        <li>
                            <a href="#offer">{t('nav.offer')}</a>
                        </li>
                        <li>
                            <a href="#room">{t('nav.rooms')}</a>
                        </li>
                    </ul>
                    <ul className="nav-links">
                        <li className={"lang_drop"}>
                            <Dropdown
                                menu={{
                                    items: languages,
                                    onClick: handleLanguageChange,
                                }}
                                trigger={["click"]}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {selectedLanguage.icon} {selectedLanguage.label} <DownOutlined/>
                                    </Space>
                                </a>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`nav-menu ${navClicker ? "active" : ""}`}>
                <ul className="nav-links nav-list">
                    <li onClick={()=>setNavClicker(false)}>
                        <a href="#about">{t('nav.about_us')}</a>
                    </li>
                    <li onClick={()=>setNavClicker(false)}>
                        <a href="#offer">{t('nav.offer')}</a>
                    </li>
                    <li onClick={()=>setNavClicker(false)}>
                        <a href="#room">{t('nav.rooms')}</a>
                    </li>
                </ul>
                <ul className="nav-links">
                    <li className={"lang_drop"}>
                        <Dropdown
                            menu={{
                                items: languages,
                                onClick: handleLanguageChange,
                            }}
                            trigger={["click"]}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {selectedLanguage.icon} {selectedLanguage.label} <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
