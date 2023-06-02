import React, { useEffect, useState } from 'react'
import ScrollToTop from '../shared/ScrollToTop'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { RiCommunityFill, RiUserLocationFill, RiUser3Line, RiPhoneFill } from "react-icons/ri";
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';

const Fade = require("react-reveal/Fade")


const Contact = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {

  }, []);
  return (
    <div className='flex flex-col items-stretch min-h-screen '>
      <ScrollToTop />
      <Header />
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
      <div className='flex flex-col items-center justify-start flex-1 h-full pb-24 pt-36'>
        {loading ? (
          <div className='flex flex-col items-center w-full pt-20'>
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
            <div className='container flex flex-col gap-4 cursor-default xl:px-40'>
            <Fade top >
              <h1 className='text-4xl font-bold text-center 2xl:text-5xl'>CONTACTANOS</h1>
            </Fade>
              <div className='flex flex-col gap-8 px-8 mt-4 lg:flex-row'>
                <div className='px-8 rounded-lg lg:pl-40 lg:w-3/4'>
                  <Fade left >
                  {/* #e4fbcb */}
                    <div className='flex flex-row mb-4 border-2 border-gray-300 rounded-lg shadow-lg h-1/4'>
                      <div className='h-full flex flex-col w-[130px]  px-4 py-4 '>
                        <RiUser3Line className='w-full h-full px-4 py-4 rounded-full ' />
                      </div>
                      <div className='flex flex-col self-center justify-center w-full h-full'>
                        <h1 className='text-2xl italic font-bold tracking-wide md:text-3xl'>Jimmy</h1>
                        <h1 className='flex flex-row text-2xl text-gray-700'><RiPhoneFill className='mt-1 mr-1 text-green-700' />678 39 27 81</h1>
                      </div>
                    </div>
                  </Fade>
                  <Fade left delay={300}>
                    <div className='flex flex-row mb-4 border-2 border-gray-300 rounded-lg shadow-lg h-1/4'>
                      <div className='h-full flex flex-col w-[130px]  px-4 py-4 '>
                        <RiUser3Line className='w-full h-full px-4 py-4 rounded-full ' />
                      </div>
                      <div className='flex flex-col self-center justify-center w-full h-full'>
                        <h1 className='text-2xl italic font-bold tracking-wide md:text-3xl'>Cosmin</h1>
                        <h1 className='flex flex-row text-2xl text-gray-700'><RiPhoneFill className='mt-1 mr-1 text-green-700' />654 40 62 17</h1>
                      </div>
                    </div>
                  </Fade>
                  <Fade left delay={600}>
                    <div className='flex flex-row mb-4 border-2 border-gray-300 rounded-lg shadow-lg h-1/4'>
                      <div className='h-full flex flex-col w-[130px]  px-4 py-4 '>
                        <RiUser3Line className='w-full h-full px-4 py-4 rounded-full ' />
                      </div>
                      <div className='flex flex-col self-center justify-center w-full h-full'>
                        <h1 className='text-2xl italic font-bold tracking-wide md:text-3xl'>Mario</h1>
                        <h1 className='flex flex-row text-2xl text-gray-700'><RiPhoneFill className='mt-1 mr-1 text-green-700 ' />633 27 35 17</h1>
                      </div>
                    </div>
                  </Fade>
                  <Fade left delay={900}>
                    <div className='flex flex-row mb-4 border-2 border-gray-300 rounded-lg shadow-lg h-1/4'>
                      <div className='h-full flex flex-col w-[130px]  px-4 py-4 '>
                        <RiUser3Line className='w-full h-full px-4 py-4 rounded-full ' />
                      </div>
                      <div className='flex flex-col self-center justify-center w-full h-full'>
                        <h1 className='text-2xl italic font-bold tracking-wide md:text-3xl'>Julia</h1>
                        <h1 className='flex flex-row text-2xl text-gray-700'><RiPhoneFill className='mt-1 mr-1 text-green-700' />603 54 89 11</h1>
                      </div>
                    </div>
                  </Fade>
                </div>
                {/***********************************************/}
                <Fade right >
                  <div className='justify-center flex flex-col lg:mt-10 lg:w-1/4 mx-8  px-8 py-8 rounded-lg bg-[#e4fbcb]  border-gray-300 border-2 shadow-xl gap-12'>
                    <div className='self-center text-center'>
                      <img src='logo.svg' className='w-[150px] ' />
                    </div>
                    <div className='text-center '>
                      <RiUserLocationFill className='w-full text-4xl' />
                      <h4 className='text-lg font-semibold'>Localización</h4>
                      <p className='text-xs text-center text-gray-700 md:text-sm'>Polígono Dominicano, San Juan del Puerto Huelva</p>
                    </div>
                    <div className='text-center '>
                      <RiCommunityFill className='w-full text-4xl' />
                      <p className='text-lg text-center text-gray-700'>servi.rus@live.com</p>
                      <p className='text-lg text-center text-gray-700'>959 36 78 34</p>

                    </div>
                  </div>
                </Fade>

              </div>
              <div className='fixed w-full bg-gray-500 -z-10 '>

              </div>

            </div>
          )}
      </div>
      <Footer />

    </div>
  )
}

export default Contact