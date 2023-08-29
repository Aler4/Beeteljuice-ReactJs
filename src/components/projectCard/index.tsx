import {FC, useState} from 'react';
import './style.scss';
import {TProject} from "../../store/rewards";




export const ProjectCard: FC<TProject> = ({photo,title,description,read}) => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div className='project-card' style={{backgroundImage: `url(${photo})`}}>

            <div className="project-card__description">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">
                    {description}
                </p>
                <a target='_blank' href={read} className="read-more"> Read more</a>
            </div>
        </div>
    )
}