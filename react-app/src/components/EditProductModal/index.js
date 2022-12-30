import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import EditProductForm from './EditProductForm';

function EditProductModal({ product, productId }) {
    const [showModal, setShowModal] = useState(false);

    const currUser = useSelector(state => state.session.user)
    if (!currUser) { return null }

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Product</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    < EditProductForm product={product} productId={productId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditProductModal;
