import {FC} from 'react';
import logo from '../../assets/images/logo-beetle.png';
import {Navigation} from "../navigation";
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import './style.scss'
import web from '../../assets/images/web.png'
import {ReqButton} from "../requestButton";
import {NavLink} from "react-router-dom";

export const Footer:FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <ul className="footer__contacts-list">
                        <li className="footer__contacts-item">
                            <NavLink to='/'>
                                <img src={logo} alt="logo" className="logo"/>
                            </NavLink>
                        </li>
                        <li className="footer__contacts-item">
                            <div className="social__list">
                                <a href="#" className='social__link'>
                                    <FaFacebook/>
                                </a>
                                <a href="#" className='social__link'>
                                    <FaYoutube/>
                                </a>
                                <a href="#" className='social__link'>
                                    <FaInstagram/>
                                </a>
                            </div>
                        </li>
                        <li className="footer__contacts-item">
                            <span className="footer__title">
                                <b>{'Address: '}</b>
                            </span>
                            <span className="footer__text">Hell,
                                Mephistopheles street 666
                            </span>
                        </li>
                        <li className="footer__contacts-item">
                            <span className="footer__title">
                                <b>{'Phone: '}</b>
                            </span>
                            <span className="footer__text">
                                <a href="tel: +6 (66) 32 21 777">+6 (66) 32 21 777</a>
                            </span>
                        </li>
                    </ul>

                    <ul className="footer__services-list">
                        <li className="footer__services-header"><h3 className='list__topic'>Services</h3></li>
                        <li className="footer__services-item"><a className='footer__services-link' href="#">Exorcism</a></li>
                        <li className="footer__services-item"><a className='footer__services-link' href="#">Séance</a></li>
                        <li className="footer__services-item"><a className='footer__services-link' href="#">Scare methods</a></li>
                        <li className="footer__services-item"><a className='footer__services-link' href="#">Dances</a></li>
                    </ul>

                    <Navigation header={'Navigation'}/>

                    <ReqButton/>
                </div>
            </div>
            <div className="web">
                        <img  src={web} alt="web"/>
                    </div>
        </footer>
    )
}