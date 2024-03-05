import { useParams } from 'react-router-dom'

import ProductDetails from "../components/ProducDetails"
import CommentsArticle from "../components/CommentsArticle"
import SwiperArticle from "../components/SwiperArticle"
import Newsletter from "../components/Newsletter"

const Product: React.FC = () => {
    const { id } = useParams();
    if(!id) { return <h1>Not found</h1> }

    return (
        <>
            <ProductDetails id={parseInt(id)} />
            <CommentsArticle />
            <SwiperArticle title='YOU MIGHT ALSO LIKE' url='https://west-store-backend.onrender.com/api/products?category=4' />
            <Newsletter />
        </>
    )
}

export default Product