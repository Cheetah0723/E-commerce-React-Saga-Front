import React from 'react';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import Box from '@material-ui/core/Box';
import StyledRating from "./StyledRating"

export default function ReviewBarRating({ value, readOnly, handleClick, name }) {

    return (
        <div className="bar-rating">
            <Box component="fieldset" mb={3} borderColor="transparent">
                <StyledRating
                    value={value===undefined?0:parseInt(value)}
                    name={name}
                    precision={0.5}
                    size="large"
                    icon={<ThumbUpAltSharpIcon fontSize="large" />}
                    emptyIcon={<ThumbUpAltSharpIcon fontSize="large" />}
                    readOnly={readOnly}
                    onChange={(event, newValue) => {
                        if (!readOnly) {
                           handleClick(newValue)
                        }
                    }}
                />
            </Box>
        </div>
    )
}
