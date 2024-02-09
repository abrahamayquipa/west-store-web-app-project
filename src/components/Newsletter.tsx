const Newsletter: React.FC = () => {
    return (
        <section className='bg-black mb-16'>
            <section className='container mx-auto gap-x-8 p-8 grid grid-cols-12'>
                <span className='mb-4 text-white u-extra-bold-font text-4xl sm:text-5xl md:text-6xl col-start-1 col-end-13 lg:col-start-1 lg:col-end-8'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</span>
                <div className='col-start-1 col-end-13 lg:col-start-8 lg:col-end-13 xl:col-start-9 my-auto'>
                    <div className='mb-4 c-searcher u-beish-bg'>
                        <i className='iconsax' icon-name='mail'></i>
                        <input type='text' placeholder='Enter your email address' className='mx-4 c-searcher__input u-beish-bg'/>
                    </div>
                    <input type='button'
                        placeholder='Enter your email address'
                        value='Subscribe to Newsletter'
                        className='p-4 bg-white rounded-full w-full u-regular-font'/>
                </div>
            </section>
        </section>
    )
}

export default Newsletter