import {FC} from 'react';
import './style.scss';

type TProps = {
    avatar: string,
    name: string,
    review: string,
};

export const ReviewCard:FC<TProps> = ({avatar,name,review}) => {
    return (
        <div className="review__card">
            <div className="review__card-avatar">
                <img src={avatar} alt="avatar"/>
            </div>
            <h3 className="review__card-name calson-font">{name}</h3>
            <p className="review__card-text calsonItalic-font">{review}</p>
        </div>
    )
};