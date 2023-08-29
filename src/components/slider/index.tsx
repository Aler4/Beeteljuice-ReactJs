import {FC, useEffect, useRef, useState} from 'react';
import './style.scss';
import {observer} from "mobx-react-lite";
import store from "../../store/rewards";
import {SliderCard} from "../sliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"



export const RewardsSlider: FC = observer(() => {
    const [cards, setCards] = useState(store.data.rewards);
    let settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        center: true,
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                }
            },
        ]
    };
    useEffect(() => {
        if (store.data.rewards.length === 0){
            store.fetchData();
        }
    },[store]);

    useEffect(() => {
        setCards(store.getData().rewards)
    },[store.data.rewards]);


    return (
        <section className="slider__wrapper">
            <div className="container">
                <h2 className='section__title'>My rewards</h2>
                <div className="slider">
                    <Slider {...settings}>
                        {cards.map((el,i) => (
                            // @ts-ignore
                            <SliderCard  key={i} photo={el.photo} title={el.title} desc={el.description} />
                        ))}
                    </Slider>
                </div>
            </div>

        </section>

    );
});
