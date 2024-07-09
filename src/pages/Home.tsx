import { Suspense, lazy } from 'react';

const MainArticle = lazy(() => import('../components/MainArticle'));
const MainArticleCarousel = lazy(() => import('../components/MainArticleCarousel'));
const SwiperArticle = lazy(() => import('../components/SwiperArticle'));
const Frames = lazy(() => import('../components/Frames'));
const CommentsArticle = lazy(() => import('../components/CommentsArticle'));
const Newsletter = lazy(() => import('../components/Newsletter'));

const Home = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <MainArticle />
            <MainArticleCarousel />
            <SwiperArticle title='NUEVOS LOTES' url='https://west-store-backend.onrender.com/api/products' />
            <SwiperArticle title='MAS VENDIDOS' url='https://west-store-backend.onrender.com/api/products?category=4' />
            <Frames />
            <CommentsArticle />
            <Newsletter />
        </Suspense>
    );
};

export default Home;
