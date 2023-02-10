import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import Carousel from '../AllProductsCarousel';
import { listAllProductsThunk } from '../../store/product';
import LoadingPage from '../LoadingPage/index.js';
import amazonPrimeLogo from '../../img/amazonPrimeLogo.png';
// for product category -----------------------
import alexa1 from '../../img/homepage_carousel/alexa1.png';
import echoauto from '../../img/homepage_carousel/echo_auto.png';
import kidtablet from '../../img/homepage_carousel/kid_tablet.png';
import echoshow5kids from '../../img/homepage_carousel/echo_show5_kids.png';
import '../AllProductsCarousel/AllProductsCarousel.css'
import '../AllProductsPage/AllProductsPage.css'
import './ProductsCategoryPage.css'

function ProductsCategoryPage() {
    const category_map = {
        'mdevices': 'Mzone Devices',
        'home': 'Mzone Home',
        'computer': 'Mzone Computer',
        'pet': 'Mzone Pets',
    }
    const category_img = {
        'mdevices': 'https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/background.jpeg',
        'home': "https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/background_entrytable.jpg",
        'computer': "https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/monitor_background.jpg",
        'pet': "https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/background.jpg",
    }
    // const category_img = {
    //     'mdevices': alexa1,
    //     'home': echoauto,
    //     'computer': echoshow5kids,
    //     'pet': kidtablet,
    // }
    const dispatch = useDispatch();
    const { category } = useParams();
    const products = useSelector(state => Object.values(state.products.allProducts));
    const categoryProducts = products.filter(product => product?.category == category_map[category]);
    const [isLoaded, setIsLoaded] = useState(false);

    // for product Carousel -----------------------
    // const images = [alexa1, echoauto, echoshow5kids, kidtablet];
    // const images = ['https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/background.jpeg',
    //     "https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/background_entrytable.jpg",
    //     "https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/monitor_background.jpg",
    //     "https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/background.jpg"];
    // const links = ['/products/1', '/products', '/products', '/products']


    useEffect(() => {
        dispatch(listAllProductsThunk())
            .then(() => setIsLoaded(true));
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
        // <>
        //     {!isLoaded && <LoadingPage />}
        // </>
        <>
            {!isLoaded ? <LoadingPage /> : (<div>
                <div className='all-products-container'>
                    <div className="carousel2">
                        <img src={category_img[category]} alt={`Image`} />
                        {/* <img src={images[0]} alt={`Image`} /> */}
                    </div>
                    <div className='all-products-list-container'>
                        <div className='category-products-list'>
                            {categoryProducts?.map(product => (
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
            </div>)
            }
        </>
    )
}

export default ProductsCategoryPage;
