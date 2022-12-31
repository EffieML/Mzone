import { useParams, NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { createReviewThunk } from '../../store/review';
import { listOneProductThunk } from '../../store/product';
import AddReviewImgUrl from './AddReviewImgUrl';
import userimg from '../../img/user.jpeg';
import './AddReviewPage.css';
import '../AddProductPage/AddProductPage.css';
import '../AllOrdersPage/AllOrdersPage.css';

function AddReviewPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productId } = useParams();
    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.products.singleProduct);

    const [stars, setStars] = useState(0);
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [img, setImg] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [img5, setImg5] = useState('');
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(listOneProductThunk(productId))
            .then(() => setIsLoaded(true));
    }, [dispatch, productId]);

    if (!product) return null;

    const addReviewSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            stars,
            title,
            review,
            img,
            img2,
            img3,
            img4,
            img5
        }

        const addedReview = await dispatch(createReviewThunk(newReview, productId))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

        if (addedReview) {
            setErrors([]);
            // setShowModal(false);
            history.push(`/products/${productId}`)
        }
    }


    return (
        <div>
            {isLoaded && (
                <div>
                    <div className='add-review-page-header'>
                        <div className='add-review-page-header-inner'>
                            <img src={userimg} id='userrimg' />
                            <div>{user.username}</div>
                        </div>
                    </div>
                    <div className='add-review-page-container'>
                        <div className='add-review-page-top-sec'>
                            <h1 className='add-review-page-title'>Create Review</h1>
                            <div className='add-review-page-top-sec2'>
                                <img src={product?.images[0].url} />
                                <div className='add-review-page-top-sec2-title'>{product.name}</div>
                            </div>
                        </div>
                        <div className='add-review-page-line'></div>
                        <form onSubmit={addReviewSubmit}>
                            <div className='add-review-form-container'>
                                <ul className="form-errors">
                                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                </ul>
                                <div className='add-review-page-rating-container'>
                                    <label className='add-review-page-rating'>
                                        Overall rating
                                    </label>
                                    {/* <input
                                             type="number"
                                             value={stars}
                                             onChange={(e) => setStars(e.target.value)}
                                             min="1"
                                             max="5"
                                             step='1'
                                             required
                                         /> */}
                                    <StarRatings
                                        rating={stars}
                                        starRatedColor='rgb(255, 164, 28)'
                                        starEmptyColor='rgb(206, 212, 212)'
                                        numberOfStars={5}
                                        name='rating'
                                        changeRating={setStars}
                                        starDimension="32px"
                                        starSpacing="0px"
                                    />
                                </div>
                                <div className='add-review-page-line'></div>
                                <div className='add-review-page-headline-container'>
                                    <label className='add-review-page-headline'>
                                        Add a headline
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="What's most important to know?"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        className='add-review-page-headline-input'
                                    />
                                </div>
                                <div className='add-review-page-line'></div>
                                <div className='add-review-page-photo-container'>

                                    <label className='add-review-page-photo'>
                                        Add a photo
                                    </label>
                                    <div className='add-review-page-photo-content'>
                                        <p>Shoppers find images more helpful than text alone. </p>
                                        <p> - Images must be .png, .jpg, .jpeg and .gif format.</p>
                                        <p> - Minimum one image is required.</p>
                                        <p> - Maximum five images are allowed.</p>
                                    </div>
                                    <AddReviewImgUrl images={images} setImages={setImages} />
                                    {/* <div>
                                         <label >
                                             Product Image
                                         </label>
                                         <input
                                             type="text"
                                             value={img}
                                             onChange={(e) => setImg(e.target.value)}
                                         />
                                     </div>
                                     <div>
                                         <label >
                                             Product Image2
                                         </label>
                                         <input
                                             type="text"
                                             value={img2}
                                             onChange={(e) => setImg2(e.target.value)}
                                         />
                                     </div>
                                     <div>
                                         <label >
                                             Product Image3
                                         </label>
                                         <input
                                             type="text"
                                             value={img3}
                                             onChange={(e) => setImg3(e.target.value)}
                                         />
                                     </div>
                                     <div>
                                         <label >
                                             Product Image4
                                         </label>
                                         <input
                                             type="text"
                                             value={img4}
                                             onChange={(e) => setImg4(e.target.value)}
                                         />
                                     </div>
                                     <div>
                                         <label >
                                             Product Image5
                                         </label>
                                         <input
                                             type="text"
                                             value={img5}
                                             onChange={(e) => setImg5(e.target.value)}
                                         />
                                     </div> */}
                                </div>
                                <div className='add-review-page-line'></div>
                                <div className='add-review-page-review-container'>
                                    <label className='add-review-page-headline'>
                                        Add a written review
                                    </label>
                                    <textarea
                                        type="text"
                                        placeholder="What did you like or dislike? What did you use this porduct for?"
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        required
                                        className='add-review-page-review-input'
                                    />
                                </div>
                                <div className='add-review-page-line'></div>
                                <div className='add-review-page-submit-container'>
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>

    )

}

export default AddReviewPage;
