import { Rating } from "@mui/material";

type RatingStartsProps = {
    value: string
}

const RatingStarts: React.FC<RatingStartsProps> = (props) => {
    return (
        <Rating name="half-rating-read" defaultValue={parseFloat(props.value)} precision={0.5} readOnly />
    )
}

export default RatingStarts;