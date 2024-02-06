import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import React, { useEffect } from 'react';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import adidas from '../assets/images/adidas-logo.png'
import chamnpions from '../assets/images/champions-logo.png'
import fila from '../assets/images/fila-logo.png'
import nike from '../assets/images/nike-logo.png'
import puma from '../assets/images/puma-logo.png'
import reebok from '../assets/images/reebok-logo.png'

const SwiperMainArticle: React.FC = () => {
    useEffect(() => {
		const swiper = new Swiper('.swiper', {
			modules: [Autoplay, Navigation, Pagination],
			direction: 'horizontal',
			loop: true,
			allowTouchMove: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
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
                750: {
					slidesPerView: 7,
					spaceBetween: 30,
				},
				1000: {
					slidesPerView: 8,
					spaceBetween: 60,
				},
                1500: {
					slidesPerView: 7,
					spaceBetween: 70,
				},
                1700: {
					slidesPerView: 9,
					spaceBetween: 60,
				}
			},
		});
		return () => {
			swiper.destroy();
		};
	}, []);

    return (
		<div className="px-8 my-8 sm:my-12 swiper" data-aos="fade-right">
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<img src={adidas} alt="adidas" />
				</div>
				<div className="swiper-slide">
					<img src={chamnpions} alt="champions" />
				</div>
				<div className="swiper-slide">
					<img src={fila} alt="fila" />
				</div>
				<div className="swiper-slide">
					<img src={nike} alt="nike" />
				</div>
				<div className="swiper-slide">
					<img src={puma} alt="puma" />
				</div>
				<div className="swiper-slide">
					<img src={reebok} alt="reebook" />
				</div>
                <div className="swiper-slide">
					<img src={adidas} alt="adidas" />
				</div>
				<div className="swiper-slide">
					<img src={chamnpions} alt="champions" />
				</div>
				<div className="swiper-slide">
					<img src={fila} alt="fila" />
				</div>
				<div className="swiper-slide">
					<img src={nike} alt="nike" />
				</div>
				<div className="swiper-slide">
					<img src={puma} alt="puma" />
				</div>
				<div className="swiper-slide">
					<img src={reebok} alt="reebook" />
				</div>
			</div>
		</div>
	)
}

export default SwiperMainArticle