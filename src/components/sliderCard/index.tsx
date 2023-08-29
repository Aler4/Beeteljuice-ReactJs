import {FC} from "react";
import './style.scss'

type TProps = {
    photo: string,
    title: string,
    desc: string,
}

export const SliderCard: FC<TProps> = ({photo,title,desc,}) => {
    return (
        <div className='card ' >
            <div className="card-photo">
                <img src={photo} alt="card_photo"/>
            </div>
            <div className="card_text">
                <div className="card-title calsonItalic-font">
                    {title}
                </div>
                <div className="card-desc calson-font">
                    {desc}
                </div>
            </div>

        </div>
    )
}
