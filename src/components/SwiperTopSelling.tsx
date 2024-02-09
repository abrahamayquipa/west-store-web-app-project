import { useEffect, useState } from "react";

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';

import NewArrivalCards from "./NewArrivalCards"
import FetchDataError from '../errors/FetchDataError'

export enum Name {
    ChangeTitle = 'Change title',
    Clothes = 'Clothes',
    Electronics = 'Electronics',
    Miscellaneous = 'Miscellaneous',
    Música = 'Música',
    Shoes = 'Shoes'
}

export interface Category {
    id:         number
    name:       Name
    image:      string
    creationAt: Date
    updatedAt:  Date
}

export interface Welcome {
    id:          number
    title:       string
    price:       number
    description: string
    images:      string[]
    creationAt:  Date
    updatedAt:   Date
    category:    Category
}

const SwiperTopSelling: React.FC = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-top-selling', {
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

    const [data, useData] = useState<Welcome[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://api.escuelajs.co/api/v1/products')
                if (!res.ok) throw new FetchDataError('The query failed')
                const json = await res.json() as Welcome[];
                useData(json)
            } catch (error) {
                if (error instanceof FetchDataError) console.log(`${error}`)
            }
        }
        fetchData()
    }, [])
    return (
        <section className='swiper-top-selling overflow-hidden'>
            <section className='flex swiper-wrapper'>
            {
                data.slice(20,40).map((el) => (
                    <div className='swiper-slide' key={el.id}>
                        <NewArrivalCards image={el.images[0]} name={el.title} price={el.price} />
                    </div>
                ))
            }
            </section>
        </section>
    )
}

export default SwiperTopSelling