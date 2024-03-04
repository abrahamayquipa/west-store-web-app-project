import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getCartItems, deleteCartItems } from '../logic/cart';
import { priceTotalItems, discount, finalPrice } from '../logic/cartOperations';
import Newsletter from '../components/Newsletter';
import Item from '../logic/Item';

const ShoppingCart = () => {
    const [arrayItems, setArrayItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cartItems = getCartItems();
            setArrayItems(cartItems);
        };
        fetchData();
    }, []);

    const handleDeleteCartItem = (index: number) => {
        deleteCartItems(index);
        const updatedCartItems = getCartItems();
        setArrayItems(updatedCartItems);
    };

    const checkout = () => {
        toast.error('Error: Pasarela de pagos en construcción')
    };

    return (
        <>
            <article className='container mx-auto px-8 mt-24'>
                <h1 className='text-5xl u-extra-bold-font'>YOUR CART</h1>
                {arrayItems.length > 0 ? (
                    <section className='grid grid-cols-7 lg:grid-cols-12 gap-4 mt-8 lg:mb-16'>
                        <ul className='col-span-8 mb-0'>
                            {arrayItems.map((el: Item, index: number) => (
                                <li key={index} className='flex mb-4 lg:mb-8'>
                                    <img src={el.image} alt={el.image} className='w-24 lg:w-32 h-24 lg:h-32 mr-4 rounded-xl' />
                                    <section className='flex flex-col w-full lg:mr-16'>
                                        <div className='flex lg:justify-between'>
                                            <span className='text-xl lg:text-2xl font-semibold tracking-tighter'>{el.title}</span>
                                            <i className='iconsax' icon-name='trash' onClick={() => handleDeleteCartItem(index)}></i>
                                        </div>
                                        <span className='u-regular-font mt-2'>Size: {el.size}</span>
                                        <span className='u-regular-font'>Color: {el.color}</span>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-2xl font-semibold tracking-tighter'>{`$${el.price}`}</span>
                                            <div className='flex aling-center mr-2 my-1 lg:my-0 px-6 lg:px-4 py-3 u-beish-bg rounded-3xl'>
                                                <span className='px-2 lg:px-4 u-regular-font'>{`Número de tems: ${el.numberItems}`}</span>
                                            </div>
                                        </div>
                                    </section>
                                </li>
                            ))}
                        </ul>
                        <section className='flex flex-col mb-8 lg:mb-0 col-span-7 lg:col-span-4'>
                            <span className='mb-2 lg:mb-6 text-3xl font-bold'>Order sumary</span>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <i className='iconsax' icon-name='bank-card'></i>
                                    <span className='ml-1 u-regular-font'>Subtotal</span>
                                </div>
                                <span className='text-xl font-semibold tracking-tighter'>{`$${priceTotalItems(arrayItems).toFixed(2)}`}</span>
                            </div>
                            <div className='flex justify-between items-center my-1'>
                                <div className='flex items-center'>
                                    <i className='iconsax' icon-name='discount-badge'></i>
                                    <span className='ml-1 u-regular-font'>Discount(-20%)</span>
                                </div>
                                <span className='text-xl text-rose-500 font-semibold tracking-tighter'>{`-$${discount(arrayItems).toFixed(2)}`}</span>
                            </div>
                            <div className='flex justify-between items-center my-1'>
                                <div className='flex items-center'>
                                    <i className='iconsax' icon-name='truck-speed'></i>
                                    <span className='ml-1 u-regular-font'>Delivery</span>
                                </div>
                                <span className='text-xl font-semibold tracking-tighter'>-$15.00</span>
                            </div>
                            <div className='flex justify-between items-center my-4 lg:mb-6'>
                                <div className='flex items-center'>
                                    <i className='iconsax' icon-name='money-5'></i>
                                    <span className='ml-1 u-regular-font'>Total</span>
                                </div>
                                <span className='font-bold text-2xl tracking-tighter'>{`$${finalPrice(arrayItems).toFixed(2)}`}</span>
                            </div>
                            <div className='w-full'>
                                <input type='button' value='Go to checkout' className='w-full p-4 bg-black text-base text-white rounded-full u-regular-font' onClick={checkout}/>
                                <Toaster />
                            </div>
                        </section>
                    </section>
                ) : (
                    <article className='container flex px-8 mx-auto my-32'>
                        <span className='text-6xl text-center m-auto u-extra-bold-font'>There isn't any product in your cart😭</span>
                    </article>
                )}
            </article>
            <Newsletter />
        </>
    );
};

export default ShoppingCart;