import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import RatingStarts from './RatingStarts';
import DiscountLabel from './DiscountLabel';
import FetchDataError from '../errors/FetchDataError';
import Item from '../logic/Item';
import Login from './Login';

import { getUserFromSession } from '../logic/loginSesion';
import { addCartItem } from '../logic/cart';

type ProductDetailsProps = {
    id: number,
}

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
    const [data, setData] = useState<any>({});
    const [imageSelected, setImageSelected] = useState('');
    const [numberItems, setNumberItems] = useState(0);
    const [color, setColor] = useState('brown');
    const [size, setSize] = useState('sm');
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!getUserFromSession()) setShowLogin(true);

        const fetchData = async () => {
            try {
                const res = await fetch(`https://west-pfrh4c77c-abrahams-projects-a43793ae.vercel.app/api/products/${props.id}`);
                if (!res.ok) throw new FetchDataError('The query failed');
                const json = await res.json();
                setData(json);
            } catch (error) {
                if (error instanceof FetchDataError) console.log(`${error}`);
            }
        }
        fetchData();
    }, [props.id])

    const handleNotifications = () => {
        const addItemsNotify = () => toast.success('Item agregado correctamente');
        const withoutItemsNotify = () => toast.error('Agrega como mínimo un item a tu carrito de compras');

        if (numberItems > 0) {
            addItemsNotify();
            const newItem = new Item(data.images[0], data.title, size, color, data.price.currentPrice, numberItems);
            addCartItem(newItem);
        } else withoutItemsNotify();
    }

    return (
        <Link to={`/product/${props.id}`}>
            {showLogin && <Login />}
            <article className='container mx-auto lg:flex px-8 mt-16 sm:mt-28 lg:mt-40'>
                <section className='flex flex-col lg:w-2/6 lg:mr-4'>
                    <section className='flex w-full lg:my-4 justify-between order-last'>
                        {data.images && data.images.length > 0 && (
                            data.images.map((el: string, index: number) => (
                                <img key={index} src={el} alt={el} onClick={() => { setImageSelected(el) }} className='my-3 sm:my-6 lg:my-0 c-product__secondary-cards' />
                            ))
                        )}
                    </section>
                    <section>
                        {data.images && data.images.length > 0 && (
                            <div className='c-product__main-card--hidden'>
                                <img src={imageSelected || data.images[0]} alt={data.images[0]} className='w-full c-product__main-card' />
                            </div>
                        )}
                    </section>
                </section>
                <section className='lg:my-auto lg:ml-4 lg:w-4/6'>
                    <h1 className='text-4xl lg:text-7xl u-extra-bold-font'>{data.title && data.title.toUpperCase()}</h1>
                    <section className='flex flex-col my-2'>
                        <span className='u-regular-font'>{`Creation at: ${data.creationAt}`}</span>
                        <span className='u-regular-font'>{`Update at: ${data.updatedAt}`}</span>
                    </section>
                    <section className='flex my-2'>
                        {data.rate && (
                            <>
                                <RatingStarts rate={data.rate} />
                                <span className='tracking-tighter u-regular-font'>{`${data.rate}/5`}</span>
                            </>
                        )}
                    </section>
                    <section className='flex'>
                        {data.price && (
                            <section className='flex items-center lg:my-1'>
                                {data.price.currentPrice && <h1 className='text-2xl lg:text-3xl tracking-tighter mx-1'>{`$${data.price.currentPrice}`}</h1>}
                                {data.price.oldPrice && <span className='lg:mx-2 text-2xl lg:text-3xl text-gray-400 font-semibold line-through tracking-tighter mx-1'>{`$${data.price.oldPrice}`}</span>}
                                {data.price.discount && <div className='flex'><DiscountLabel value={data.price.discount} /></div>}
                            </section>
                        )}
                    </section>
                    {data.description && <p className='my-2 u-regular-font'>{data.description}</p>}
                    <section className='mt-4'>
                        <span className='u-regular-font'>{`Select color: ${color}`}</span>
                        <section className='flex flex-wrap'>
                            {[{ name: 'brown', color: '#4F4631' }, { name: 'green', color: '#314F4A' }, { name: 'purple', color: '#31344F' }, { name: 'beish', color: '#E5E2D8' }, { name: 'pink', color: '#FAC6C6' }].map(({ name, color }, index) => (
                                <div key={index} className='mr-2 c-circle__back flex' onClick={() => { setColor(name) }}>
                                    <div className={`c-circle__front self-center mx-auto`} style={{ backgroundColor: color }}></div>
                                </div>
                            ))}
                        </section>
                    </section>
                    <section className='mt-4'>
                        <span className='u-regular-font'>{`Choose Size: ${size}`}</span>
                        <section className='flex flex-wrap'>
                            {['sm', 'md', 'lg', 'xl'].map((value, index) => (
                                <div key={index} className={`my-1 mr-2 px-6 py-2 rounded-3xl ${size === value ? 'bg-black text-white' : 'u-beish-bg'}`} onClick={() => setSize(value)}>
                                    <span className='u-regular-font'>{value}</span>
                                </div>
                            ))}
                        </section>
                    </section>
                    <section className='flex items-center lg:my-2'>
                        <div className='flex aling-center mr-2 my-4 px-6 lg:px-10 py-4 u-beish-bg rounded-3xl'>
                            <i className='iconsax' icon-name='minus' onClick={() => { if (numberItems > 0) setNumberItems(numberItems - 1) }}></i>
                            <span className='px-4 lg:px-8 u-regular-font'>{numberItems}</span>
                            <i className='iconsax' icon-name='add' onClick={() => { setNumberItems(numberItems + 1) }}></i>
                        </div>
                        <div className='w-full ml-2 py-4 text-white text-center bg-black rounded-3xl' onClick={handleNotifications}>
                            <Toaster />
                            <input type='button' value='Add to cart' />
                        </div>
                    </section>
                </section>
            </article>
        </Link>
    )
}

export default ProductDetails;