import { Rating } from "@mui/material";

type RatingStartsProps = {
    rate: number
}

const RatingStarts: React.FC<RatingStartsProps> = (props) => {
    return (
        <Rating name="half-rating-read" defaultValue={props.rate} precision={0.5} readOnly />
    )
}

export default RatingStarts;
