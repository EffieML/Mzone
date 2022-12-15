import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const AddProductImgUrl = ({ images, setImages }) => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const [urls, setUrls] = useState([])
    const [urlValidationErrors, setUrlValidationErrors] = useState([]);
    const [showImagesErrors, setShowImagesErrors] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        setUrlValidationErrors([]);

        if (images.length >= 5) {
            const errors = [...urlValidationErrors];
            errors.push('Maximum 5 images allowed.')
            setUrlValidationErrors(errors);
        } else {
            setShowImagesErrors(true);

            const formData = new FormData();
            formData.append("image", image);
            console.log("formData image-=-----------------", image)

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
        console.log("updateImage image", file)
        setImage(file);
        console.log("updateimage setimage", image)
    }

    const handleRemove = (url) => {
        const newUrls = urls.filter(ele => ele !== url);
        setUrls(newUrls);
        setImages(newUrls);
        setUrlValidationErrors([]);
    }
    console.log("addproduct images-----------", images)
    return (
        <div>
            <div>
                {showImagesErrors && urlValidationErrors.map((error, idx) => (
                    <li key={idx} className='form-errors'>{error}</li>
                ))}
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
            <div>
                {urls.map((url, index) =>
                    <div key={index}>
                        <button onClick={() => handleRemove(url)}>X</button>
                        <img alt='uploaded-images' className="edit-product-img-small" src={url} />
                    </div>
                )}
            </div>
        </div>

    )
}

export default AddProductImgUrl;
