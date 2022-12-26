import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { getProductReviewsThunk, deleteReviewThunk } from '../../store/review';
import EditReviewModal from '../EditReviewModal';
import './ProductReviewPage.css';

function ProductReview({ productId }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews.allReviews));

    useEffect(() => {
        dispatch(getProductReviewsThunk(productId))
    }, [dispatch, productId]);

    const avgRating = (reviewsArr) => {
        let totalRate = 0;
        for (let i = 0; i < reviewsArr.length; i++) {
            let review = reviewsArr[i];
            totalRate += review.stars;
        }
        return Number((totalRate / reviewsArr.length).toFixed(1))
    }

    const convertDate = (orderTimeGMT) => {
        const date = new Date(orderTimeGMT);
        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.getDate();
        const yr = date.getFullYear();
        return `${month} ${day}, ${yr}`;
    }

    const handleReviewDelete = async (reviewId) => {
        if (window.confirm('Do you want to delete this review?')) {
            await dispatch(deleteReviewThunk(reviewId))
        }
    }

    return (
        <div className='one-prod-bttm-container'>
            <div className='one-prod-bttm-left-container'>
                <div className='one-prod-bttm-left1'>
                    <h2 id='title'>Customer reviews</h2>
                    <div className='one-prod-middle-td-star1'>
                        <StarRatings
                            rating={avgRating(reviews)}
                            starRatedColor='rgb(242, 201, 0)'
                            starEmptyColor='rgb(206, 212, 212)'
                            starDimension='16px'
                            starSpacing='0px'
                            numberOfStars={5}
                            name='rating'
                            className="one-prod-top-middle-review-star"
                        />
                    </div>
                    <div>{avgRating(reviews)} out of 5</div>
                    <div>{reviews.length} global ratings</div>
                </div>
                <div className='one-prod-bttm-left2'>
                    <hr></hr>
                    <div>Review this product</div>
                    <div>Share your thoughts with other customers</div>
                    <NavLink to={`/products/${productId}/addreview`}>
                        <button>Write a customer review</button>
                    </NavLink>
                    <hr></hr>
                </div>

            </div>
            {reviews.length && (
                <div className='one-prod-bttm-right-container'>
                    <div>Top reviews from the United States</div>
                    <div>
                        {reviews?.map(reviewE => (
                            <div key={reviewE.id}>
                                <hr></hr>
                                <div>user logo</div>
                                <div>{reviewE?.user.firstname} {reviewE?.user.lastname}</div>
                                {user?.id == reviewE?.user.id && (
                                    <div>
                                        <div>
                                            <EditReviewModal reviewE={reviewE} reviewId={reviewE.id} />
                                        </div>
                                        <button onClick={() => handleReviewDelete(reviewE.id)}> delete review</button>
                                    </div>
                                )}
                                {/* <button onClick={() => handleDelete(spot.id)}> Delete Listing </button> */}
                                <div>{reviewE.stars}</div>
                                <div>{reviewE.title}</div>
                                <div>Reviewed in the United States on {convertDate(reviewE.createdAt)}</div>
                                <div>??? Verified Purchase</div>
                                <div>{reviewE.review}</div>
                            </div>
                        ))}
                    </div>

                </div>
            )}


        </div>

    )
}

export default ProductReview;
