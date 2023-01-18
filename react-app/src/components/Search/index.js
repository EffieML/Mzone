import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listAllProductsThunk } from '../../store/product';
import searchpic from '../../img/search.png';
import './Search.css';


function Search() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    const products = useSelector(state => Object.values(state.products.allProducts));
    const searchRef = useRef(null);

    const handleClickOutside = (e) => {
        if (!e.composedPath().includes(searchRef.current)) {
            setShowMenu(false);
        }
    }

    useEffect(() => {
        if (searchTerm.length) {
            setShowMenu(true);
            setSearchResult(filterProducts(searchTerm));
        } else {
            setShowMenu(false);
            setSearchResult([]);
        }
    }, [searchTerm]);

    useEffect(() => {
        dispatch(listAllProductsThunk())
            .then(() => setIsLoaded(true));
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const filterProducts = (keyword) => {
        const st = [];
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let name = product.name;
            // let about = product.about;
            let category = product.category;
            if (name.toLowerCase().includes(keyword.toLowerCase()) ||
                // about.toLowerCase().includes(keyword.toLowerCase()) ||
                category.toLowerCase().includes(keyword.toLowerCase())) {
                st.push(product)
            }
        }
        return st;
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        if (searchResult.length === 0) {
            await window.alert(`There are no products match your search for ${searchTerm}`)
            history.push('/')
        }
        if (searchResult.length > 0) {
            history.push(`/products/search/${searchTerm}`)
        }
        setSearchTerm("")
    }



    return (
        <div className="nav-search-bar" ref={searchRef}>
            <div className="nav-search-bar-c">
                <form onSubmit={handleSearch} className={`product-search-form ${isFocus ? 'focused' : ''}`}>
                    <div className="search-left-c">All</div>
                    <input
                        type="text"
                        className="product-search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        maxLength='100'
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                    />
                    <div className="search-icon-c">
                        <button type='submit'><img className="search-icon" src={searchpic} /></button>
                    </div>
                </form>
            </div>

            {(showMenu && searchResult.length > 0) && (
                <div className='search-bar-drop-down'>
                    {searchResult.map((product) => (
                        <NavLink key={product.id} onClick={() => setSearchTerm("")} to={`/products/${product.id}`} className='search-dropdown-products'>
                            {/* <img className='search-dropdown-product-img' src={product.images[0].url} alt='search-product-display' /> */}
                            {product.name.length <= 200 ? (
                                <p className='search-dropdown-product-name'>{product.name}</p>
                            ) : (
                                <p className='search-dropdown-product-name'>{product.name.slice(0, 200)}...</p>
                            )}
                        </NavLink>
                    ))}
                </div>
            )}
            {(showMenu && searchResult.length === 0) && (
                <div className='no-search-result'>
                    <p>There are no products match your search for "{searchTerm}" </p>
                </div>
            )}
        </div>
    );
}

export default Search;
