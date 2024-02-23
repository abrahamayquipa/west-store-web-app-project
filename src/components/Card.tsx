import RatingStarts from './RatingStarts';
import DiscountLabel from './DiscountLabel';

type CardProps = {
    image: string;
    name: string;
    rate: number;
    currentPrice: number;
    oldPrice?: number;
    discount?: number;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <section className='flex flex-col c-card'>
            <div>
                <img src={props.image} alt={props.image} className='c-main-article__image' />
            </div>
            <div className='flex flex-col items-start justify-between'>
                <span className='text-start text-2xl font-semibold tracking-tighter mt-2 w-full text-nowrap text-ellipsis overflow-hidden'>{props.name}</span>
                <div className='flex my-1'>
                    <RatingStarts rate={props.rate}/>
                    <span className='u-regular-font tracking-tighter'>{`${props.rate}/5`}</span>
                </div>
                <div className='flex'>
                    <span className='text-2xl font-semibold tracking-tighter mx-1'>{`$${props.currentPrice}`}</span>
                    <span className='text-2xl text-gray-400 font-semibold line-through tracking-tighter mx-1'>
                        {props.oldPrice && `$${props.oldPrice}`}
                    </span>
                    {props.discount && <DiscountLabel value={props.discount}/>}
                </div>
            </div>
        </section>
    )
}

export default Card;