import { useParams, NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { addProductThunk } from '../../store/product';
import './AddProductPage.css'

function AddProductPage() {
    // const dispatch = useDispatch();
    // const { productId } = useParams();
    // const product = useSelector(state => state.products.singleProduct)
    // console.log("OneProductsPage product: ", product)
    // const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //     dispatch(addProductThunk(productId)).then(() => setIsLoaded(true));
    // }, [dispatch, productId]);

    // if (!product) return null;

    return (
        <div>
            <h1>single product</h1>
            {/* {isLoaded && (
                <div >
                    <div key={product.id}>

                        <div>
                            {product.images.length && (
                                product.images.map(image => (
                                    <img key={image.id} src={image.url} />

                                ))
                            )}
                        </div>
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

                        <div> !!! reviews</div>
                        <div> !!! add to cart</div>
                    </div>
                </div>
            )} */}

        </div>
    )
}

export default AddProductPage;
