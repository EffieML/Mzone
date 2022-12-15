// import { useParams, NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { editProductThunk } from '../../store/product';
import { getProductImagesThunk } from '../../store/productimg';
import UploadProductImg from './EditProductImgUrl';
import './EditProductModal.css'

function EditProductForm({ product, productId, setShowModal }) {

    const dispatch = useDispatch();
    // const history = useHistory();

    const user = useSelector(state => state.session.user);
    // const [isLoaded, setIsLoaded] = useState(false);

    const [name, setName] = useState(product?.name);
    const [category, setCategory] = useState(product?.category);
    // const [price, setPrice] = useState(product ? product.price : '');
    const [price, setPrice] = useState(product?.price);
    const [brand, setBrand] = useState(product?.brand);
    const [about, setAbout] = useState(product?.about);
    const [detail, setDetail] = useState(product?.detail);
    const [dimension, setDimension] = useState(product?.dimension);
    const [weight, setWeight] = useState(product?.weight);
    const [quantity, setQuantity] = useState(product?.quantity);
    const [img, setImg] = useState(product ? product?.images[0].url : '');
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");
    const [img5, setImg5] = useState("");
    const [errors, setErrors] = useState([]);

    const images = useSelector(state => Object.values(state?.productimgs.ProductAllimgs));

    useEffect(() => {
        dispatch(getProductImagesThunk(product.id))
    }, [dispatch, product.id]);
    // console.log("images----------", images)

    useEffect(() => {
        if (images) {
            if (images.length === 1) {
                setImg(images[0].url)
            } else if (images.length === 2) {
                setImg(images[0].url)
                setImg2(images[1].url)
            } else if (images.length === 3) {
                setImg(images[0].url)
                setImg2(images[1].url)
                setImg3(images[2].url)
            } else if (images.length === 4) {
                setImg(images[0].url)
                setImg2(images[1].url)
                setImg3(images[2].url)
                setImg4(images[3].url)
            } else if (images.length === 5) {
                setImg(images[0].url)
                setImg2(images[1].url)
                setImg3(images[2].url)
                setImg4(images[3].url)
                setImg5(images[4].url)
            }
        } else {
            setImg("")
        }
    }, [dispatch, productId])

    if (!product) return null;

    const editProductSubmit = async (e) => {
        e.preventDefault();

        const updateProduct = {
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

        const editedProduct = await dispatch(editProductThunk(updateProduct, productId))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

        if (editedProduct) {
            setErrors([]);
            setShowModal(false);
        }
    }

    return (
        <div>
            <h1>Update product information</h1>
            <div>
                <div>management product image</div>
                <UploadProductImg productId={productId} />
                <hr></hr>
            </div>

            <form onSubmit={editProductSubmit}>
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
                        <p>Please select your image file and click "Upload" to successfully add your image one by one. </p>
                        <p>Only .png, .jpg, .jpeg and .gif files can be accepted.</p>
                        <p>Minimum of ONE image is required. Maximum of FIVE images are allowed.</p>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProductForm;
