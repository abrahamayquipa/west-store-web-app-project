import { useEffect, useState } from "react";

import Swiper from 'swiper';

import Comment from "./Comment"
import FetchCommentsError from "../errors/FetchCommentsError";

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

const SwiperCommentsArticle = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-comments-main-article', {
            direction: 'horizontal',
            loop: true,
            allowTouchMove: true,
            breakpoints: {
                200: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                850: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1500: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            },
        });
		return () => {
			swiper.destroy();
		};
    }, []);

    const [comments, setComments] = useState<Welcome[]>([])
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch('https://api.escuelajs.co/api/v1/products')
                if (!res.ok) throw new FetchCommentsError('The query failed')
                const json = await res.json() as Welcome[];
                setComments(json)
            } catch (error) {
                if (error instanceof FetchCommentsError) console.log(`${error}`)
            }
        }
        fetchComments()
    }, [])

    return (
        <section className='swiper-comments-main-article overflow-hidden'>
            <section className='flex swiper-wrapper'>
            {
                comments.slice(0,20).map((el) => (
                    <div className='swiper-slide' key={el.id}>
                        <Comment name={el.title} description={el.description}/>
                    </div>
                ))
            }
            </section>
        </section>
    )
}

export default SwiperCommentsArticle