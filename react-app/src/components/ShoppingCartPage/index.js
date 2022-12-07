import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllCartItemsThunk, resetItemsInCartThunk } from '../../store/cart';
import { createOrderThunk } from '../../store/order';
import OneCartItem from './OneCartItem.js';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector(state => Object.values(state.cartItems.allCartItems))
    console.log("cartItems", cartItems)


    useEffect(() => {
        dispatch(getAllCartItemsThunk());
    }, [dispatch])


    const totalItem = (cartItems) => {
        let count = 0;
        for (let i = 0; i < cartItems.length; i++) {
            let item = cartItems[i];
            count += Number(item.quantity);
        }
        return count
    }

    const totalPrice = (cartItems) => {
        let price = 0;
        for (let i = 0; i < cartItems.length; i++) {
            let item = cartItems[i];
            price += item.quantity * item.product.price;
        }
        return price;
    }

    const placeOrder = async (e) => {
        e.preventDefault();
        const newOrder = await dispatch(createOrderThunk());
        await dispatch(resetItemsInCartThunk());
        return history.push(`/orders/${newOrder.id}`);
    }


    return (
        <div>
            <h1>shopping cart</h1>
            <div >
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <OneCartItem key={item.id} item={item} />
                    ))
                ) : (
                    <div>
                        Shopping cart is empty.
                    </div>
                )}
            </div>
            <div>
                <div>Subtotal {cartItems ? totalItem(cartItems) : 0} Items: </div>
                <div>${cartItems ? totalPrice(cartItems) : 0.00}</div>
            </div>
            <div>
                <button onClick={placeOrder}>Place Order</button>
            </div>
        </div>
    )
}

export default ShoppingCartPage;
