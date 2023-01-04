import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProductImagesThunk, deleteProductImageThunk } from '../../store/productimg';
import './EditProductModal.css';


const UploadProductImg = ({ productId }) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [urlValidationErrors, setUrlValidationErrors] = useState([]);
    const [showImagesErrors, setShowImagesErrors] = useState(false);

    const images = useSelector(state => Object.values(state?.productimgs.ProductAllimgs));
    const errors = []
    useEffect(() => {
        dispatch(getProductImagesThunk(productId))
    }, [dispatch, productId, image]);
    // console.log("images----------", images)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUrlValidationErrors([]);


        if (images.length >= 5) {
            setShowImagesErrors(true);
            errors.push('Maximum 5 images allowed.')
            setUrlValidationErrors(errors);
            // console.log("urlerrors==============", urlValidationErrors)
        }
        // else if (images.length === 1) {
        //     setShowImagesErrors(true);
        //     const errors = [];
        //     errors.push('Minmum 1 images required.')
        //     setUrlValidationErrors(errors);
        // }
        else {
            setShowImagesErrors(false);
            const formData = new FormData();
            formData.append("image", image);
            // console.log("formData image------------", image)

            // aws uploads can be a bit slow—displaying
            // some sort of loading message is a good idea
            setImageLoading(true);
            console.log("urlerrors==============", urlValidationErrors)
            const res = await fetch(`/api/products/${productId}/addProductImg`, {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                const data = await res.json();
                setImageLoading(false);
                setImage(null);
            }
            else {
                setImageLoading(false);
                // a real app would probably use more advanced
                // error handling
                // console.log("error");
                const data = await res.json();
                setUrlValidationErrors([data.errors])
            }
        }
    }
    const updateImage = (e) => {
        const file = e.target.files[0];
        // console.log("updateImage image", file)
        setImage(file);
        // console.log("updateimage setimage", image)
    }

    const handleProductimgDelete = async (productimgId) => {
        if (images.length === 1) {
            setShowImagesErrors(true);
            errors.push('Minimum 1 image is required.')
            setUrlValidationErrors(errors);
            // e.preventDefault();
            // console.log("urlerrors==============", urlValidationErrors)
        } else if (images.length > 1) {
            if (window.confirm('Do you want to delete this image?')) {
                await dispatch(deleteProductImageThunk(productimgId))
                setUrlValidationErrors([]);
            }
        }

    }

    return (
        <div>
            <div className="edit-product-from-errors-container">
                {showImagesErrors && urlValidationErrors.map((error, idx) => (
                    <li key={idx} className='form-errors'>{error}</li>
                ))}
            </div>
            <div className="edit-product-from-img-container">
                {images.map((image) =>
                    <div key={image.id} className="edit-product-from-img-container-inner">
                        <img alt='product-img' className="edit-product-img-small" src={image.url} />
                        <button onClick={() => handleProductimgDelete(image.id)}>x</button>
                    </div>
                )}
            </div>
            <div className="edit-product-from-upload">
                <input
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                    className="upload-button"
                />
                <button onClick={handleSubmit}>Upload Image</button>
                {(imageLoading) && <p>Loading...</p>}
            </div>
        </div>
    )
}

export default UploadProductImg;
