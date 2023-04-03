
import '../../App.css';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';

import React from 'react';
import Maps from '../shared/Maps';



function App() {
    return (
        <div className=''>
            <ScrollToTop />
            <Header />
            <div className=' pt-36 pb-24 px-8 flex flex-col items-center justify-center gap-8'>
                <h1 className='text-4xl font-medium text-gray-800 tracking-normal'>Sobre Nosotros</h1>

                <Maps />
            </div>

            <Footer />
        </div>);

}

export default App;
