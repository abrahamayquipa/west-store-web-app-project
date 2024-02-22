import MainArticle from "../components/MainArticle"
import MainArticleCarousel from "../components/MainArticleCarousel"
import SwiperArticle from "../components/SwiperArticle"
import Frames from "../components/Frames"
import CommentsArticle from "../components/CommentsArticle"
import Newsletter from "../components/Newsletter"

const Home = () => {
    return (
        <>
            <MainArticle/>
            <MainArticleCarousel/>
            <SwiperArticle title='NEW ARRIVALS' url='http://localhost:3000/api/products'/>
            <SwiperArticle title='TOP SELLING' url='http://localhost:3000/api/products?category=4'/>
            <Frames/>
            <CommentsArticle/>
            <Newsletter/>
        </>
    )
}

export default Home