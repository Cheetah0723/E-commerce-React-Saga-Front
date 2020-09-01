import React, { useState } from 'react';
import ReivewModal from "./ReviewModal"

export default function ReviewTabContainer({ productName, productId }) {
    const [openStatus, setOpen] = useState(false)
 
    return (
        <div className="review" >
            <div className="review-tab" style={{ display: "flex", marginLeft: "40%" }}>
                <p className="create-review-link" onClick={() => setOpen(true)}>Write a review</p>
            </div>
            <div className="review-modal">
                <ReivewModal openStatus={openStatus} productName={productName} productId={productId}
                    handleClose={() => setOpen(false)} />
            </div>
        </div>
    )


}