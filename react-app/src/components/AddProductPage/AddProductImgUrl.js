import React, { useState } from "react";
import '../EditProductModal/EditProductModal.css';


const AddProductImgUrl = ({ images, setImages }) => {

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const [urls, setUrls] = useState([])
    const [urlValidationErrors, setUrlValidationErrors] = useState([]);
    const [showImagesErrors, setShowImagesErrors] = useState(false);
    const errors = []

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUrlValidationErrors([]);

        if (images.length >= 5) {
            setShowImagesErrors(true);
            errors.push('Maximum 5 images allowed.')
            setUrlValidationErrors(errors);
        } else {
            setUrlValidationErrors([]);
            setShowImagesErrors(true);
            const formData = new FormData();
            formData.append("image", image);
            // console.log("formData image-=-----------------", image)

            // aws uploads can be a bit slow—displaying
            // some sort of loading message is a good idea
            setImageLoading(true);

            const res = await fetch('/api/products/addProductImgUrl', {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                const data = await res.json();
                setImageLoading(false);
                // history.push("/images");
                const updateUrls = [...urls];
                updateUrls.push(data.url);
                setUrls(updateUrls);
                setImages(updateUrls);
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

    const handleRemove = (url) => {
        if (images.length === 1) {
            setShowImagesErrors(true);
            errors.push('Minimum 1 images is required.')
            setUrlValidationErrors(errors);
        } else if (images.length > 1 && !errors.length) {
            if (window.confirm('Do you want to delete this image?')) {
                const newUrls = urls.filter(ele => ele !== url);
                setUrls(newUrls);
                setImages(newUrls);
                setUrlValidationErrors([]);
            }
        }

    }

    // console.log("addproduct images-----------", images)
    return (
        <div >
            <div className="edit-product-from-errors-container">
                {showImagesErrors && urlValidationErrors.map((error, idx) => (
                    <li key={idx} className='form-errors'>{error}</li>
                ))}
            </div>
            <div className="add-product-from-upload">
                <input
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                    className="upload-button1"
                />
                <button onClick={handleSubmit}>Upload Image</button>
                {(imageLoading) && <p>Loading...</p>}
            </div>
            <div className="add-product-from-img-container">
                {urls.map((url, index) =>
                    <div key={index} className="edit-product-from-img-container-inner">
                        <img alt='uploaded-images' className="edit-product-img-small" src={url} />
                        <button onClick={() => handleRemove(url)}>x</button>
                    </div>
                )}
            </div>
        </div>

    )
}

export default AddProductImgUrl;
