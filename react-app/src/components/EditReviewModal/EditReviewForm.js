import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editReviewThunk } from "../../store/review";
// import { getReviewImagesThunk } from "../../store/reviewimg";
import UploadReviewImg from './UploadReviewImg';
import './EditReviewModal.css';

function EditReviewForm({ reviewE, reviewId, setShowModal }) {
    // console.log("form", reviewE)
    const dispatch = useDispatch();

    const [stars, setStars] = useState(reviewE?.stars);
    const [title, setTitle] = useState(reviewE?.title);
    const [review, setReview] = useState(reviewE?.review);
    const [errors, setErrors] = useState([]);

    const editReviewSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const updateReview = {
            stars,
            title,
            review,
        }

        const editedReview = await dispatch(editReviewThunk(updateReview, reviewId))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

        if (editedReview) {
            setErrors([]);
            setShowModal(false);
            // history.push(`/products/${reviewE.product.productId}`)
        }
    }

    // if (!reviewE) return null;

    return (
        <div className='review-form'>
            <h1>Update your reviews</h1>
            <div>
                <div>management review image</div>
                <UploadReviewImg reviewId={reviewId} />
                <hr></hr>
            </div>
            <form onSubmit={editReviewSubmit}>
                <div className='add-product-form-container'>
                    <ul className="form-errors">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div>
                        <label >
                            Overall rating
                        </label>
                        <input
                            type="number"
                            value={stars}
                            onChange={(e) => setStars(e.target.value)}
                            min="1"
                            max="5"
                            step='1'
                            required
                        />
                    </div>
                    <div>
                        <label >
                            Add a headline
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label >
                            Add a written review
                        </label>
                        <input
                            type="text"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <p >Please select your image file and click "Upload" to successfully add your image one by one. </p>
                        <p>Only .png, .jpg, .jpeg and .gif files can be accepted.</p>
                        <p>Minimum of ONE image is required. Maximum of FIVE images are allowed.</p>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                        <div onClick={() => setShowModal(false)}>
                            Cancel
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default EditReviewForm;
