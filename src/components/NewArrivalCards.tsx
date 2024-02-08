import RatingStarts from './RatingStarts';
import DiscountLabel from './DiscountLabel';

type NewArrivalCardProps = {
    image: string
    name: string
    price: number
}

const NewArrivalCards: React.FC<NewArrivalCardProps> = (props) => {
    const ratingValue = (Math.random() * (5 - 1) + 1).toFixed(2)
    const switchValue = Math.floor(Math.random() * 10)
    const discountValue = Math.floor(Math.random() * 60 + 10)

    return (
        <section className='flex flex-col'>
            <img src={props.image} alt={props.image} className='c-main-article__image' />
            <div className='flex flex-col items-start justify-between'>
                <span className='text-start text-2xl font-semibold tracking-tighter mt-2 w-full text-nowrap text-ellipsis overflow-hidden'>{props.name}</span>
                <div className='flex my-1'>
                    <RatingStarts value={ratingValue}/>
                    <span className='u-regular-font tracking-tighter'>{`${ratingValue}/5`}</span>
                </div>
                <div className='flex'>
                    <span className='text-2xl font-semibold tracking-tighter mx-1'>{`$${props.price + 50},00`}</span>
                    {switchValue >= 7 && <span className='text-2xl text-gray-400 font-semibold line-through tracking-tighter mx-1'>{`$${props.price + 78},00`}</span>}
                    {switchValue >= 5 && <DiscountLabel value={discountValue}/>}
                </div>
            </div>
        </section>
    )
}

export default NewArrivalCards;