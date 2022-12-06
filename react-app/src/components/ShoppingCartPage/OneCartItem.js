import { useDispatch, useSelector } from 'react-redux';
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
        <div>
            <NavLink to={`/products/${item.product?.id}`}>
                <img src={item?.product.images[0].url} alt='Preview image' />
            </NavLink>
            <div>
                <NavLink to={`/products/${item.product?.id}`}>
                    {item.product.about}
                </NavLink>
                <div>In Stock</div>
                <form onSubmit={updateItemQuantity}>
                    <div className='add-product-form-container'>
                        <ul className="form-errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <div>
                            <label >
                                Qty:
                            </label>
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
                        <div>
                            <button type="submit">update</button>
                        </div>
                    </div>
                </form>
                <div>
                    <button onClick={() => dispatch(deleteItemInCartThunk(item.id))}>
                        Delete
                    </button>
                </div>
                <div>${item.product.price}</div>
                <div>

                </div>
            </div>
        </div >
    )
}
export default OneCartItem;
