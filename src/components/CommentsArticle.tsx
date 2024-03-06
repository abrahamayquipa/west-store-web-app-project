import SwiperCommentsArticle from "./SwiperCommentsArticle"

const CommentsArticle: React.FC = () => {
    return (
        <article className='container mx-auto text-center sm:text-start mt-12 sm:mt-16'>
            <span className='text-5xl u-extra-bold-font px-1 sm:px-8'>NUESTROS CLIENTES SATISFECHOS</span>
            <section className='mx-8 mt-6 sm:mt-8 px-83'>
                <section className='container mx-auto my-8 overflow-hidden'>
                    <SwiperCommentsArticle/>
                </section>
            </section>
        </article>
    )
}

export default CommentsArticle