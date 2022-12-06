import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { listAllProductsThunk } from '../../store/product';
import './AllProductsPage.css'

function AllProductsPage() {
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.products.allProducts))
    // console.log("allProductsPage products: ", products)

    useEffect(() => {
        dispatch(listAllProductsThunk());
    }, [dispatch]);

    return (
        <div>
            <h1>all products</h1>
            <div >
                {products?.map(product => (
                    <div key={product.id}>
                        <hr></hr>
                        <NavLink to={`/products/${product?.id}`}>
                            <div>
                                <img className='home-product-img' src={product.images[0].url} alt='Preview image' />
                            </div>
                            <div>{product.name}</div>
                            <div>review</div>
                            <div>{product.price}</div>
                            <div>prime</div>
                        </NavLink>

                        <div>add to cart</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProductsPage;
