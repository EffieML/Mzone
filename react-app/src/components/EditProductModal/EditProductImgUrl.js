import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getProductImagesThunk, deleteProductImageThunk } from '../../store/productimg';


const UploadProductImg = ({ productId }) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [urlValidationErrors, setUrlValidationErrors] = useState([]);
    const [showImagesErrors, setShowImagesErrors] = useState(false);

    const images = useSelector(state => Object.values(state?.productimgs.ProductAllimgs));

    useEffect(() => {
        dispatch(getProductImagesThunk(productId))
    }, [dispatch, productId, image]);
    // console.log("images----------", images)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUrlValidationErrors([]);

        if (images.length >= 5) {
            setShowImagesErrors(true);
            const errors = [...urlValidationErrors];
            errors.push('Maximum 5 images allowed.')
            setUrlValidationErrors(errors);
            // console.log("urlerrors==============", urlValidationErrors)
        } else {
            setShowImagesErrors(false);
            const formData = new FormData();
            formData.append("image", image);
            // console.log("formData image------------", image)

            // aws uploads can be a bit slow—displaying
            // some sort of loading message is a good idea
            setImageLoading(true);

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
        if (window.confirm('Do you want to delete this image?')) {
            await dispatch(deleteProductImageThunk(productimgId))
            setUrlValidationErrors([]);
        }
    }

    return (
        <div>
            <div>
                {showImagesErrors && urlValidationErrors.map((error, idx) => (
                    <li key={idx} className='form-errors'>{error}</li>
                ))}
            </div>
            <div>
                {images.map((image) =>
                    <div key={image.id}>
                        <button onClick={() => handleProductimgDelete(image.id)}>X</button>
                        <img alt='product-image' className="edit-product-img-small" src={image.url} />
                    </div>
                )}
            </div>
            <div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                />
                <button onClick={handleSubmit}>Upload</button>
                {(imageLoading) && <p>Loading...</p>}
            </div>
        </div>
    )
}

export default UploadProductImg;
