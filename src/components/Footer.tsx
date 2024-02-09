import visa from '../assets/images/visa-badge.png'
import mastercard from '../assets/images/mastercard-badge.png'
import paypal from '../assets/images/paypal-badge.png'
import apple from '../assets/images/apple-pay-badge.png'
import google from '../assets/images/google-pay-badge.png'


const Footer: React.FC = () => {
    return (
        <footer>
            <section className='container mx-auto px-8 md:grid gap-8 md:grid-cols-12'>
                <section className='flex flex-col mb-4 md:col-start-1 md:col-end-4'>
                    <span className='u-extra-bold-font text-3xl'>WEST.CO</span>
                    <span className='u-regular-font my-2 md:my-4'>We have clothes that suits your style and which you’re proud to wear. From women to men.</span>
                    <div>
                        <i className='iconsax mx-1' icon-name='maximize-2'></i>
                        <i className='iconsax mx-1' icon-name='grammarly'></i>
                        <i className='iconsax mx-1' icon-name='chrome'></i>
                        <i className='iconsax mx-1' icon-name='instagram'></i>
                    </div>
                </section>
                <section className='flex flex-row flex-wrap justify-between md:col-start-5 md:col-end-13'>
                        <section className='w-2/5 md:w-1/4 mb-4 md:mb-0'>
                            <span className='text-xl font-bold'>COMPANY</span>
                            <ul>
                                <li className='u-regular-font my-1'>About</li>
                                <li className='u-regular-font my-1'>Features</li>
                                <li className='u-regular-font my-1'>Works</li>
                                <li className='u-regular-font my-1'>Carrer</li>
                            </ul>
                        </section>
                        <section className='w-2/5 md:w-1/4 mb-4 md:mb-0'>
                            <span className='text-xl font-bold'>FAQ</span>
                            <ul>
                                <li className='u-regular-font my-1'>Account</li>
                                <li className='u-regular-font my-1'>Nanage Deliveries</li>
                                <li className='u-regular-font my-1'>Orders</li>
                                <li className='u-regular-font my-1'>Payment</li>
                            </ul>
                        </section>
                        <section className='w-2/5 md:w-1/4'>
                            <span className='text-xl font-bold'>HELP</span>
                            <ul>
                                <li className='u-regular-font my-1'>Costumer Support</li>
                                <li className='u-regular-font my-1'>Delivery Details</li>
                                <li className='u-regular-font my-1'>Terms & Conditions</li>
                                <li className='u-regular-font my-1'>Privacy Policy</li>
                            </ul>
                        </section>
                        <section className='w-2/5 md:w-1/4'>
                            <span className='text-xl font-bold'>RESOURCES</span>
                            <ul>
                                <li className='u-regular-font my-1'>Free e-Book</li>
                                <li className='u-regular-font my-1'>Development Tutorial</li>
                                <li className='u-regular-font my-1'>How to - Blog</li>
                                <li className='u-regular-font my-1'>Youtube Playsit</li>
                            </ul>
                        </section>
                </section>
                <section className='md:col-start-1 md:col-end-13 md:mx-auto mb-8 md:mb-6 md:w-full md:flex md:justify-between'>
                    <span className='u-regular-font flex text-center mt-6 md:mt-0'>WEST.co © 2000-2023, All Rights Reserved</span>
                    <div className='flex'>
                        <img src={visa} alt={visa} className='self-center'/>
                        <img src={mastercard} alt={mastercard} />
                        <img src={paypal} alt={paypal} />
                        <img src={apple} alt={apple} />
                        <img src={google} alt={google} />
                    </div>
                </section>
            </section>
        </footer>
    )
}

export default Footer