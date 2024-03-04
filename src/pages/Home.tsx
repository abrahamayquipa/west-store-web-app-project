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
            <SwiperArticle title='NEW ARRIVALS' url='https://west-pfrh4c77c-abrahams-projects-a43793ae.vercel.app/api/products'/>
            <SwiperArticle title='TOP SELLING' url='https://west-pfrh4c77c-abrahams-projects-a43793ae.vercel.app/api/products?category=4'/>
            <Frames/>
            <CommentsArticle/>
            <Newsletter/>
        </>
    )
}

export default Home