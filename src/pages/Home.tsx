import MainArticle from "../components/MainArticle"
import MainArticleCarousel from "../components/MainArticleCarousel"
import NewArrivals from "../components/NewArrivals"
import TopSelling from "../components/TopSelling"
import Frames from "../components/Frames"
import CommentsArticle from "../components/CommentsArticle"
import Newsletter from "../components/Newsletter"

const Home = () => {
    return (
        <>
            <MainArticle/>
            <MainArticleCarousel/>
            <NewArrivals/>
            <TopSelling/>
            <Frames/>
            <CommentsArticle/>
            <Newsletter/>
        </>
    )
}

export default Home