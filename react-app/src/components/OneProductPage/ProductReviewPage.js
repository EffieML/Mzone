import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getProductReviewsThunk } from '../../store/review';
import './ProductReviewPage.css';

function ProductReview({ productId }) {
    const dispatch = useDispatch();

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

    return (
        <div>
            <hr></hr>
            <div>product review page</div>
            {reviews.length && (
                <div>
                    <div>
                        <div>Customer reviews</div>
                        <div>{avgRating(reviews)} out of 5</div>
                        <div>{reviews.length} global ratings</div>
                    </div>
                    <div>
                        <hr></hr>
                        <div>Review this product</div>
                        <div>Share your thoughts with other customers</div>
                        <button>Write a customer review</button>
                    </div>
                    <div>
                        <div>Top reviews from the United States</div>
                        <div>
                            {reviews?.map(review => (
                                <div key={review.id}>
                                    <hr></hr>
                                    <div>user logo</div>
                                    <div>{review.user.firstname} {review.user.lastname}</div>
                                    <div>{review.stars}</div>
                                    <div>{review.title}</div>
                                    <div>Reviewed in the United States on {convertDate(review.createdAt)}</div>
                                    <div>? Verified Purchase</div>
                                    <div>{review.review}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}


        </div>

    )
}

export default ProductReview;
