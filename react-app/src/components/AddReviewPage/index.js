import { useParams, NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { createReviewThunk } from '../../store/review';
import AddReviewImgUrl from './AddReviewImgUrl';
import './AddReviewPage.css';

function AddReviewPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productId } = useParams();
    const user = useSelector(state => state.session.user);

    const [stars, setStars] = useState('');
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [img, setImg] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [img5, setImg5] = useState('');
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

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
            <h1>Create Review</h1>
            <div>{productId}</div>
            <form onSubmit={addReviewSubmit}>
                <div className='add-review-form-container'>
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

                        <div>
                            <p >Please select your image file and click "Upload" to successfully add your image one by one. </p>
                            <p>Only .png, .jpg, .jpeg and .gif files can be accepted.</p>
                            <p>Minimum of ONE image is required. Maximum of FIVE images are allowed.</p>
                            <p>Add a photo</p>
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
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default AddReviewPage;
