

import React from 'react';
import Modal from '@material-ui/core/Modal';

export default function ReviewModal({ openStatus, handleClose, ...props }) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                open={openStatus}
                onClose={handleClose}
            >
                {props.children}
            </Modal>
        </div>
    );
}




