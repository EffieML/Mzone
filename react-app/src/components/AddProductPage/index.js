import { useParams, NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { addProductThunk } from '../../store/product';
import AddProductImgUrl from './AddProductImgUrl';
import userimg from '../../img/user.jpeg';
import './AddProductPage.css';
import '../AllOrdersPage/AllOrdersPage.css';
import '../OneOrderPage/OneOrderPage.css';
import '../EditProductModal/EditProductModal.css';

function AddProductPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [about, setAbout] = useState('');
    const [detail, setDetail] = useState('');
    const [dimension, setDimension] = useState('');
    const [weight, setWeight] = useState('');
    const [quantity, setQuantity] = useState('');
    const [img, setImg] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [img5, setImg5] = useState('');
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (images && images.length === 1) {
            setImg(images[0]);
        } else if (images && images.length === 2) {
            setImg(images[0]);
            setImg2(images[1]);
        } else if (images && images.length === 3) {
            setImg(images[0]);
            setImg2(images[1]);
            setImg3(images[2]);
        } else if (images && images.length === 4) {
            setImg(images[0]);
            setImg2(images[1]);
            setImg3(images[2]);
            setImg4(images[3]);
        } else if (images && images.length >= 5) {
            setImg(images[0]);
            setImg2(images[1]);
            setImg3(images[2]);
            setImg4(images[3]);
            setImg5(images[4]);
        }
    }, [images]);

    // useEffect(() => {
    //     dispatch(addProductThunk(productId)).then(() => setIsLoaded(true));
    // }, [dispatch, productId]);

    // if (!product) return null;

    const addProductSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            // seller_id: user.id,
            name,
            category,
            price,
            brand,
            about,
            detail,
            dimension,
            weight,
            quantity,
            img,
            img2,
            img3,
            img4,
            img5
        }

        const addedProduct = await dispatch(addProductThunk(newProduct))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

        if (addedProduct) {
            setErrors([]);
            // setShowModal(false);
            history.push(`/products/${addedProduct.id}`)
        }
    }

    return (
        <div>
            {user && (
                <div>
                    <div className='add-review-page-header'>
                        <div className='add-review-page-header-inner'>
                            <img src={userimg} id='userrimg' />
                            <div>{user.username}</div>
                        </div>
                    </div>
                    <div className='add-product-page-container'>
                        <div className='all-orders-page-l1'>
                            <div className='all-orders-page-l1-account'>Your Selling Account</div>
                            <div className='all-orders-page-l1-icon'>{`>`}</div>
                            <div className='add-product-page-l1-products'>
                                <NavLink to={`/products/current`}>Your Products</NavLink>
                            </div>
                            <div className='all-orders-page-l1-icon'>{`>`}</div>
                            <div className='all-orders-page-l1-orders'>Add a Product</div>
                        </div>
                        <h1 className='add-product-page-title'>Create new product</h1>
                        <form onSubmit={addProductSubmit}>
                            <div className='add-product-form-container'>
                                <ul className="form-errors">
                                    {errors.map((error, idx) => (
                                        <li className='edit-product-form-errors-container'>
                                            <div className='edit-product-form-errors1'>!</div>
                                            <div key={idx}>{error}</div>
                                        </li>
                                    ))}
                                    {/* {errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
                                </ul>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1'>
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1'>
                                        Brand Name
                                    </label>
                                    <input
                                        type="text"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1'>
                                        Category
                                    </label>
                                    <select
                                        type="text"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        required>
                                        <option value="Mzone Devices" >Mzone Devices</option>
                                        <option value="Mzone Home" >Mzone Home</option>
                                    </select>

                                </div>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1' >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        min="0.01"
                                        max="9999.99"
                                        step='0.01'
                                        required
                                    />
                                </div>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1'>
                                        Brief Description
                                    </label >
                                    <input
                                        type="text"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1'>
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        value={detail}
                                        onChange={(e) => setDetail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1'>
                                        Product Dimension
                                    </label>
                                    <input
                                        type="text"
                                        value={dimension}
                                        onChange={(e) => setDimension(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1'>
                                        Product Weight
                                    </label>
                                    <input
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        min="0.01"
                                        max="500"
                                        step='0.01'
                                        required
                                    />
                                </div>
                                <div className='add-product-page-name-container'>
                                    <label className='add-product-page-name1'>
                                        Product Quantity
                                    </label>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        min="1"
                                        max="9999"
                                        step='1'
                                        required
                                    />
                                </div>
                                <div className='add-product-form-img-container'>
                                    <label className='add-product-page-name1'>
                                        Upload Images
                                    </label>
                                    <div className='add-review-page-photo-content'>
                                        <p>Shoppers find images more helpful than text alone. </p>
                                        <p>- Images must be .png, .jpg, .jpeg and .gif format.</p>
                                        <p>- Minimum one image is required.</p>
                                        <p>- Maximum five images are allowed.</p>
                                    </div>
                                    <AddProductImgUrl images={images} setImages={setImages} />
                                </div>
                                <br></br>
                                <div className='add-product-form-button3-container'>
                                    <button type="submit">Add a Product</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            )}

        </div>
    )
}

export default AddProductPage;
