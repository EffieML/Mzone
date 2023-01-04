import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { editItemInCartThunk, deleteItemInCartThunk } from '../../store/cart';
import './ShoppingCartPage.css';


function OneCartItem({ item }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [quantity, setQuantity] = useState(item?.quantity)
    const [numItem, setNumItem] = useState(item?.product.quantity)

    const updateItemQuantity = async (e) => {
        e.preventDefault();

        const cartItem = { quantity };

        const editedItem = await dispatch(editItemInCartThunk(item.id, cartItem))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

        if (editedItem) {
            setErrors([]);
        }
    }

    return (
        <div className='cart-one-container'>
            <div className='cart-one-img'>
                <NavLink to={`/products/${item.product?.id}`}>
                    <img src={item?.product.images[0].url} alt='Preview img' />
                </NavLink>
            </div>
            <div className='cart-one-middle'>
                <div className='cart-one-middle-title'>
                    <NavLink to={`/products/${item.product?.id}`}>
                        {item.product.name}
                    </NavLink>
                </div>
                <div className='cart-one-middle-stock'>In Stock</div>
                <div className='cart-one-middle-returnnote'>Eligible for FREE Shipping & FREE Returns</div>
                <div className='cart-one-middle-update-del-container'>
                    <form onSubmit={updateItemQuantity} >
                        <div>
                            <ul className="form-errors">
                                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                            </ul>
                            <div className='cart-one-middle-update-container'>
                                <div className='cart-one-middle-update-box'>
                                    {/* <label >
                                Qty:
                            </label> */}
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        min="1"
                                        max={numItem}
                                        step='1'
                                        required
                                    />
                                </div>
                                <div className='cart-one-middle-update-button'>
                                    <button type="submit">Update</button>
                                </div>
                            </div>

                        </div>
                    </form>
                    <i class="a-icon" role="img" aria-label="|"></i>
                    <div className='cart-one-middle-del-container'>
                        <button onClick={() => dispatch(deleteItemInCartThunk(item.id))}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <div className='cart-one-right-price'>${item.product.price}</div>
        </div >
    )
}
export default OneCartItem;
