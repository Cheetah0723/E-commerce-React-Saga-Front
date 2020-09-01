import React, { useState } from 'react';
import { findInstaRecordById, findById } from '../Search/Actions';
import InstaModal from "./InstaModal"
import InstaTileView from "./InstaTileView"

export default function InstaController() {
    const [openModal, setOpenModal] = useState(false);
    const [instaImg, setInstaImg] = useState("");
    const [instaDescription, setInstaDiscription] = useState("");
    const [product, setProduct] = useState("");

    const handleClose = () => {
        setOpenModal(false);
    };

    const handleClick = (name) => {
        let int = parseInt(name);
        let instaRecord = findInstaRecordById(int);
        let productFound = findById(instaRecord.products[0].id)
        setInstaImg(instaRecord.mainImg);
        setProduct(productFound);
        setInstaDiscription(instaRecord.description);
        setOpenModal(true);
    }

    const handleAddToCart = () => {

    }

    return (
        <div className="insta" >
            <InstaTileView handleClick={handleClick}/>
            <InstaModal openStatus={openModal} instaImg={instaImg} instaDescription={instaDescription}
                product={product} handleClose={handleClose}  handleAddToCart={handleAddToCart}
            />
        </div>)
}