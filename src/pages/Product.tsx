import ProductDetails from "../components/ProducDetails"
import CommentsArticle from "../components/CommentsArticle"
import SwiperArticle from "../components/SwiperArticle"
import Newsletter from "../components/Newsletter"

const Product: React.FC = () => {
    return (
        <>
            <ProductDetails id={4}/>
            <CommentsArticle/>
            <SwiperArticle title='YOU MIGHT ALSO LIKE' url='http://localhost:3000/api/products?category=4'/>
            <Newsletter/>
        </>
    )
}

export default Product