
import '../../../App.css';
import Header from '../../shared/Header';
import Hero from '../../home/Hero';
import Servicios from '../../home/Servicios';
import Works from '../../home/Works';
import Footer from '../../shared/Footer';
import ScrollToTop from '../../shared/ScrollToTop';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';



function App() {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    console.log(id)
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
                        <div className='pb-24 px-8 '>
                            {id == null ? (
                                <div className='flex flex-col items-center justify-center gap-8'>
                                    <h1 className='text-4xl font-bold text-gray-800 tracking-normal'>Nuestros Servicios</h1>
                                    <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-12 text-xl md:text-lg md:text-xl text-gray-500'>
                                        <div className='transition-all duration-100 cursor-pointer hover:border-gray-500 border-2 hover:rounded-xl hover:shadow-2xl p-8 flex flex-col justify-center text-center'>
                                            <img src="videportero.png" className='w-60 cursor-pointer' />
                                            <h2 className='cursor-pointer pt-4   transition-all duration-100'>Cerrajeria</h2>
                                        </div>
                                        <div className='transition-all px-2 duration-100 cursor-pointer hover:border-gray-500 border-2 hover:rounded-xl hover:shadow-2xl flex flex-col justify-center text-center pt-2 cursor-pointer h-full'>
                                            <img src="grupopresion.png" className='w-64 ' />
                                            <h2 className='cursor-pointer   pt-4'>Grupo de Presión</h2>
                                        </div>
                                        <div className='transition-all h-full px-4 duration-100 hover:border-gray-500 border-2 hover:rounded-xl hover:shadow-2xl flex flex-col justify-center text-center pt-4 cursor-pointer'>
                                            <img src="puerta.png" className='w-60' />
                                            <h2 className='cursor-pointer  '>Automatismos</h2>
                                        </div>
                                        <NavLink to={'/servicios/domotica'} className='transition-all duration-100 cursor-pointer hover:border-gray-500 border-2 hover:rounded-xl hover:shadow-2xl flex flex-col justify-center text-center pt-2 cursor-pointer h-full'>
                                            <img src="camara.webp" className='w-60 self-center' />
                                            <h2 className='cursor-pointer  -mt-2'>Domótica</h2>
                                        </NavLink>
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )}

                        </div>
                    )}

            </div>
            <Footer />
        </div>
    );
}

export default App;
