import { useEffect } from 'react';

import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import adidas from '../assets/images/adidas-logo.png';
import chamnpions from '../assets/images/champions-logo.png';
import fila from '../assets/images/fila-logo.png';
import nike from '../assets/images/nike-logo.png';
import puma from '../assets/images/puma-logo.png';
import reebok from '../assets/images/reebok-logo.png';

const SwiperMainArticle: React.FC = () => {
    useEffect(() => {
        const swiper = new Swiper('.custom-swiper', {
            modules: [Autoplay],
            direction: 'horizontal',
            loop: true,
            allowTouchMove: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            breakpoints: {
                200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                450: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                550: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
				600: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                750: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
				1000: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                },
				1200: {
                    slidesPerView: 9,
                    spaceBetween: 30,
                },
                1500: {
                    slidesPerView: 10,
                    spaceBetween: 40,
                }
            },
        });
		return () => {
			swiper.destroy();
		};
    }, []);

    return (
        <div className="custom-swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <LazyLoadImage src={adidas} alt="adidas" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={chamnpions} alt="champions" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={fila} alt="fila" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={nike} alt="nike" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={puma} alt="puma" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={reebok} alt="reebook" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={adidas} alt="adidas" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={chamnpions} alt="champions" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={fila} alt="fila" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={nike} alt="nike" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={puma} alt="puma" />
                </div>
                <div className="swiper-slide">
                    <LazyLoadImage src={reebok} alt="reebook" />
                </div>
            </div>
        </div>
    );
}

export default SwiperMainArticle;