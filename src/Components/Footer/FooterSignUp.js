import React, { useState, Fragment } from 'react';
import { Button } from '@material-ui/core';
import SignUpModal from './SignUpModal';

const useFooterSignUp = () => {
    const [openModal, setOpenModal] = useState(false);

    const openSignUpModal = () => {
        setOpenModal(true);
    }

    const closeSignUpModal = () => {
        setOpenModal(false);
    }

    return { openModal, openSignUpModal, closeSignUpModal }
}

const FooterSignUp = () => {
    const { openModal, openSignUpModal, closeSignUpModal } = useFooterSignUp()

    return (
        <Fragment>
            <div style={{ height: "110px", width: "100%", color: "white", backgroundColor: "black", marginTop: "40px", marginBottom: "40px", textAlign: "center", verticalAlign: "center" }}>
                <p style={{ paddingTop: "40px", fontFamily: "'Montserrat', sans-serif", fontSize: "16px" }}>
                    Sign up to our newsletter for the latest news and exclusive deals
        <Button onClick={openSignUpModal} style={{
                        marginLeft: "5%", borderRadius: "25px", width: "100px", alignItems: "center",
                        color: "black", backgroundColor: "white", fontFamily: "'Montserrat', sans-serif",
                    }}>Signup</Button></p>
            </div>
            <SignUpModal openStatus={openModal} handleClose={closeSignUpModal} />
        </Fragment>
    );
}

export default FooterSignUp;