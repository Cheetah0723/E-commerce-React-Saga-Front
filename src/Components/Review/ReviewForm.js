import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Typography, TextareaAutosize } from '@material-ui/core';
import ReviewStarRating from "./ReviewStarRating"
import ReviewBarRating from "./ReviewBarRating"
import useReviewForm from "./useReviewForm"
import { Col } from "reactstrap"

export default function ReviewForm({ productName, productId, initialState }) {
    const { state, errors, save, handleSubmit, readOnly } = useReviewForm(initialState)

    return (
        <form className="form" >
            <Typography variant="h5" gutterBottom>
                WRITE YOUR REVIEW ABOUT THE {productName}
            </Typography>
            <p>OVERALL RATING *</p>
            <div className="star">
                <ReviewStarRating value={state.overall}
                    handleClick={data => save("overall", data)} readOnly={readOnly} name="overall" />
            </div>
            <p>FIT *</p>
            <ReviewBarRating value={state.fit}
                handleClick={data => save("fit", data)} readOnly={readOnly} name="fit" />
            <p>LENGTH *</p>
            <ReviewBarRating value={state.length}
                handleClick={data => save("length", data)} readOnly={readOnly} name="length" />
            <p>COMFORT *</p>
            <ReviewBarRating value={state.comfort}
                handleClick={data => save("comfort", data)} readOnly={readOnly} name="comfort" />
            <Col>
                <p>YOUR REVIEW *</p>
                <TextField onChange={e => save(e.target.name, e.target.value)} error={errors.title} value={state.title === undefined ? "" : state.title}
                    helperText="Please give your review a title" autoFocus={true}
                    variant="outlined" label="YOUR REVIEW TITLE" name="title" />
                <TextareaAutosize id="body" rowsMin={8} placeholder="YOUR REVIEW" name="body"
                    className="input"
                    onChange={e => save(e.target.name, e.target.value)} value={state.body === undefined ? "" : state.body} />
                {errors.body && <span className="error-msg">Please give your opinion about this product</span>}
                <p>YOUR DETAILS *</p>

                <TextField variant="outlined" label="YOUR NAME" name="name" className="input"
                    onChange={e => save(e.target.name, e.target.value)} value={state.name === undefined ? "" : state.name}
                    error={errors.name} helperText="Please enter your name" />
                <TextField variant="outlined" label="EMAIL@ADDRESS.COM" className="input"
                    error={errors.email} name="email" value={state.email === undefined ? "" : state.email}
                    onChange={e => save(e.target.name, e.target.value)} helperText="Please enter a valid email address"
                />
                {!readOnly && <Button className="switchCurrencyBtn"
                    style={{
                        color: "white",
                        marginTop: "1rem",
                        fontSize: "1rem",
                        backgroundColor: "black",
                        width: "100%",
                        borderRadius: "25px",
                        fontFamily: "'Montserrat', sans-serif",
                    }}
                    onClick={handleSubmit}>SUBMIT REVIEW</Button>}
            </Col>
        </form>
    )

}




