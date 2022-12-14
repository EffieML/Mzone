import React from 'react';
import './LoadingPage.css'

const LoadingPage = () => (
    <div className="loading-page-container">
        <div className="loading-page">
            <div className="spinner" />
            <div className="loading-word" >Loading ...</div>
        </div>
    </div>
);

export default LoadingPage;
