import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { listAllProductsThunk } from '../../store/product';
import LoadingPage from '../LoadingPage/index.js';
import amazonPrimeLogo from '../../img/amazonPrimeLogo.png';

import './ProductsBySearch.css'

function ProductsBySearch() {

    const dispatch = useDispatch();
    const { searchTerm } = useParams();
    console.log("searchTerm", searchTerm);
    const [searchResult, setSearchResult] = useState([]);
    const products = useSelector(state => Object.values(state.products?.allProducts));
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(listAllProductsThunk())
            .then(() => setIsLoaded(true));
    }, [dispatch, searchTerm]);

    useEffect(() => {
        if (searchTerm.length) {
            setSearchResult(filterProducts(searchTerm));
            console.log("searchResult", searchResult)
        } else {
            setSearchResult([]);
        }
    }, [dispatch, searchTerm]);

    const filterProducts = (keyword) => {
        const st = [];
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let name = product.name;
            let category = product.category;
            if (name.toLowerCase().includes(keyword.toLowerCase()) ||
                category.toLowerCase().includes(keyword.toLowerCase())) {
                st.push(product)
            }
        }
        return st;
    }


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
        // <>
        //     {!isLoaded && <LoadingPage />}
        // </>
        <>
            {(isLoaded && searchResult) ? (<div>
                <div className='all-sproducts-container'>
                    <div className='all-sproducts-list-container'>
                        <div className='all-sproducts-list'>
                            {searchResult?.map(product => (
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
            </div>) : <LoadingPage />
            }
        </>
    )
}

export default ProductsBySearch;
