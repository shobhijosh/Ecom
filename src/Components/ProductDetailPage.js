import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import AboutProduct from './AboutProduct';

const ProductDetailPage = () => {
    return (
        <>
            <header>
                <Navbar />
                <div className='homepage'>
                    <span><Link to="/">Homepage</Link></span>
                    <span>/</span>
                    <span><Link to="/products"> Fruits and vegetables</Link></span>
                    <span>/</span>
                    <span>Product</span>
                </div>
            </header>
            <main>
                <AboutProduct />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default ProductDetailPage