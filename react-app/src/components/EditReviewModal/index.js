import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import EditReviewForm from './EditReviewForm';

function EditReviewModal({ reviewE, reviewId }) {
    const [showModal, setShowModal] = useState(false);
    console.log('modal', reviewE);
    console.log('modal', reviewId)

    const currUser = useSelector(state => state.session.user)
    if (!currUser) { return null }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    < EditReviewForm reviewE={reviewE} reviewId={reviewId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditReviewModal;
