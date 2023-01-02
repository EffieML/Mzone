import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { listOneProductThunk } from '../../store/product';
import { addItemToCartThunk } from '../../store/cart';
import ProductReview from './ProductReviewPage';
import ptpin from '../../img/ptpin.png';
import lock from '../../img/lock.png';
import './OneProductPage.css';


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
                                                <img src={image.url} id='img-small40' alt='product img' />
                                                {/* <img key={image.id} src={image.url} onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} /> */}
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className='one-prod-page-top-left-big'>
                                    {product.images.length && (
                                        <div className={`main-img-active-container ${selectImg === 0 && "main-img-active"}`}                                            >
                                            <img src={product.images[0].url} id='img-big' alt='product img' />
                                            {/* <img key={image.id} src={image.url} onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} /> */}
                                        </div>)}
                                    {product.images.length && (
                                        product.images.map(image => (
                                            <div key={image.id}>
                                                <div
                                                    className={`main-img-active-container ${selectImg === image.id && "main-img-active"}`}                                            >
                                                    <img src={image.url} id='img-big' alt='product img' />
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
                                        starRatedColor='rgb(255, 164, 28)'
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

                                <div className='one-prod-middle-price-container'>
                                    <div className='one-prod-middle-price-small'>$</div>
                                    <div className='one-prod-middle-price-big'>{product.price.toFixed(2).split(".")[0]}</div>
                                    <div className='one-prod-middle-price-small'>{product.price.toFixed(2).split(".")[1]}</div>
                                </div>
                                <div className='one-prod-top-middle-brand'>FREE Returns</div>
                                {product.quantity > 0 && (
                                    <div className='one-prod-top-middle-instock'>In Stock.</div>
                                )}
                                {product.quantity === 0 && (
                                    <div className='one-prod-top-middle-outstock'>Temporarily out of stock.</div>
                                )}
                                <div className='one-prod-top-middle-shipfrom'>Ships from and sold by {product.user.username}.</div>

                                <div className='one-prod-top-middle-line'></div>
                                <div className='one-prod-top-middle-about-container'>
                                    <li className='one-prod-top-middle-about'>{product.about}</li>
                                </div>
                            </div>

                            <div className='one-prod-page-top-right-container'>
                                <div className='one-prod-rigth-price-container'>
                                    <div className='one-prod-middle-price-small'>$</div>
                                    <div className='one-prod-middle-price-big'>{product.price.toFixed(2).split(".")[0]}</div>
                                    <div className='one-prod-middle-price-small'>{product.price.toFixed(2).split(".")[1]}</div>
                                </div>
                                <div className='one-prod-top-right-freedel'>FREE Returns.</div>
                                <div className='one-prod-top-right-freedel'>FREE delivery.</div>
                                <div className='one-prod-top-right-deliver'>
                                    <img src={ptpin} className='one-prod-top-right-deliverlogo' alt='location pin' />
                                    {user && user.addresses.length && (
                                        <div className='one-prod-top-right-deliverloc'>Deliver to {user.username} - {user.addresses[0].city} {user.addresses[0].zip}</div>
                                    )}
                                    {user && !user.addresses.length && (
                                        <div className='one-prod-top-right-deliverloc'>Deliver to {user.username} </div>
                                    )}
                                    {!user && (
                                        <div className='one-prod-top-right-deliverloc'>Delivery location.</div>
                                    )}
                                </div>
                                {product.quantity > 0 && (
                                    <div className='one-prod-top-middle-instock'>In Stock.</div>
                                )}
                                {product.quantity === 0 && (
                                    <div className='one-prod-top-middle-outstock'>Temporarily out of stock.</div>
                                )}
                                {/* <div>{product.quantity}</div> */}
                                <button onClick={addToCart} className='one-prod-top-right-cartbutton'>
                                    Add to Cart
                                </button>
                                <div className='one-prod-top-right-lockmessage-c'>
                                    <img src={lock} id='lock' alt='lock' />
                                    <div className='one-prod-top-right-lockmessage'>Secure transaction</div>
                                </div>
                                <div className='one-prod-top-right-ship-c'>
                                    <div className='one-prod-top-right-ship-note'>Ships from</div>
                                    <div className='one-prod-top-right-ship-seller'> {product.user.username}</div>
                                </div>
                                <div className='one-prod-top-right-sold-c'>
                                    <div className='one-prod-top-right-ship-note'>Sold by</div>
                                    <div className='one-prod-top-right-ship-seller'> {product.user.username}</div>
                                </div>
                            </div>
                        </div>
                        <div className='one-prod-top-line'></div>
                        <div className='one-prod-middle-proddes-container'>
                            <h2 className='one-prod-middle-title'>Product Description</h2>
                            <div className='one-prod-middle-title2'>Product Description</div>
                            <div className='one-prod-middle-content'>{product.detail}</div>
                            <div className='one-prod-top-line'></div>
                            <h2 className='one-prod-middle-title'>Product information</h2>
                            <table>
                                <tr>
                                    <th className='one-prod-middle-th'>Brand</th>
                                    <td className='one-prod-middle-td'>{product.brand}</td>
                                </tr>
                                <tr>
                                    <th className='one-prod-middle-th'>Product Dimensions</th>
                                    <td className='one-prod-middle-td'>{product.dimension}</td>
                                </tr>
                                <tr>
                                    <th className='one-prod-middle-th'>Item weight</th>
                                    <td className='one-prod-middle-td'>{product.weight}</td>
                                </tr>
                                <tr>
                                    <th className='one-prod-middle-th'>Domestic Shipping</th>
                                    <td className='one-prod-middle-td'>Item can be shipped within U.S.</td>
                                </tr>
                                <tr>
                                    <th className='one-prod-middle-th'>Customer Reviews</th>
                                    <td className='one-prod-middle-td'>
                                        <div className='one-prod-middle-td-star1'>
                                            <StarRatings
                                                rating={avgRating(product.reviews)}
                                                starRatedColor='rgb(255, 164, 28)'
                                                starEmptyColor='rgb(206, 212, 212)'
                                                starDimension='16px'
                                                starSpacing='0px'
                                                numberOfStars={5}
                                                name='rating'
                                                className="one-prod-top-middle-review-star"
                                            />
                                            {product.reviews.length !== 0 && (
                                                <div className="one-prod-middle-td-star1-count">{product.reviews.length} ratings</div>
                                            )}
                                            {product.reviews.length === 0 && (
                                                <div className="one-prod-middle-td-star1-count">{product.reviews.length} rating</div>
                                            )}
                                        </div>
                                        <div className='one-prod-middle-td-star2'>{avgRating(product.reviews)} out of 5 stars</div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className='one-prod-top-line'></div>

                        <div> <ProductReview reviews={reviews} productId={product.id} /></div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default OneProductPage;
