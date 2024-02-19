import { useEffect } from "react";

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';

import Card from "./Card";

type SwiperCardsProps = {
    carouselImages: {
        id: string,
        images: string,
        title: string,
        price: number
    }[]
}

const SwiperCards: React.FC<SwiperCardsProps> = (props) => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-new-arrivals', {
            modules: [Navigation, Pagination],
            direction: 'horizontal',
            loop: true,
            allowTouchMove: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
            breakpoints: {
                200: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                450: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1500: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                },
            },
        });
        return () => {
			swiper.destroy();
		};
    }, []);

    return (
        <section className='swiper-new-arrivals overflow-hidden'>
            <section className='flex swiper-wrapper'>
            {
                props.carouselImages.slice(0,20).map((el) => (
                    <div className='swiper-slide' key={el.id}>
                        <Card image={el.images[0]} name={el.title} price={el.price} />
                    </div>
                ))
            }
            </section>
        </section>
    )
}

export default SwiperCards