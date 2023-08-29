import {FC} from  'react'
import './style.scss';

type Tprops = {
    photo: string,
    title: string,
    description: string,
}

export const NewsCard: FC<Tprops> = ({photo, title, description}) => {
    return (
        <div className='news-card'>
            <div className="news-card__photo">
                <img src={photo} alt={title}/>
            </div>
            <div className="news-card__information">
                <h3 className='news-card__title calson-font'>{title}</h3>
                <p className="news-card__description calsonItalic-font">{description}</p>
            </div>
        </div>
    )
}