import { useParams, NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { listOneProductThunk } from '../../store/product';
import './OneProductPage.css'

function OneProductPage() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(state => state.products.singleProduct)
    // console.log("OneProductsPage product: ", product)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(listOneProductThunk(productId)).then(() => setIsLoaded(true));
    }, [dispatch, productId]);

    if (!product) return null;

    return (
        <div>
            <h1>single product</h1>
            {isLoaded && (
                <div >
                    <div key={product.id}>

                        <div>
                            {/* <img className='home-product-img' src={product.images[0].url} alt='Preview image' /> */}
                            {product.images.length && (
                                product.images.map(image => (
                                    <img key={image.id} src={image.url} />
                                    // <img key={image.id} src={image.url} onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'}/>
                                ))
                            )}
                        </div>
                        {/* <div>
                            <img className='home-product-img' src={product.images[0].url} alt='Preview image' />
                        </div> */}
                        <div>{product.name}</div>
                        <div>!!! review stars</div>
                        <div>in {product.category}</div>
                        <div>{product.price}</div>
                        <div>{product.brand}</div>
                        <div>{product.about}</div>
                        <div>{product.detail}</div>
                        <div>product info: technical details</div>
                        <div>{product.dimension}</div>
                        <div>{product.brand}</div>
                        <div>{product.weight}</div>
                        {/* <div>{product.quantity}</div> */}
                        <div> !!! reviews</div>
                        <div> !!! add to cart</div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default OneProductPage;
