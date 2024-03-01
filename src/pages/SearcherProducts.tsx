import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import Card from '../components/Card';
import Dropdown from '../components/Dropdowm';
import FetchDataError from '../errors/FetchDataError';

interface ProductData {
    id: number;
    title: string;
    rate: number;
    price: {
        currentPrice: number;
        oldPrice?: number;
        discount?: number;
    };
    images: string[];
}

const SearcherProducts: React.FC = () => {
    const [dataArray, setDataArray] = useState<any>([]);
    const [dataObj, setDataObj] = useState<ProductData | {}>({});
    const { name } = useParams();

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
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/products/search/${name}`);
                if (!res.ok) throw new FetchDataError('The query failed');
                const json = await res.json();
                if (Array.isArray(json)) setDataArray(json);
                else setDataObj(json);
                console.log(json)
            } catch (error) {
                if (error instanceof FetchDataError) console.log(`${error}`);
            }
        }
        fetchData();
    }, [name])

    return (
        <article className='container mx-auto px-8 mt-16 sm:mt-24 mb-8'>
            <section className='flex flex-col sm:flex-row justify-between items-end'>
                <span className='text-5xl u-extra-bold-font'>{`RESULTADOS DE BUSQUEDA`}</span>
                <div className='flex items-center mt-4 sm:mt-0 z-50'>
                    <span className='mr-4 text-xl u-regular-font'>Filtros</span>
                    <Dropdown/>
                </div>
            </section>
            {dataArray.length > 0 || Object.keys(dataObj).length > 0 ? (
                <section>
                    {dataArray.map((el: any, index: number) => (
                        <section className='swiper-clothe-cards overflow-hidden mt-8'>
                            <section className='flex swiper-wrapper w-full sm:w-1/6'>
                                <Card key={index} id={el.id} image={el.images[0]} name={el.title} rate={el.rate} currentPrice={el.price.currentPrice} oldPrice={el.price.oldPrice} discount={el.price.discount} />
                            </section>
                        </section>
                    ))}
                    {Object.keys(dataObj).length > 0 && 'images' in dataObj && (
                        <section className='swiper-clothe-cards overflow-hidden mt-8'>
                            <section className='flex swiper-wrapper w-full sm:w-1/6'>
                                <Card key={0} id={dataObj.id} image={dataObj.images[0]} name={dataObj.title} rate={dataObj.rate} currentPrice={dataObj.price.currentPrice} oldPrice={dataObj.price.oldPrice} discount={dataObj.price.discount} />
                            </section>
                        </section>
                    )}
                </section>
            ) : (
                <article className='container flex px-8 mx-auto my-16 sm:my-52'>
                    <span className='text-6xl text-center m-auto u-extra-bold-font'>The product doesn't exist😭</span>
                </article>
            )}
        </article>
    )
}

export default SearcherProducts;
