import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import ReviewForm from "./ReviewForm"

export default function ReviewTabContainer({ productName, productId }) {
    const [openStatus, setOpen] = useState(false)

    return (
        <div className="review" >
            <p className="create-review-link" onClick={() => setOpen(true)}>Write a review</p>
            <div className="review-modal">
                <Dialog
                    open={openStatus}
                    onClose={() => setOpen(false)}
                    aria-labelledby="max-width-dialog-title"
                    maxWidth="lg"
                    className="modal"
                >
                    <ReviewForm productName={productName} productId={productId} initialState="" />
                </Dialog>
            </div>
        </div>
    )
}