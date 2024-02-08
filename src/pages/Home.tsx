import MainArticle from "../components/MainArticle"
import MainArticleCarousel from "../components/MainArticleCarousel"
import NewArrivals from "../components/NewArrivals"
import TopSelling from "../components/TopSelling"
import CommentsArticle from "../components/CommentsArticle"

const Home = () => {
    return (
        <>
            <MainArticle/>
            <MainArticleCarousel/>
            <NewArrivals/>
            <TopSelling/>
            <CommentsArticle/>
        </>
    )
}

export default Home