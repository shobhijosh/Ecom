import React from 'react'
import Navbar from './Navbar';
import Filter from './Filter';
import Products from './Products';
import Footer from './Footer';

function Home() {
    return (
        <>
            <header>
                <Navbar />
                <div className='homepage'>
                    <span>Homepage</span>
                    <span>/</span>
                    <span>Fruits and vegetables</span>
                </div>
                <Filter />
            </header>
            <main>
                <Products />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home