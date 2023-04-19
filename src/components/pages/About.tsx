
import '../../App.css';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';

import React, { useEffect, useMemo, useState } from 'react';
import Maps from '../shared/Maps';
import { GoogleMap, useLoadScript, Marker, useJsApiLoader, } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '60vh',
    height: '50vh',
}

const center = {
    lat: 37.312927,
    lng: -6.851553,
}


function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBECvemRKu8--zuEL_qUbBd0eyWnMjOXnw",
    })

    const center = useMemo(() => ({ lat: 37.312927, lng: -6.851553 }), [])

    return (
        <div className=' min-h-screen flex flex-col items-stretch'>
            <ScrollToTop />
            <Header />
            <div className=' flex-1 pb-24 px-8 flex flex-col items-center justify-start gap-8'>
                {!isLoaded ? (
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
                        <div className=' pt-32 flex flex-col items-center justify-center gap-4'>
                            <h1 className='text-4xl font-bold text-gray-800 tracking-normal'>Sobre Nosotros</h1>
                            <p className='text-2xl  text-gray-500 text-center'>Nos situamos en la localidad de San Juan del Puerto en Huelva, en el Polígono Dominicano </p>

                            <div className='flex flex-col items-center'>
                                <div className='shadow-2xl hidden md:flex'>
                                    <GoogleMap
                                        mapContainerStyle={{
                                            width: '60vh',
                                            height: '50vh',
                                        }}
                                        center={center}
                                        zoom={11}

                                    >
                                        <Marker position={center} />
                                    </GoogleMap>

                                </div>
                                <div className='shadow-2xl  md:hidden'>
                                    <GoogleMap
                                        mapContainerStyle={{
                                            width: '35vh',
                                            height: '50vh',
                                        }}
                                        center={center}
                                        zoom={11}

                                    >
                                        <Marker position={center} />
                                    </GoogleMap>

                                </div>
                            </div>
                            <button className='bg-secondary w-3/5 text-white py-2 px-8 rounded-xl text-xl hover:opacity-80 hover:scale-110 transition-all duration-200 shadow-xl'>
                                Contactanos
                            </button>
                        </div>
                    )}

            </div>
            <Footer />

        </div>);

}

export default App;
