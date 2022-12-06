import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { listOneProductThunk } from '../../store/product';
import { addItemToCartThunk } from '../../store/cart';
import './OneProductPage.css'

function OneProductPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productId } = useParams();
    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.products.singleProduct);
    // console.log("OneProductsPage product: ", product);
    const [errors, setErrors] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(listOneProductThunk(productId)).then(() => setIsLoaded(true));
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

                        <button onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default OneProductPage;
