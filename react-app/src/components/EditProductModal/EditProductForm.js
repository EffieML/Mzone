// import { useParams, NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { editProductThunk } from '../../store/product';
import { getProductImagesThunk } from '../../store/productimg';
import UploadProductImg from './UploadProductImg';
import './EditProductModal.css'

function EditProductForm({ product, productId, setShowModal }) {

    const dispatch = useDispatch();
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

    // useEffect(() => {
    //     if (product) {
    //         if (product.price) {
    //             setPrice(product.price)
    //         }
    //     }
    // }, [product.price])

    useEffect(() => {
        dispatch(getProductImagesThunk(product.id))
    }, [dispatch, product.id]);
    // console.log("images----------", images)

    useEffect(() => {
        // const errors = []
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
            // } else if (images.length === 0) {
            //     errors.push('Minimum one image is required.')
            //     setErrors(errors)
            // }
        }
    }, [dispatch, productId, images])

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

        if (editedProduct && editedProduct.errors) {
            setErrors(editedProduct.errors)
        }
        if (editedProduct && !editedProduct.errors) {
            setErrors([]);
            setShowModal(false);
        }
    }

    return (
        <div>
            {user && (<div className='edit-product-from-container'>
                <div className='edit-product-from-title'>
                    <div className='edit-product-from-title-inner'>
                        Update product information
                    </div>
                    <div onClick={() => setShowModal(false)} className='edit-product-from-title-inner'>
                        <button>x</button>
                    </div>
                </div>

                <div className='edit-product-from-img-sec'>
                    {/* <div className='edit-product-from-img-sec-title'>Update product image</div> */}
                    <label className='add-product-page-name1'>
                        Update product image
                    </label>
                    <div className='add-product-page-img-info'>
                        <p>Shoppers find images more helpful than text alone. </p>
                        <p>- Images must be .png, .jpg, .jpeg and .gif format.</p>
                        <p>- Minimum one image is required.</p>
                        <p>- Maximum five images are allowed.</p>
                    </div>

                    <UploadProductImg productId={productId} />
                </div>
                <div className='edit-product-from-line'></div>

                <div className='edit-product-form-container'>
                    <form onSubmit={editProductSubmit}>
                        <ul className="form-errors">
                            {errors.map((error, idx) => (
                                <li className='edit-product-form-errors-container' key={idx}>
                                    <div className='edit-product-form-errors1'>!</div>
                                    <div>{error.split(':').pop()}</div>
                                </li>
                            ))}
                        </ul>
                        {/* <ul className="form-errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul> */}
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
                                Product Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            // maxLength='255'
                            />
                        </div>
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
                                Brand Name
                            </label>
                            <input
                                type="text"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                required
                            // maxLength='255'
                            />
                        </div>
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
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
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
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
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
                                Brief Description
                            </label>
                            <input
                                type="text"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                required
                            // maxLength='2000'
                            />
                        </div>
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
                                Description
                            </label>
                            <input
                                type="text"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                required
                            // maxLength='2000'
                            />
                        </div>
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
                                {`Product Dimension ("D x "W x "H)`}
                            </label>
                            <input
                                type="text"
                                value={dimension}
                                onChange={(e) => setDimension(e.target.value)}
                                required
                            // maxLength='100'
                            />
                        </div>
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
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
                        <div className='edit-product-form-name-container'>
                            <label className='edit-product-form-name1'>
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

                        <div className='edit-product-form-button3-container'>
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>)}

        </div>
    )
}

export default EditProductForm;
