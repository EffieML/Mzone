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
    const reviews = useSelector(state => Object.values(state.reviews?.allReviews));

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

    let star1 = 0;
    let star2 = 0;
    let star3 = 0;
    let star4 = 0;
    let star5 = 0;
    // console.log("length---------------", reviews[0].stars)
    if (reviews.length >= 1) {
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].stars === 1) {
                star1 += 1;
            } else if (reviews[i].stars === 2) {
                star2 += 1;
            } else if (reviews[i].stars === 3) {
                star3 += 1;
            } else if (reviews[i].stars === 4) {
                star4 += 1;
            } else if (reviews[i].stars === 5) {
                star5 += 1;
            }
        }
    }
    // console.log("star5---------------", star5)


    return (
        <div className='one-prod-bttm-container'>
            <div className='one-prod-bttm-left-container'>
                <div className='one-prod-bttm-left1'>
                    <h2 id='title'>Customer reviews</h2>
                    {reviews.length !== 0 && (
                        <div>
                            <div className='one-prod-bttm-left1-r1'>
                                <div className='one-prod-middle-td-star1'>
                                    <StarRatings
                                        rating={avgRating(reviews)}
                                        starRatedColor='rgb(255, 164, 28)'
                                        starEmptyColor='rgb(206, 212, 212)'
                                        starDimension='22px'
                                        starSpacing='0px'
                                        numberOfStars={5}
                                        name='rating'
                                        className="one-prod-top-middle-review-star"
                                    />
                                </div>
                                <div className='one-prod-bttm-left1-r1w'>{avgRating(reviews)} out of 5</div>
                            </div>
                            <div className='one-prod-bttm-left1-r2'>{reviews.length} global ratings</div>
                        </div>
                    )}
                    {reviews.length === 0 && (
                        <div>
                            <div className='one-prod-bttm-left1-r1'>
                                <div className='one-prod-middle-td-star1'>
                                    <StarRatings
                                        rating={0}
                                        starRatedColor='rgb(255, 164, 28)'
                                        starEmptyColor='rgb(206, 212, 212)'
                                        starDimension='22px'
                                        starSpacing='0px'
                                        numberOfStars={5}
                                        name='rating'
                                        className="one-prod-top-middle-review-star"
                                    />
                                </div>
                                <div className='one-prod-bttm-left1-r1w'>0 out of 5</div>
                            </div>
                            <div className='one-prod-bttm-left1-r2'>0 global ratings</div>
                        </div>
                    )}
                    <table className='one-prod-bttm-left1-table'>
                        <tbody>
                            <tr >
                                <th className='one-prod-bttm-left1-tablec1'>5 star</th>
                                <td style={{ textAlign: "left" }}>
                                    <div className='one-prod-bttm-left1-tablec2'>
                                        <div className="one-prod-bttm-left1-tablec2-filled"
                                            style={{
                                                width: `${reviews.length && Math.floor((star5 / reviews.length) * 100)}%`,
                                                height: '20px',
                                                backgroundColor: 'rgb(255,164,28)',
                                                borderTopRightRadius: '0px',
                                                borderBottomRightRadius: '0px',
                                            }}
                                        ></div>
                                    </div>
                                </td>
                                <td className='one-prod-bttm-left1-tablec3'>{reviews.length && Math.floor((star5 / reviews.length) * 100)}%</td>
                            </tr>
                            <tr >
                                <th className='one-prod-bttm-left1-tablec1'>4 star</th>
                                <td style={{ textAlign: "left" }}>
                                    <div className='one-prod-bttm-left1-tablec2'>
                                        <div className="one-prod-bttm-left1-tablec2-filled"
                                            style={{
                                                width: `${reviews.length && Math.floor((star4 / reviews.length) * 100)}%`,
                                                height: '20px',
                                                backgroundColor: 'rgb(255,164,28)',
                                                borderTopRightRadius: '0px',
                                                borderBottomRightRadius: '0px',
                                            }}
                                        ></div>
                                    </div>
                                </td>
                                <td className='one-prod-bttm-left1-tablec3'>{reviews.length && Math.floor((star4 / reviews.length) * 100)}%</td>
                            </tr>
                            <tr >
                                <th className='one-prod-bttm-left1-tablec1'>3 star</th>
                                <td style={{ textAlign: "left" }}>
                                    <div className='one-prod-bttm-left1-tablec2'>
                                        <div className="one-prod-bttm-left1-tablec2-filled"
                                            style={{
                                                width: `${reviews.length && Math.floor((star3 / reviews.length) * 100)}%`,
                                                height: '20px',
                                                backgroundColor: 'rgb(255,164,28)',
                                                borderTopRightRadius: '0px',
                                                borderBottomRightRadius: '0px',
                                            }}
                                        ></div>
                                    </div>
                                </td>
                                <td className='one-prod-bttm-left1-tablec3'>{reviews.length && Math.floor((star3 / reviews.length) * 100)}%</td>
                            </tr>
                            <tr >
                                <th className='one-prod-bttm-left1-tablec1'>2 star</th>
                                <td style={{ textAlign: "left" }}>
                                    <div className='one-prod-bttm-left1-tablec2'>
                                        <div className="one-prod-bttm-left1-tablec2-filled"
                                            style={{
                                                width: `${reviews.length && Math.floor((star2 / reviews.length) * 100)}%`,
                                                height: '20px',
                                                backgroundColor: 'rgb(255,164,28)',
                                                borderTopRightRadius: '0px',
                                                borderBottomRightRadius: '0px',
                                            }}
                                        ></div>
                                    </div>
                                </td>
                                <td className='one-prod-bttm-left1-tablec3'>{reviews.length && Math.floor((star2 / reviews.length) * 100)}%</td>
                            </tr>
                            <tr >
                                <th className='one-prod-bttm-left1-tablec1'>1 star</th>
                                <td style={{ textAlign: "left" }}>
                                    <div className='one-prod-bttm-left1-tablec2'>
                                        <div className="one-prod-bttm-left1-tablec2-filled"
                                            style={{
                                                width: `${reviews.length && Math.floor((star1 / reviews.length) * 100)}%`,
                                                height: '20px',
                                                backgroundColor: 'rgb(255,164,28)',
                                                borderTopRightRadius: '0px',
                                                borderBottomRightRadius: '0px',
                                            }}
                                        ></div>
                                    </div>
                                </td>
                                <td className='one-prod-bttm-left1-tablec3'>{reviews.length && Math.floor((star1 / reviews.length) * 100)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='one-prod-top-line'></div>
                <div className='one-prod-bttm-left2'>
                    <div className='one-prod-bttm-left2-title'>Review this product</div>
                    <div className='one-prod-bttm-left2-p'>Share your thoughts with other customers</div>
                    <NavLink to={`/products/${productId}/addreview`}>
                        <button className='one-prod-bttm-left2-button'>Write a customer review</button>
                    </NavLink>
                </div>
                <div className='one-prod-top-line'></div>
            </div>
            {
                reviews.length && (
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
                )
            }


        </div >

    )
}

export default ProductReview;
