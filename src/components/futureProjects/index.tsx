import {FC, useEffect, useState} from 'react';
import './style.scss';
import store, {TFutProject} from '../../store/rewards'


const FutureProject:FC<TFutProject> = ({title,description}) => {
    let [isShow, setIshow] = useState(false);
    const show = () => {
        setTimeout(() => {
            setIshow(!isShow)
        },1000)
    }

    return (
        <div className="future-project calson-font">
            <div className='future-project__head'>
                <h3 onClick={() => setIshow(!isShow)} className='future-project__title'>{title}</h3>
                <span title={isShow ? 'close' : 'open'} onClick={() => setIshow(!isShow)} className={ isShow ? 'future-project__btn open' : 'future-project__btn'}>
                    +
                </span>
            </div>
             <div className={isShow ? 'future-project__description show': 'future-project__description'}>
                 {description}
            </div>

        </div>
    )
}

export const FutureProjects: FC = () => {

    let [projects, setProjects] = useState(store.data.futureProjects);
    useEffect(() => {
        if (store.data.futureProjects.length === 0){
            store.fetchData();
        }
    },[store]);

    return (
        <section className='future-projects calson-font'>
            <div className="container">

                <h2 className='section__title'>Future projects</h2>
                <p className='future-projects__description'>A few projects that we want to realize in future</p>

                <div className="future-projects__list">
                    {projects.map((el,i) => (
                        <FutureProject key={i} title={el.title} description={el.description} />
                    ))}
                </div>

            </div>
        </section>
    )
}