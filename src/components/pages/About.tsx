
import '../../App.css';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';

import React, { useEffect, useMemo, useState } from 'react';
import Maps from '../shared/Maps';
import { GoogleMap, useLoadScript, Marker, useJsApiLoader, } from "@react-google-maps/api";
import { Link, NavLink } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';

const mapContainerStyle = {
    width: '60vh',
    height: '50vh',
}

const center = {
    lat: 37.312927,
    lng: -6.851553,
}

const Fade = require("react-reveal/Fade")


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
        <div className='flex flex-col items-stretch min-h-screen '>
            <ScrollToTop />
            <CookieConsent
                location="bottom"
                buttonText="Aceptar Cookies"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B", textAlign: "center" }}
                buttonStyle={{ backgroundColor: "#1961F1", color: "#ffffff", fontSize: "18px" }}
                expires={150}
                declineButtonText="Rechazar"
                declineButtonClasses='bg-header hover:opacity-80 transition-all duration-200'
                buttonClasses="bg-header hover:opacity-80 transition-all duration-200"
                enableDeclineButton
            >
                Este sitio web utiliza cookies para la mejora de experiencia de usuario{" "} <Link to='/cookies' className='text-gray-500 cursor-pointer'>Para mas información</Link>
            </CookieConsent>
            <Header />
            <div className='flex flex-col items-center justify-start flex-1 gap-8 '>
                {!isLoaded ? (
                    <div className='flex flex-col items-center w-full pt-20 '>
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
                        <div className='pt-24 '>
                            <Fade>

                                <div className="bg-cover  mx-14 2xl:mx-64" >
                                    <div className='flex flex-col items-center justify-center w-full pt-8 pb-8 backdrop-blur-md'>
                                        <Fade top >
                                            <h1 className='text-4xl font-bold tracking-normal text-gray-800 2xl:text-5xl '>SOBRE NOSOTROS</h1>
                                        </Fade>
                                        <div className='grid gap-12 lg:grid-cols-2 md:px-20 lg:mt-8'>
                                            <Fade left delay={'100'}>
                                                <p className='mt-4 text-xl text-left text-black font- lg:mt-0'>
                                                    Somos una empresa dedicada  al sector de las puertas automáticas en la provincia de Huelva  y sus alrededores, con experiencia en el sector de
                                                    las puertas y del automatismo, lo que nos permite garantizarle una alta calidad en todos nuestros trabajos. Dedicada al montaje de instalaciones nuevas de puertas,
                                                    motorizaciones, etc, así como a la reparación y mantenimiento de puertas automáticas de todo tipo.
                                                </p>
                                            </Fade>
                                            <div>
                                                <Fade right delay={'100'} >

                                                    <p className='text-xl font-semibold text-gray-800 '>
                                                        Ayudándole a encontrar las soluciones más adecuadas.
                                                    </p>
                                                    <p className='text-xl text-justify text-black'>
                                                        Le asesoramos y aconsejamos sobre sus instalaciones nuevas o existentes para un correcto funcionamiento de las mismas con las mejores marcas del mercado al mejor precio.
                                                    </p>
                                                </Fade>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="bg-[url('/public/servirus2.jpeg')] flex flex-col bg-cover  ">
                                    <div className='flex flex-col items-center px-8 pt-4 pb-12 backdrop-blur-md backdrop-brightness-75'>

                                        <p className='gap-12 mt-8 text-2xl font-normal text-center text-white md:px-20'>Nos situamos en la localidad de San Juan del Puerto en Huelva en el <br></br> Polígono Dominicano </p>

                                        <div className="flex flex-col items-center mt-4 ">
                                            <div className='hidden shadow-2xl md:flex lg:hidden '>
                                                <GoogleMap
                                                    mapContainerStyle={{
                                                        width: '75vh',
                                                        height: '50vh',
                                                    }}
                                                    center={center}
                                                    zoom={11}

                                                >
                                                    <Marker position={center} />
                                                </GoogleMap>

                                            </div>
                                            <div className='hidden shadow-2xl lg:flex '>
                                                <GoogleMap
                                                    mapContainerStyle={{
                                                        width: '85vh',
                                                        height: '50vh',
                                                    }}
                                                    center={center}
                                                    zoom={11}

                                                >
                                                    <Marker position={center} />
                                                </GoogleMap>

                                            </div>
                                            <div className='shadow-2xl md:hidden'>
                                                <GoogleMap
                                                    mapContainerStyle={{
                                                        width: '45vh',
                                                        height: '50vh',
                                                    }}
                                                    center={center}
                                                    zoom={11}

                                                >
                                                    <Marker position={center} />
                                                </GoogleMap>

                                            </div>
                                        </div>
                                        <NavLink to={'/contact'} className='w-3/5 px-8 py-2 mt-8 text-xl text-center text-white transition-all duration-200 shadow-xl bg-secondary md:w-2/5 rounded-xl hover:opacity-80 hover:scale-110'>
                                            Contactanos
                                        </NavLink>
                                    </div>

                                </div>

                            </Fade>
                        </div>
                    )}

            </div>
            <Footer />

        </div>);

}

export default App;
