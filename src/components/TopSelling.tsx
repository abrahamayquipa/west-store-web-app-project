import SwiperTopSelling from "./SwiperTopSelling"

const TopSelling: React.FC = () => {
    return (
        <article className='container mx-auto text-center my-12 sm:my-16'>
            <span className='text-5xl u-extra-bold-font'>TOP SELLING</span>
            <section className='mx-8 mt-6 sm:mt-8 px-83'>
                <SwiperTopSelling/>
            </section>
        </article>
    )
}

export default TopSelling