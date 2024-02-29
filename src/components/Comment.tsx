import RatingStarts from "./RatingStarts"

type CommentProps = {
    name: string,
    description: string
}

const Comment: React.FC<CommentProps> = (props) => {
    const ratingValue = (Math.random() * (5 - 1) + 4).toFixed(2)

    return (
        <section className='c-comments px-8 py-6 c-card'>
            <RatingStarts rate={parseFloat(ratingValue)}/>
            <div className='my-1'>
                <span className='u-semi-bold-font'>{props.name}</span>
                <i className='iconsax mx-1' icon-name='verify'></i>
            </div>
            <div className='h-20 overflow-hidden'>
                <span className='u-regular-font'>{props.description}</span>
            </div>
        </section>
    )
}

export default Comment