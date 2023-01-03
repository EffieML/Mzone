import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { useDispatch } from "react-redux";
import { editReviewThunk } from "../../store/review";
import UploadReviewImg from './UploadReviewImg';
import './EditReviewModal.css';
import '../EditProductModal/EditProductModal.css'

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
        <div className='edit-review-form-container'>
            <div className='edit-review-from-title'>
                <div className='edit-product-from-title-inner'>
                    Update your reviews
                </div>
                <div onClick={() => setShowModal(false)} className='edit-product-from-title-inner'>
                    <button>x</button>
                </div>
            </div>

            <div className='edit-product-from-img-sec'>
                <label className='add-product-page-name1'>
                    Update review image
                </label>
                <div className='add-product-page-img-info'>
                    <p>Shoppers find images more helpful than text alone. </p>
                    <p>- Images must be .png, .jpg, .jpeg and .gif format.</p>
                    <p>- Maximum five images are allowed.</p>
                </div>
                <UploadReviewImg reviewId={reviewId} />
            </div>
            <div className='edit-product-from-line'></div>
            {/*
            <div>
                <div>management review image</div>
                <UploadReviewImg reviewId={reviewId} />
                <hr></hr>
            </div> */}
            <div className='edit-product-form-container'>
                <form onSubmit={editReviewSubmit}>
                    {/* <ul className="form-errors">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul> */}
                    <ul className="form-errors">
                        {errors.map((error, idx) => (
                            <li className='edit-product-form-errors-container'>
                                <div className='edit-product-form-errors1'>!</div>
                                <div key={idx}>{error}</div>
                            </li>
                        ))}
                    </ul>

                    <div className='edit-product-form-name-container'>
                        <label className='edit-product-form-name1'>
                            Overall rating
                        </label>
                        <StarRatings
                            rating={stars}
                            starRatedColor='rgb(255, 164, 28)'
                            starEmptyColor='rgb(206, 212, 212)'
                            numberOfStars={5}
                            name='rating'
                            changeRating={setStars}
                            starDimension="24px"
                            starSpacing="0px"
                        />
                        {/* <input
                            type="number"
                            value={stars}
                            onChange={(e) => setStars(e.target.value)}
                            min="1"
                            max="5"
                            step='1'
                            required
                        /> */}
                    </div>
                    <div className='edit-product-form-name-container'>
                        <label className='edit-product-form-name1'>
                            Add a headline
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className='edit-product-form-name-container'>
                        <label className='edit-product-form-name1'>
                            Add a written review
                        </label>
                        <textarea
                            type="text"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                            className='edit-review-page-review-input'
                        />
                    </div>
                    <div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    )

}

export default EditReviewForm;
