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
                    <span className='u-regular-font my-2 md:my-4'>Tenemos ropa que se adapta a tu estilo y que estarás orgulloso de usar. De mujeres a hombres.</span>
                    <div>
                        <i className='iconsax mx-1' icon-name='maximize-2'></i>
                        <i className='iconsax mx-1' icon-name='grammarly'></i>
                        <i className='iconsax mx-1' icon-name='chrome'></i>
                        <i className='iconsax mx-1' icon-name='instagram'></i>
                    </div>
                </section>
                <section className='flex flex-row flex-wrap justify-between md:col-start-5 md:col-end-13'>
                        <section className='w-2/5 md:w-1/4 mb-4 md:mb-0'>
                            <span className='text-xl font-bold'>EMPRESA</span>
                            <ul>
                                <li className='u-regular-font my-1'>Acerca de</li>
                                <li className='u-regular-font my-1'>Caracteristicas</li>
                                <li className='u-regular-font my-1'>Trabajo</li>
                                <li className='u-regular-font my-1'>Carreras</li>
                            </ul>
                        </section>
                        <section className='w-2/5 md:w-1/4 mb-4 md:mb-0'>
                            <span className='text-xl font-bold'>FAQ</span>
                            <ul>
                                <li className='u-regular-font my-1'>Cuenta</li>
                                <li className='u-regular-font my-1'>Delivery</li>
                                <li className='u-regular-font my-1'>Ordenes</li>
                                <li className='u-regular-font my-1'>Pagos</li>
                            </ul>
                        </section>
                        <section className='w-2/5 md:w-1/4'>
                            <span className='text-xl font-bold'>AYUDA</span>
                            <ul>
                                <li className='u-regular-font my-1'>Servicio al cliente</li>
                                <li className='u-regular-font my-1'>Detalles del delivery</li>
                                <li className='u-regular-font my-1'>Terminos y condiciones</li>
                                <li className='u-regular-font my-1'>Politica de privacidad</li>
                            </ul>
                        </section>
                        <section className='w-2/5 md:w-1/4'>
                            <span className='text-xl font-bold'>RECURSOS</span>
                            <ul>
                                <li className='u-regular-font my-1'>e-Book gratuito</li>
                                <li className='u-regular-font my-1'>Tutorial de desarrollo</li>
                                <li className='u-regular-font my-1'>Blog</li>
                                <li className='u-regular-font my-1'>Playsit Youtube</li>
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