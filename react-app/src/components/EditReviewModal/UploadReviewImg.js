import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from "react-router-dom";
import { getReviewImagesThunk, deleteReviewImageThunk } from '../../store/reviewimg';
import '../EditProductModal/EditProductModal.css';

const UploadReviewImg = ({ reviewId }) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [urlValidationErrors, setUrlValidationErrors] = useState([]);
    const [showImagesErrors, setShowImagesErrors] = useState(false);

    const images = useSelector(state => Object.values(state?.reviewimgs.reviewAllimgs));
    // console.log("images----------", images)
    useEffect(() => {
        dispatch(getReviewImagesThunk(reviewId))
    }, [dispatch, reviewId, image]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setUrlValidationErrors([]);

        if (images.length >= 5) {
            setShowImagesErrors(true);
            const errors = [...urlValidationErrors];
            errors.push('Maximum 5 images allowed.')
            setUrlValidationErrors(errors);
            // console.log("urlerrors==============", urlValidationErrors)
        } else {
            setShowImagesErrors(false);
            const formData = new FormData();
            formData.append("image", image);
            // console.log("formData image------------", image)

            // aws uploads can be a bit slow—displaying
            // some sort of loading message is a good idea
            setImageLoading(true);

            const res = await fetch(`/api/reviews/${reviewId}/addReviewImg`, {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                const data = await res.json();
                setImageLoading(false);
                setImage(null);
            }
            else {
                setImageLoading(false);
                // a real app would probably use more advanced
                // error handling
                // console.log("error");
                const data = await res.json();
                setUrlValidationErrors([data.errors])
            }
        }
    }
    const updateImage = (e) => {
        const file = e.target.files[0];
        // console.log("updateImage image", file)
        setImage(file);
        // console.log("updateimage setimage", image)
    }

    const handleReviewimgDelete = async (reviewimgId) => {
        if (window.confirm('Do you want to delete this image?')) {
            await dispatch(deleteReviewImageThunk(reviewimgId))
            setUrlValidationErrors([]);
        }
    }

    return (
        <div>
            <div className="edit-product-from-errors-container">
                {showImagesErrors && urlValidationErrors.map((error, idx) => (
                    <li key={idx} className='form-errors'>{error}</li>
                ))}
            </div>
            <div className="edit-product-from-img-container">
                {images && images.map((image) =>
                    <div key={image.id} className="edit-product-from-img-container-inner">
                        <img alt='review-img' className="edit-product-img-small" src={image.url} />
                        <button onClick={() => handleReviewimgDelete(image.id)}>x</button>
                    </div>
                )}
            </div>
            <div className="edit-product-from-upload">
                <input
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                    className="upload-button"
                />
                <button onClick={handleSubmit}>Upload Image</button>
                {(imageLoading) && <p>Loading...</p>}
            </div>
        </div>
    )
}

export default UploadReviewImg;
