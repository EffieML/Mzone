import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { listOneProductThunk } from '../../store/product';
import { addItemToCartThunk } from '../../store/cart';
import ProductReview from './ProductReviewPage';
import './OneProductPage.css'


function OneProductPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productId } = useParams();
    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.products.singleProduct);
    // console.log("OneProductsPage product: ", product);
    const reviews = product.reviews;


    const [errors, setErrors] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectImg, setSelectImg] = useState(0)

    useEffect(() => {
        dispatch(listOneProductThunk(productId))
            .then(() => setIsLoaded(true));
    }, [dispatch, productId]);

    if (!product) return null;


    const addToCart = async (e) => {
        e.preventDefault();
        if (user) {
            // product seller can't purchase the product
            if (user?.id === product?.sellerId) {
                await window.alert("You cannot purchase your own product.")
                history.push('/')
            } else {
                const cartItem = { quantity };
                const addedItem = await dispatch(addItemToCartThunk(product.id, cartItem))
                    .catch(async (res) => {
                        const data = await res.json();
                        if (data && data.errors) setErrors(data.errors);
                    })

                if (addedItem) {
                    setErrors([]);
                }
            }
        } else {
            await window.alert("Please login to purchase.")
            history.push('/login')
        }
    }

    const avgRating = (reviewsArr) => {
        if (reviewsArr.length) {
            let totalRate = 0;
            for (let i = 0; i < reviewsArr.length; i++) {
                let review = reviewsArr[i];
                totalRate += review.stars;
            }
            return Number((totalRate / reviewsArr.length).toFixed(1))
        }
        return 0;
    }


    return (
        <div className='one-prod-page-container'>
            {isLoaded && (
                <div className='one-prod-page'>
                    <div key={product.id}>
                        <div className='one-prod-page-top'>
                            <div className='one-prod-page-top-left'>
                                <div className='one-prod-page-top-left-small'>
                                    {product.images.length && (
                                        product.images.map(image => (
                                            <div key={image.id}
                                                className={`${selectImg === image.id && "img-list-active"}`}
                                                onMouseOver={() => setSelectImg(image.id)}>
                                                <img src={image.url} id='img-small40' />
                                                {/* <img key={image.id} src={image.url} onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} /> */}
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className='one-prod-page-top-left-big'>
                                    {product.images.length && (
                                        <div className={`main-img-active-container ${selectImg === 0 && "main-img-active"}`}                                            >
                                            <img src={product.images[0].url} id='img-big' />
                                            {/* <img key={image.id} src={image.url} onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} /> */}
                                        </div>)}
                                    {product.images.length && (
                                        product.images.map(image => (
                                            <div>
                                                <div key={image.id}
                                                    className={`main-img-active-container ${selectImg === image.id && "main-img-active"}`}                                            >
                                                    <img src={image.url} id='img-big' />
                                                    {/* <img key={image.id} src={image.url} onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} /> */}
                                                </div>

                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            {/* <div>
                            <img className='home-product-img' src={product.images[0].url} alt='Preview image' />
                        </div> */}
                            <div className='one-prod-page-top-middle'>
                                <div className='one-prod-top-middle-name'>{product.name}</div>
                                <div className='one-prod-top-middle-brand'>Brand: {product.brand}</div>
                                <div className='one-prod-top-middle-review'>
                                    <StarRatings
                                        rating={avgRating(product.reviews)}
                                        starRatedColor='rgb(242, 201, 0)'
                                        starEmptyColor='rgb(206, 212, 212)'
                                        starDimension='16px'
                                        starSpacing='0px'
                                        numberOfStars={5}
                                        name='rating'
                                        className="one-prod-top-middle-review-star"
                                    />
                                    {product.reviews.length !== 0 && (
                                        <div className="one-prod-top-middle-review-count">{product.reviews.length} ratings</div>
                                    )}
                                    {product.reviews.length === 0 && (
                                        <div className="one-prod-top-middle-review-count">{product.reviews.length} rating</div>
                                    )}
                                </div>
                                <div className='one-prod-top-middle-line'></div>
                                <div>in {product.category}</div>
                                <div>{product.price}</div>

                                <div>{product.about}</div>
                            </div>
                            <div className='one-prod-page-top-right'>
                                <div>{product.price}</div>
                                <div>free deliver</div>
                                <div>in stock</div>
                                {/* <div>{product.quantity}</div> */}
                                <button onClick={addToCart}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div>
                            <div>product info table</div>
                            <div>{product.detail}</div>
                            <div>{product.dimension}</div>
                            <div>{product.brand}</div>
                            <div>{product.weight}</div>
                        </div>


                        <div> <ProductReview reviews={reviews} productId={product.id} /></div>


                    </div>
                </div>
            )}

        </div>
    )
}

export default OneProductPage;
