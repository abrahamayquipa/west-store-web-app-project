import CommentsArticleCarousel from "./CommentsArticleCarousel"

const CommentsArticle: React.FC = () => {
    return (
        <article className='container mx-auto text-start my-12 sm:my-16'>
            <span className='text-5xl u-extra-bold-font mx-8'>OUR HAPPY CUSTOMERS</span>
            <section className='mx-8 mt-6 sm:mt-8 px-83'>
                <CommentsArticleCarousel/>
            </section>
        </article>
    )
}

export default CommentsArticle