import {FC, useCallback, useEffect, useState} from 'react';
import {Navigation} from "../navigation";
import {ReqButton} from "../requestButton";
import './style.scss'
import logo from '../../assets/images/logo-beetle.png';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
    let [showMenu, setShowMenu] = useState('');
    let [btn, setBtn] = useState('');

    let openMenu = (e) => {
        if(e.target.classList.contains('open')) {
            setShowMenu('')
            setBtn('')
        }
        else {
            setShowMenu('show');
            setBtn('open')
        };
    }

    let closeMenu = useCallback(() => {
        setBtn('');
        setShowMenu('')
    },[btn,showMenu]);

    return (
        <header className='header calson-font'>
            <div className="container">
                <div className="header__inner">
                    <div onClick={openMenu} className={`menu-btn ${btn}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <NavLink to='/'>
                        <img src={logo} alt="logo" width='80' height='80'/>
                    </NavLink>

                    <Navigation closeBtn={closeMenu} show={showMenu} />
                    <ReqButton/>
                </div>

            </div>

        </header>
    )
}
