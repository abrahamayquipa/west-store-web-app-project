import React, { useEffect, useState } from "react";

import Swiper from 'swiper';

import Comment from "./Comment"
import FetchCommentsError from "../errors/FetchCommentsError";

export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

const SwiperCommentsArticle: React.FC = () => {
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

    const [comments, setComments] = useState<Comment[]>([])
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/comments')
                if (!res.ok) throw new FetchCommentsError('The query failed')
                const json = await res.json() as Comment[];
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
                comments.map((el) => (
                    <div className='swiper-slide' key={el.id}>
                        <Comment name={el.email} description={el.body}/>
                    </div>
                ))
            }
            </section>
        </section>
    )
}

export default SwiperCommentsArticle;