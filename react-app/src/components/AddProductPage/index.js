import { useParams, NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { addProductThunk } from '../../store/product';
import AddProductImgUrl from './AddProductImgUrl';
import './AddProductPage.css';

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
            <h1>Create new product</h1>
            <form onSubmit={addProductSubmit}>
                <div className='add-product-form-container'>
                    <ul className="form-errors">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div>
                        <label >
                            Product Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label >
                            Brand Name
                        </label>
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label >
                            Category
                        </label>
                        <select
                            type="text"
                            value={category}
                            size="3"
                            onChange={(e) => setCategory(e.target.value)}
                            required>
                            <option value="Mzone Devices" >Mzone Devices</option>
                            <option value="Mzone Home" >Mzone Home</option>
                        </select>

                    </div>
                    <div>
                        <label >
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
                    <div>
                        <label >
                            Brief Description
                        </label>
                        <input
                            type="text"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label >
                            Description
                        </label>
                        <input
                            type="text"
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label >
                            Product Dimension
                        </label>
                        <input
                            type="text"
                            value={dimension}
                            onChange={(e) => setDimension(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label >
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
                    <div>
                        <label >
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
                    <div>
                        <p >Please select your image file and click "Upload" to successfully add your image one by one. </p>
                        <p>Only .png, .jpg, .jpeg and .gif files can be accepted.</p>
                        <p>Minimum of ONE image is required. Maximum of FIVE images are allowed.</p>
                        <AddProductImgUrl images={images} setImages={setImages} />
                    </div>
                    <br></br>
                    <div>
                        <button type="submit">Add Product</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddProductPage;
