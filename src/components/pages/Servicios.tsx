
import '../../App.css';
import Header from '../shared/Header';
import Hero from '../home/Hero';
import Servicios from '../home/Servicios';
import Works from '../home/Works';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';
import { useEffect, useState } from 'react';



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
            <div className='flex-1 h-full pt-36 pb-24  flex flex-col items-center justify-start'>
                {loading ? (
                    <div className='w-full pt-20 flex flex-col items-center'>
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
                        <div className='  pb-24 px-8 flex flex-col items-center justify-center gap-8'>
                            <h1 className='text-4xl font-bold text-gray-800 tracking-normal'>Nuestros Servicios</h1>
                            <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-12 text-xl md:text-lg md:text-xl text-gray-500'>
                                <div className='flex flex-col justify-center text-center'>
                                    <img src="videportero.png" className='w-60 cursor-pointer' />
                                    <h2 className='cursor-pointer pt-4 hover:scale-110 transition-all duration-100'>Porteros Automáticos</h2>
                                </div>
                                <div className='flex flex-col justify-center text-center pt-4 cursor-pointer'>
                                    <img src="puerta.png" className='w-64' />
                                    <h2 className='cursor-pointer pt-4 hover:scale-110 transition-all duration-100'>Puertas Automáticas</h2>
                                </div>
                                <div className='flex flex-col justify-center text-center pt-2 cursor-pointer h-full'>
                                    <img src="camara.webp" className='w-64 ' />
                                    <h2 className='cursor-pointer  hover:scale-110 transition-all duration-100 '>Cámaras de Seguridad</h2>
                                </div>
                                <div className='flex flex-col justify-center text-center pt-2 cursor-pointer h-full'>
                                    <img src="otros.jpg" className='w-64 ' />
                                    <h2 className='cursor-pointer  hover:scale-110 transition-all duration-100 '>Otros</h2>
                                </div>

                            </div>
                        </div>
                    )}

            </div>
            <Footer />
        </div>
    );
}

export default App;
