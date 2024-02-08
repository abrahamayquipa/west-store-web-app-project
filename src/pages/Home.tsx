import MainArticle from "../components/MainArticle"
import MainArticleCarousel from "../components/MainArticleCarousel"
import NewArrivals from "../components/NewArrivals"
import TopSelling from "../components/TopSelling"

const Home = () => {
    return (
        <>
            <MainArticle/>
            <MainArticleCarousel/>
            <NewArrivals/>
            <TopSelling/>
        </>
    )
}

export default Home