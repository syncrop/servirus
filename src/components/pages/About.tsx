
import '../../App.css';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';

import React, { useEffect, useState } from 'react';
import Maps from '../shared/Maps';



function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);
    return (
        <div className=' min-h-screen flex flex-col items-stretch'>
            <ScrollToTop />
            <Header />
            <div className=' flex-1 pb-24 px-8 flex flex-col items-center justify-start gap-8'>
                {loading ? (
                    <div className=' w-full pt-20 flex flex-col items-center'>
                        <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span>
                        </div>
                    </div>
                )
                    : (
                        <div className=' pt-32 flex flex-col items-center justify-center gap-8'>
                            <h1 className='text-4xl font-bold text-gray-800 tracking-normal'>Sobre Nosotros</h1>
                            <div className=' text-gray-500 '>
                                <p className='text-2xl'>Nos situamos en la localidad de San Juan del Puerto en Huelva, en el Polígono Dominicano </p>

                            </div>
                            <div className='flex flex-col items-center'>
                                <Maps />
                            </div>
                            <button className='bg-secondary w-1/5 text-white py-2 px-8 rounded-xl text-xl hover:opacity-80 hover:scale-110 transition-all duration-200 shadow-xl'>
                                Contactanos
                            </button>
                        </div>
                    )}

            </div>
            <Footer />

        </div>);

}

export default App;
