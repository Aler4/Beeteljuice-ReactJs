import {FC, useState} from 'react';
import './style.scss'

export const ReqButton:FC = () => {
    const [btnIsAnimation, setBtnIsAnimation] = useState(false);
    return (
        <button
            onMouseEnter={() => setBtnIsAnimation(true)}
            onMouseOut={() => setBtnIsAnimation(false)}
            className={btnIsAnimation === true ? 'call-button btn-animation-active' : 'call-button' }
        >Request a call</button>
    )
};