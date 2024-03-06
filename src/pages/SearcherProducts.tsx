import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import Card from '../components/Card';
import Dropdown from '../components/Dropdown';
import FetchDataError from '../errors/FetchDataError';

const SearcherProducts: React.FC = () => {
    const [dataArray, setDataArray] = useState<any>([]);
    const [dataObj, setDataObj] = useState<any>({});
    const { name } = useParams();
    const location = useLocation();
    const category = new URLSearchParams(location.search).get('category');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let endpoint = '';
                if (name) endpoint = `search/${name}`;
                else if (category) endpoint = `?category=${category}`;

                const res = await fetch(`https://west-store-backend.onrender.com/api/products/${endpoint}`);
                if (!res.ok) throw new FetchDataError('The query failed');
                const json = await res.json();
                setDataArray(json);
                if (Array.isArray(json)) setDataArray(json);
                else setDataObj(json);
            } catch (error) {
                if (error instanceof FetchDataError) console.log(`${error}`);
            }
        }
        fetchData();
    }, [name, category]);

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
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1500: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                },
            },
        });
        return () => {
			swiper.destroy();
		};
    }, [dataArray]);

    return (
        <article className='container mx-auto px-8 mt-16 sm:mt-24 mb-8'>
            <section className='flex flex-col sm:flex-row justify-between items-end'>
                <span className='text-5xl u-extra-bold-font'>{`RESULTADOS DE BUSQUEDA`}</span>
                <div className='flex items-center mt-4 sm:mt-0'>
                    <span className='mr-4 text-xl u-regular-font'>Filtros</span>
                    <Dropdown />
                </div>
            </section>
            {dataArray.length > 0 || Object.keys(dataObj).length > 0 ? (
                <section className='w-full'>
                    <section className='swiper-clothe-cards overflow-hidden mt-8'>
                        <section className='flex swiper-wrapper'>
                            {dataArray.length > 0 && dataArray.map((el: any, index: number) => (
                                <div className='swiper-slide' key={index}>
                                    <Card id={el.id} image={el.images[0]} name={el.title} rate={el.rate} currentPrice={el.price.currentPrice} oldPrice={el.price.oldPrice} discount={el.price.discount} />
                                </div>
                            ))}
                        </section>
                    </section>
                    {Object.keys(dataObj).length > 0 && 'images' in dataObj && (
                        <section className='swiper-clothe-cards overflow-hidden'>
                            <section className='flex swiper-wrapper'>
                                <div className='swiper-slide' key={0}>
                                    <Card id={dataObj.id} image={dataObj.images[0]} name={dataObj.title} rate={dataObj.rate} currentPrice={dataObj.price.currentPrice} oldPrice={dataObj.price.oldPrice} discount={dataObj.price.discount} />
                                </div>
                            </section>
                        </section>
                    )}
                </section>
            ) : (
                <article className='container flex px-8 mx-auto my-16 sm:my-52'>
                    <span className='text-6xl text-center m-auto u-extra-bold-font'>El producto no existe😭</span>
                </article>
            )}
        </article>
    )
}

export default SearcherProducts;