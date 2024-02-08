import SwiperTopSelling from "./SwiperMainArticle"

const TopSellingCarousel: React.FC = () => {
    return (
        <section className='container mx-auto px-8 my-8 sm:my-12 overflow-hidden'>
            <SwiperTopSelling/>
        </section>
    )
}

export default TopSellingCarousel