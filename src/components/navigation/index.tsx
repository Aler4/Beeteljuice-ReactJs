import {FC, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import './style.scss';
type TProps = {
    header?: string,
    show?: string,
    closeBtn?: () => void;
}
export const Navigation: FC<TProps> = ({header,show,closeBtn}) => {
    let [open, setOpen] = useState(show);

    useEffect(() => {
        if (show && show?.length > 0) {
            console.log(show)
           setOpen(show)
        }
        else {
            setOpen('')
        }
    },[show])

    let closeMenu = () => {
        setOpen('');
        if(closeBtn) {
            closeBtn();
        }
    }

    return (
        <>
            <ul className={`navigation ${open}`}>
                {header ? <li><h3 className='list__topic'>{header}</h3></li> : null}
                <li>
                    <NavLink onClick={closeMenu} style={({isActive,isPending}) => {
                    return isActive ? {color:'grey'} : {color: 'white'};
                }} className='nav_item'  to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeMenu} style={({isActive,isPending}) => {
                    return isActive ? {color:'grey'} : {color: 'white'};
                }} className='nav_item' to='/about'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeMenu} style={({isActive,isPending}) => {
                        return isActive ? {color:'grey'} : {color: 'white'};
                    }} className='nav_item' to='/projects'>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeMenu} style={({isActive,isPending}) => {
                        return isActive ? {color:'grey'} : {color: 'white'};
                    }} className='nav_item' to='/news'>
                        News
                    </NavLink>
                </li>
            </ul>
        </>
    )
}
