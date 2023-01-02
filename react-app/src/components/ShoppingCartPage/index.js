import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllCartItemsThunk, resetItemsInCartThunk } from '../../store/cart';
import { createOrderThunk } from '../../store/order';
import OneCartItem from './OneCartItem.js';
import check from '../../img/check.jpeg';
import i from '../../img/i.png'
import './ShoppingCartPage.css';

function ShoppingCartPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector(state => Object.values(state.cartItems.allCartItems))
    // console.log("cartItems", cartItems)


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
        // console.log('newOrder-------------', newOrder)
        await dispatch(resetItemsInCartThunk());
        return history.push(`/orders/${newOrder.id}`);
    }


    return (
        <div className='cart-page-container'>
            <div className='cart-page-container-inner'>
                <div className='cart-page-container-left'>
                    <h1 className='cart-page-container-left-title'>Shopping Cart</h1>
                    <div className='cart-page-container-left-price'>Price</div>
                    <div className='cart-page-container-left-line'></div>
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <OneCartItem key={item.id} item={item} />
                        ))
                    ) : (
                        <div className='cart-one-middle-title'>
                            Shopping cart is empty.
                        </div>
                    )}
                    <div className='cart-page-container-left-gap'></div>
                </div>
                <div className='cart-page-container-right'>

                    {cartItems && totalPrice(cartItems) >= 25 && (
                        <div className='cart-page-container-right-l1'>
                            <img src={check} alt='green check' />
                            <div className='cart-page-right-l1inner'>
                                <div className='cart-page-right-l1inner1'>Your order qualifies for FREE Shipping.</div>
                                <div className='cart-page-right-l1inner2'>Choose this option at checkout.</div>
                            </div>
                        </div>
                    )}
                    {cartItems && totalPrice(cartItems) < 25 && (
                        <div className='cart-page-container-right-l1v2'>
                            <img src={i} alt='blue info' />
                            <div className='cart-page-right-l1innerv2'>
                                <div className='cart-page-right-l1inner1v2'>Add</div>
                                <div className='cart-page-right-l1inner2v2'>${25 - totalPrice(cartItems)}</div>
                                <div className='cart-page-right-l1inner1v2'>of eligible items to your</div>
                                <div className='cart-page-right-l1inner1v2'> order to qualify for FREE Shipping.</div>
                            </div>
                        </div>
                    )}
                    <div className='cart-page-container-right-l2'>
                        <div className='cart-page-container-right-title'>Subtotal {cartItems ? totalItem(cartItems) : 0} Items: </div>
                        <div className='cart-page-container-right-total'>${cartItems ? totalPrice(cartItems) : 0.00}</div>
                    </div>
                    <div >
                        {/* <NavLink>
                            <button to={`/placeorder`}>Proceed to checkout</button>
                        </NavLink> */}
                        {cartItems.length && (
                            <div className="active">
                                <button onClick={placeOrder}>Place your order</button>
                            </div>
                        )}
                        {!cartItems.length && (
                            <div className="not-active">
                                <button >Place your order</button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCartPage;
