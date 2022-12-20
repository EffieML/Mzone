import { NavLink, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import EditProductModal from '../EditProductModal';
import { listUserProductsThunk, deleteProductThunk } from '../../store/product';
import './UserListingPage.css'

function UserListingPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const products = useSelector(state => Object.values(state.products.allProducts))
    // console.log("userListingPage products: ", products)
    const currUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(listUserProductsThunk());
    }, [dispatch]);

    // if user is not logged in, need to redirect to main page
    if (!currUser) return <Redirect to='/' />

    //if user don't have post spots, showing empty message
    if (products.length == 0) return (<h2>No listings yet.</h2>);

    // console.log(products)

    const handleDelete = async (productId) => {
        if (window.confirm('Do you want to delete this product?')) {
            await dispatch(deleteProductThunk(productId))
            // .then(() => history.push('/spots/current'))
        }
    }

    return (
        <div>
            <h1>Manage your listings</h1>
            <div>
                <Link to='/products/current/create'>ADD PRODUCT</Link>
            </div>
            <div >
                {products?.map(product => (
                    <div key={product.id}>
                        <hr></hr>
                        <div>
                            <img className='home-product-img' src={product.images[0].url} alt='Preview image' />
                        </div>
                        <div>{product.name}</div>
                        <div>{product.category}</div>
                        <div>{product.price}</div>
                        <div>{product.id}</div>
                        <div>
                            <EditProductModal product={product} productId={product?.id} />
                        </div>
                        <button onClick={() => handleDelete(product.id)}> Delete product </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserListingPage;
