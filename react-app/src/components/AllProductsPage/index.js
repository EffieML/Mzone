import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
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
        <div className='all-products-container'>
            <h1 className='title'>background image</h1>
            <div className='all-products-list-container'>
                <div className='all-products-list'>
                    {products?.map(product => (
                        <div key={product.id} className='product-card'>
                            <NavLink to={`/products/${product?.id}`}>
                                <div className='home-product-imgdiv'>
                                    <img className='home-product-img' src={product.images[0].url} alt='Preview image' />
                                </div>
                                <div className='home-product-name'>{product.name.slice(0, 78)} ...</div>
                                <div className='home-product-review-container'>
                                    <div>{avgRating(product.reviews)} avg, </div>
                                    <div> total {product.reviews.length} num reviews</div>
                                </div>
                                <div className='home-product-price-container'>
                                    <div className='home-product-price-small'>$</div>
                                    <div className='home-product-price-big'>{product.price.toFixed(2).split(".")[0]}</div>
                                    <div className='home-product-price-small'>{product.price.toFixed(2).split(".")[1]}</div>
                                </div>
                                <div className='home-product-prime-container'>
                                    <img src={amazonPrimeLogo} className='home-product-prime' />
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
