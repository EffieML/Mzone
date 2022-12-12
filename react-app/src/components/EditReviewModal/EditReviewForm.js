import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editReviewThunk } from "../../store/review";
import './EditReviewModal.css';

function EditReviewForm({ reviewE, reviewId, setShowModal }) {
    console.log("form", reviewE)
    const dispatch = useDispatch();

    let images;
    if (reviewE.images.length > 0) {
        images = reviewE.images;
    }
    console.log('review img', images);

    const [stars, setStars] = useState(reviewE?.stars);
    const [title, setTitle] = useState(reviewE?.title);
    const [review, setReview] = useState(reviewE?.review);
    const [img, setImg] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [img5, setImg5] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (images) {
            if (images.length >= 1) {
                setImg(images[0].url)
            } else if (images.length >= 2) {
                setImg(images[1].url)
            } else if (images.length >= 3) {
                setImg(images[2].url)
            } else if (images.length >= 4) {
                setImg(images[3].url)
            }
            else if (images.length >= 5) {
                setImg(images[4].url)
            }
        } else {
            setImg("")
        }
    }, [dispatch, reviewId])

    const editReviewSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const updateReview = {
            stars,
            title,
            review,
            img,
            img2,
            img3,
            img4,
            img5
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
                        {img && (<div>
                            <label >
                                Product Image
                            </label>
                            <input
                                type="text"
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </div>)}
                        {img2 && (<div>
                            <label >
                                Product Image2
                            </label>
                            <input
                                type="text"
                                value={img2}
                                onChange={(e) => setImg2(e.target.value)}
                            />
                        </div>)}
                        {img3 && (<div>
                            <label >
                                Product Image3
                            </label>
                            <input
                                type="text"
                                value={img3}
                                onChange={(e) => setImg3(e.target.value)}
                            />
                        </div>)}
                        {img4 && (<div>
                            <label >
                                Product Image4
                            </label>
                            <input
                                type="text"
                                value={img4}
                                onChange={(e) => setImg4(e.target.value)}
                            />
                        </div>)}
                        {img5 && (<div>
                            <label >
                                Product Image5
                            </label>
                            <input
                                type="text"
                                value={img5}
                                onChange={(e) => setImg5(e.target.value)}
                            />
                        </div>)}
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
