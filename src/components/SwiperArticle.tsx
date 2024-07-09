import React, { Suspense, lazy } from 'react';

const UseFetchData = lazy(() => import('./UseFetchData'));

type TitleArticleProps = {
    title: string,
    url: string
}

const SwiperArticle: React.FC<TitleArticleProps> = (props) => {
    return (
        <article className='container mx-auto text-center my-12 sm:my-16'>
            <span className='text-5xl u-extra-bold-font'>{props.title}</span>
            <section className='mx-8 mt-6 sm:mt-8 px-83'>
                <Suspense fallback={<span>Loading...</span>}>
                    <UseFetchData url={props.url}/>
                </Suspense>
            </section>
        </article>
    )
}

export default SwiperArticle;
