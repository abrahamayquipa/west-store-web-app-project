import models from '../assets/images/models.png'

const MainArticle: React.FC = () => {
    return (
        <>
        <article className='c-main-article xl:mt-8'>
            <article className='flex flex-col md:grid md:grid-cols-12 lg:flex-row container px-8 pt-14 sm:pt-24 lg:pt-25 lg:pb-4 mx-auto'>
                <section className='md:col-start-1 md:col-end-7'>
                    <section className='flex flex-col pt-8'>
                        <span className='text-4xl sm:text-6xl lg:text-7xl u-extra-bold-font'>FIND MANY CLOTHES</span>
                        <span className='text-4xl sm:text-6xl lg:text-7xl u-extra-bold-font'>THAT MATCHES</span>
                        <span className='text-4xl sm:text-6xl lg:text-7xl u-extra-bold-font'>WITH YOUR STYLE</span>
                    </section>
                    <p className='u-regular-font py-2'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <input type='submit' value='Shop Now' className='mb-4 py-4 w-full sm:w-60 c-main-article__button u-regular-font'/>
                    <section className='flex flex-wrap lg:pb-15'>
                        <section className='flex flex-col m-2'>
                            <span className='text-4xl u-bold-font'>200+</span>
                            <span className='u-regular-font'>International Brands</span>
                        </section>
                        <hr />
                        <section className='flex flex-col m-2'>
                            <span className='text-4xl u-bold-font'>2,000+</span>
                            <span className='u-regular-font'>High-Quality</span>
                        </section>
                        <section className='flex flex-col m-2'>
                            <span className='text-4xl u-bold-font'>30,000+</span>
                            <span className='u-regular-font'>Happy Customers</span>
                        </section>
                    </section>
                </section>
                <section className='md:col-start-7 md:col-end-13 justify-self-end self-end'>
                    <img src={models} alt="main-article-image" className='' />
                </section>
            </article>
        </article>
        </>
    )
}

export default MainArticle