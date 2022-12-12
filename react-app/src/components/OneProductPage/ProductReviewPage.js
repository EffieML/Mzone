import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getProductReviewsThunk } from '../../store/review';
import EditReviewModal from '../EditReviewModal';
import EditReviewForm2 from '../EditReview2';
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

    return (
        <div>
            <hr></hr>
            <div>product review page</div>
            <div>
                <hr></hr>
                <div>Review this product</div>
                <div>Share your thoughts with other customers</div>
                <NavLink to={`/products/${productId}/addreview`}>
                    <button>Write a customer review</button>
                </NavLink>
                <hr></hr>
            </div>
            {reviews.length && (
                <div>
                    <div>
                        <div>Customer reviews</div>
                        <div>{avgRating(reviews)} out of 5</div>
                        <div>{reviews.length} global ratings</div>
                    </div>

                    <div>
                        <div>Top reviews from the United States</div>
                        <div>
                            {reviews?.map(reviewE => (
                                <div key={reviewE.id}>
                                    <hr></hr>
                                    <div>user logo</div>
                                    <div>{reviewE.user.firstname} {reviewE.user.lastname}</div>
                                    {user.id == reviewE.user.id && (
                                        <div>
                                            <div>
                                                <EditReviewModal reviewE={reviewE} reviewId={reviewE.id} />
                                            </div>
                                            {/* <div>
                                                <EditReviewForm2 reviewE={reviewE} reviewId={reviewE.id} />
                                            </div> */}
                                            <div>delete</div>
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
                </div>
            )}


        </div>

    )
}

export default ProductReview;
