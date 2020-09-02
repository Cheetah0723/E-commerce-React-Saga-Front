import React from "react";
import StyledRating from "./StyledRating"
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function ReviewStarRating({ value, readOnly, name, handleClick }) {

    return (
        <StyledRating
            name={name}
            value={value === undefined ? 0 : parseInt(value)}
            readOnly={readOnly}
            precision={0.5}
            icon={<StarIcon fontSize="large" />}
            emptyIcon={<StarBorderIcon fontSize="large" />}
            onChange={(event, newValue) => {
                if (!readOnly) {
                    handleClick(newValue)
                }
            }}
        />
    )
}