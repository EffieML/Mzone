import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCartItemsThunk } from '../../store/cart';
import OneCartItem from './OneCartItem.js';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
    const dispatch = useDispatch();
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
                Proceed to checkout button
            </div>
        </div>
    )
}

export default ShoppingCartPage;
