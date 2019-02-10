import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="carousel carousel-slider">
        <a className="carousel-item"><img src="http://localhost:8000/public/banner/banner-1.jpg" alt='banner-surf' /></a>
        <a className="carousel-item"><img src="http://localhost:8000/public/banner/banner-2.jpg" alt='banner-beach' /></a>
        <a className="carousel-item"><img src="http://localhost:8000/public/banner/banner-3.jpg" alt='banner-snowboard' /></a>
        <a className="carousel-item"><img src="http://localhost:8000/public/banner/banner-4.jpg" alt='banner-skateboard' /></a>
      </div>
      <div className="features grey darken-4">
        <div className="mens-feature">
          <Link to='/products/men' className='product-link'>
            <img src="http://localhost:8000/public/men-feature.jpg" alt="Mens" className='mens-feature-img'/>
            <h2 className='mens-feature-text'><b>Mens</b></h2>
          </Link>
        </div>
        <div className="womens-feature">
          <Link to='/products/women' className='product-link'>
            <img src="http://localhost:8000/public/women-feature.jpg" alt="Womens" className='womens-feature-img'/>
            <h2 className='womens-feature-text'><b>Womens</b></h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;