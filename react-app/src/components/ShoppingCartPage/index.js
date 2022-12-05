import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCartItemsThunk } from '../../store/cart';
import { OneCartItem } from './OneCartItem';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => Object.values(state.carts.allCartItems))

    useEffect(() => {
        dispatch(getAllCartItemsThunk());
    }, [dispatch])


    const totalItem = (cartItems) => {
        let count = 0;
        for (let item in cartItems) {
            count += Number(item.quantity);
        }
        return count
    }

    const totalPrice = (cartItems) => {
        let price = 0;
        for (let item in cartItems) {
            price += Number(item.quantity) * Number(item.product.price);
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
