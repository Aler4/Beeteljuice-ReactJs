import {FC, useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import './style.scss';
import store from "../../store/rewards";
import {ReviewCard} from "../reviewCard";


export const Performance: FC = () => {
    const [photos, setPhotos] = useState(store.data.performances);
    const [reviews, setReviews] = useState(store.data.critics);

    let settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        center: true,
    };

    let reviewSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        center: true,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // centerMode: true,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                }
            },
        ]
    };

    useEffect(() => {
        if (store.data.performances.length === 0){
            store.fetchData();
        }
    },[store]);

    useEffect(() => {
        setPhotos(store.getData().performances)
    },[store.data.performances]);


    useEffect(() => {
        setReviews(store.getData().critics)
    },[store.data.critics]);

    return (
        <div className='performance'>
            <div className="performance__desc-container calson-font">
                <h3 className="performance__desc-header">"Beetlejuice" - musical</h3>
                <p className="performance__desc-text">
                    Musical premiere at the National Theatre, in Washington DC in October 2018,
                    before its Broadway opening at the Winter Garden Theater on April 25, 2019. About an episode from the story of my life.</p>
            </div>

            <div className="performance__content">
                <Slider {...settings}>
                    {photos.map((el,i) => (
                        <div key={i} className="performance__card">
                            <img className='performance__image' src={el}  alt="performance photo" />
                        </div>
                    ))}
                </Slider>
                <div className="reviews__container">
                    <Slider {...reviewSettings}>
                        {reviews.map((el,i) => (
                            <ReviewCard key={i} avatar={el.avatar} name={el.name} review={el.review} />
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    )
}