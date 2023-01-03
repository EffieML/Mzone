import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import Carousel from '../AllProductsCarousel';
import { listAllProductsThunk } from '../../store/product';
import amazonPrimeLogo from '../../img/amazonPrimeLogo.png'
import './AllProductsPage.css'

function AllProductsPage() {
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.products.allProducts))
    // console.log("allProductsPage products: ", products)

    useEffect(() => {
        dispatch(listAllProductsThunk());
    }, [dispatch]);

    const avgRating = (reviewsArr) => {
        if (reviewsArr?.length) {
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
        <div className='all-products-container'>
            <Carousel className='all-products-carousel-container' />
            <div className='all-products-list-container'>
                <div className='all-products-list'>
                    {products?.map(product => (
                        <div key={product.id} className='product-card'>
                            <NavLink to={`/products/${product?.id}`}>
                                <div className='home-product-imgdiv'>
                                    <img className='home-product-img' src={product.images[0].url} alt='Preview img' />
                                </div>
                                {product.name.length > 76 && (
                                    <div className='home-product-name'>{product.name.slice(0, 76)} ...</div>
                                )}
                                {product.name.length <= 76 && (
                                    <div className='home-product-name'>{product.name}</div>
                                )}
                                <div className='home-product-review-container'>
                                    <StarRatings
                                        rating={avgRating(product.reviews)}
                                        starRatedColor='rgb(242, 201, 0)'
                                        starEmptyColor='rgb(206, 212, 212)'
                                        starDimension='16px'
                                        starSpacing='0px'
                                        numberOfStars={5}
                                        name='rating'
                                        className="home-product-review-star"
                                    />
                                    {/* <div>{avgRating(product.reviews)} avg, </div> */}
                                    <div className="home-product-review-count">{product.reviews?.length}</div>
                                </div>
                                <div className='home-product-price-container'>
                                    <div className='home-product-price-small'>$</div>
                                    <div className='home-product-price-big'>{product.price.toFixed(2).split(".")[0]}</div>
                                    <div className='home-product-price-small'>{product.price.toFixed(2).split(".")[1]}</div>
                                </div>
                                <div className='home-product-prime-container'>
                                    <img src={amazonPrimeLogo} className='home-product-prime' alt='prime logo' />
                                </div>
                            </NavLink>

                            {/* <div>add to cart</div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProductsPage;
