import {FC, useEffect, useState} from 'react';
import './style.scss';
import store from '../../store/rewards';
import {NewsCard} from '../newsCard'
export const NewsList: FC = () => {
    let [news, setNews] = useState(store.data.news);


    return (
        <section className='news-wrapper'>
            <div className="container">
                <div className="news-header">
                    <h2 className="section__title">NEWS</h2>
                    <p className='section__desc'>some news from our lives</p>
                </div>


                <div className="news-list">
                    {  news.length === 0 ? <p>Sorry but without any news now</p> :
                      news.map((el,i) => (<NewsCard key={i} photo={el.photo} title={el.title} description={el.description} />))
                    }
                </div>
            </div>
        </section>
    )
}