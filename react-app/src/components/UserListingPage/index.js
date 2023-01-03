import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
// import { useHistory } from "react-router";
import EditProductModal from '../EditProductModal';
import { listUserProductsThunk, deleteProductThunk } from '../../store/product';
import './UserListingPage.css';
import '../AllOrdersPage/AllOrdersPage.css';
import '../OneOrderPage/OneOrderPage.css';

function UserListingPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    // const history = useHistory();
    // const [showModal, setShowModal] = useState(false);

    const products = useSelector(state => Object.values(state.products.allProducts))
    // console.log("userListingPage products: ", products)
    const currUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(listUserProductsThunk());
    }, [dispatch]);

    // if user is not logged in, need to redirect to main page
    if (!currUser) return <Redirect to='/' />

    //if user don't have post spots, showing empty message
    if (products.length === 0) return (<h2>No listings yet.</h2>);

    // console.log(products)

    const handleDelete = async (productId) => {
        if (window.confirm('Do you want to delete this product?')) {
            await dispatch(deleteProductThunk(productId))
            // .then(() => history.push('/spots/current'))
        }
    }

    return (
        <div className='all-listing-page-container'>
            <div className='all-orders-page-l1'>
                <div className='all-orders-page-l1-account'>
                    <NavLink to={`/users/${user.id}`}> Your Selling Account </NavLink>
                </div>
                <div className='all-orders-page-l1-icon'>{`>`}</div>
                <div className='all-orders-page-l1-orders'>Your Products</div>
            </div>
            <h1 className='all-orders-page-title'>Manage Inventory</h1>
            <div className='all-listing-page-product-line'>
                <div>
                    <div className='all-listing-page-title-order'>Products</div>

                </div>
                <div>
                    <NavLink to='/products/current/create'>
                        <button>Add a Product</button>
                    </NavLink>
                </div>
            </div>
            <div className='all-orders-page-line'></div>

            {products && products.length <= 1 && (
                <div className='all-orders-page-num-orders'> {products.length} product listed</div>
            )}
            {products && products.length > 1 && (
                <div className='all-orders-page-num-orders'> {products.length} products listed</div>
            )}

            <div >
                {products?.map(product => (
                    <div key={product.id} className='all-listing-oneprod-sec'>
                        <div className='all-orders-oneorder-sec2-left-container'>
                            <div>
                                <NavLink to={`/products/${product?.id}`}>
                                    <img className='home-product-img' src={product.images[0].url} alt='Preview img' />
                                </NavLink>
                            </div>
                            <div className='all-orders-oneorder-sec2-middle'>
                                <div id='product-name'>
                                    <NavLink to={`/products/${product.id}`}>
                                        {product.name}
                                    </NavLink>
                                </div>
                                <div className='one-order-page-sec2-item-middle-l2'>category: {product.category}</div>
                                <div className='one-order-page-sec2-item-middle-l3'>${product.price}</div>
                                <div className='all-listing-page-sec2-item-middle-l4'>Qty: {product.quantity}</div>
                                {/* <div>product id: {product.id}</div> */}
                            </div>
                        </div>
                        <div className='all-listing-page-right-sec'>
                            <div className='all-listing-page-right-sec1'>
                                <EditProductModal product={product} productId={product?.id} />
                            </div>
                            <div className='all-listing-page-right-sec2'>
                                <button onClick={() => handleDelete(product.id)}> Delete Product</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserListingPage;
