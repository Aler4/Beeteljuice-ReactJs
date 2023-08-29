import {FC, useEffect, useState} from 'react';
import store from "../../store/rewards";
import './style.scss';

export const Fans: FC = () => {
    let [fans, setFans] = useState(store.data.fans);

    useEffect(() => {
        if (store.data.fans.length === 0){
            store.fetchData();
        }
    },[store]);

    useEffect(() => {
        setFans(store.getData().fans)
    },[store.data.fans]);

    return (
        <div className="fans-container">
            <div className="fans-photos">
                { fans.map((el,i) => (<img className='fans-photo' key={i} src={el} alt="fan" />)) }
            </div>

            <div className="fans-desc calson-font">
                <h3 className="fans-desc__header">
                    Millions of fans around the world
                </h3>
                <p className="fans-desc__text">
                    Millions of people bow before my person and want to be at least remotely like me
                </p>
            </div>
        </div>
    )
};