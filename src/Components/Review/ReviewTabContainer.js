import React, { useState } from 'react';
import ReivewModal from "./ReviewModal"
import ReviewForm from "./ReviewForm"

export default function ReviewTabContainer({ productName, productId }) {
    const [openStatus, setOpen] = useState(false)

    return (
        <div className="review" >
            <p className="create-review-link" onClick={() => setOpen(true)}>Write a review</p>
            <div className="review-modal">
                <ReivewModal openStatus={openStatus} handleClose={() => setOpen(false)}>
                    <ReviewForm productName={productName} productId={productId} initialState="" />
                </ReivewModal>
            </div>
        </div>
    )
}