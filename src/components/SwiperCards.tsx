import { useEffect } from "react";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Card from "./Card";

type SwiperCardsProps = {
    carouselImages: {
        id: number;
        title: string;
        rate: number;
        price: {
            currentPrice: number;
            oldPrice?: number;
            discount?: number;
        };
        images?: string[];
    }[];
}

const SwiperCards: React.FC<SwiperCardsProps> = (props) => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-clothe-cards', {
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
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1500: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                },
            },
        });
    }, []);

    return (
        <section className='swiper-clothe-cards overflow-hidden'>
            <section className='flex swiper-wrapper'>
                {props.carouselImages.map((el) => (
                    <div className='swiper-slide' key={el.id}>
                        {el.images && el.images.length > 0 && (
                            <Card id={el.id} image={el.images[0]} name={el.title} rate={el.rate} currentPrice={el.price.currentPrice} oldPrice={el.price.oldPrice} discount={el.price. discount} />
                        )}
                    </div>
                ))}
            </section>
        </section>
    );
}

export default SwiperCards;
