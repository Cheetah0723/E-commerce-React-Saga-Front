import {useState} from "react"

const FooterSignUpController = () => {
    const [openModal, setOpenModal] = useState(false);

    const openSignUpModal = () => {
        setOpenModal(true);
    }

    const closeSignUpModal = () => {
        setOpenModal(false);
    }

    return { openModal, openSignUpModal, closeSignUpModal }
}

export default FooterSignUpController 