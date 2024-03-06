import models from '../assets/images/models.png'

const MainArticle: React.FC = () => {
    return (
        <>
        <article className='c-main-article xl:mt-8'>
            <article className='flex flex-col md:grid md:grid-cols-12 lg:flex-row container px-8 pt-14 sm:pt-24 lg:pt-25 lg:pb-4 mx-auto'>
                <section className='md:col-start-1 md:col-end-7'>
                    <section className='flex flex-col pt-8'>
                        <span className='text-4xl sm:text-6xl lg:text-7xl u-extra-bold-font'>ENCUENTRA LA ROPA</span>
                        <span className='text-4xl sm:text-6xl lg:text-7xl u-extra-bold-font'>QUE COMBINA</span>
                        <span className='text-4xl sm:text-6xl lg:text-7xl u-extra-bold-font'>CON TU ESTILO</span>
                    </section>
                    <p className='u-regular-font py-2'>Explora nuestra diversa gama de prendas meticulosamente elaboradas, diseñadas para resaltar su individualidad y satisfacer su sentido del estilo.</p>
                    <input type='submit' value='Shop Now' className='mb-4 py-4 w-full sm:w-60 c-main-article__button u-regular-font'/>
                    <section className='flex flex-wrap lg:pb-15'>
                        <section className='flex flex-col m-2'>
                            <span className='text-4xl u-bold-font'>200+</span>
                            <span className='u-regular-font'>Marcas</span>
                        </section>
                        <hr />
                        <section className='flex flex-col m-2'>
                            <span className='text-4xl u-bold-font'>2,000+</span>
                            <span className='u-regular-font'>Lotes diferentes</span>
                        </section>
                        <section className='flex flex-col m-2'>
                            <span className='text-4xl u-bold-font'>30,000+</span>
                            <span className='u-regular-font'>Clientes satisfechos</span>
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