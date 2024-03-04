import React, { useState } from 'react';
import { Rating } from "@mui/material";

type RatingStartsProps = {
    rate: number
}

const RatingStarts: React.FC<RatingStartsProps> = (props) => {
    const [value, setValue] = useState<number | null>(props.rate);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        if (event) setValue(newValue);
    };

    return (
        <Rating
            name="half-rating-read"
            value={value}
            precision={0.5}
            readOnly
            onChange={handleChange}
        />
    )
}

export default RatingStarts;
