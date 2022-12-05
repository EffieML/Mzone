import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCartItemsThunk } from '../../store/cart';
import { OneCartItem } from './OneCartItem';
import './ShoppingCartPage.css';

function OneCartItem(item) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);


}

export default OneCartItem;
