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
    <div className=' min-h-screen flex flex-col items-stretch'>
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
            <div className='flex flex-col gap-4 xl:px-40 container cursor-default'>

              <h1 className='font-bold text-4xl md:text-5xl text-center'>CONTACTANOS</h1>
              <div className='flex flex-col px-8 mt-4 lg:flex-row gap-8'>
                <div className='  lg:pl-40 lg:w-3/4 px-8  rounded-lg '>
                  <Fade left >
                  {/* #e4fbcb */}
                    <div className='h-1/4   border-gray-300 flex flex-row border-2 rounded-lg mb-4 shadow-lg'>
                      <div className='h-full flex flex-col w-[130px]  px-4 py-4 '>
                        <RiUser3Line className='h-full w-full   px-4 py-4 rounded-full ' />
                      </div>
                      <div className='h-full flex flex-col w-full   justify-center self-center'>
                        <h1 className='text-2xl md:text-3xl font-bold italic tracking-wide'>Jimmy</h1>
                        <h1 className='text-2xl text-gray-700 flex flex-row'><RiPhoneFill className='mt-1 text-green-700 mr-1' />678 39 27 81</h1>
                      </div>
                    </div>
                  </Fade>
                  <Fade left delay={300}>
                    <div className='h-1/4  border-gray-300 flex flex-row border-2 rounded-lg mb-4 shadow-lg'>
                      <div className='h-full flex flex-col w-[130px]  px-4 py-4 '>
                        <RiUser3Line className='h-full w-full   px-4 py-4 rounded-full ' />
                      </div>
                      <div className='h-full flex flex-col w-full   justify-center self-center'>
                        <h1 className='text-2xl md:text-3xl font-bold italic tracking-wide'>Cosmin</h1>
                        <h1 className='text-2xl text-gray-700 flex flex-row'><RiPhoneFill className='text-green-700 mt-1 mr-1' />654 40 62 17</h1>
                      </div>
                    </div>
                  </Fade>
                  <Fade left delay={600}>
                    <div className='h-1/4  border-gray-300 flex flex-row border-2 rounded-lg mb-4 shadow-lg'>
                      <div className='h-full flex flex-col w-[130px]  px-4 py-4 '>
                        <RiUser3Line className='h-full w-full    px-4 py-4 rounded-full ' />
                      </div>
                      <div className='h-full flex flex-col w-full   justify-center self-center'>
                        <h1 className='text-2xl md:text-3xl font-bold italic tracking-wide'>Mario</h1>
                        <h1 className='text-2xl text-gray-700 flex flex-row'><RiPhoneFill className=' text-green-700 mt-1   mr-1' />633 27 35 17</h1>
                      </div>
                    </div>
                  </Fade>
                  <Fade left delay={900}>
                    <div className='h-1/4  border-gray-300 flex flex-row border-2 rounded-lg mb-4 shadow-lg'>
                      <div className='h-full flex flex-col w-[130px]  px-4 py-4 '>
                        <RiUser3Line className='h-full w-full   px-4 py-4 rounded-full ' />
                      </div>
                      <div className='h-full flex flex-col w-full   justify-center self-center'>
                        <h1 className='text-2xl md:text-3xl font-bold italic tracking-wide'>Julia</h1>
                        <h1 className='text-2xl text-gray-700 flex flex-row'><RiPhoneFill className='mt-1  text-green-700 mr-1' />603 54 89 11</h1>
                      </div>
                    </div>
                  </Fade>
                </div>
                {/***********************************************/}
                <Fade right >
                  <div className='justify-center flex flex-col lg:mt-10 lg:w-1/4 mx-8  px-8 py-8 rounded-lg bg-[#e4fbcb]  border-gray-300 border-2 shadow-xl gap-12'>
                    <div className='text-center self-center'>
                      <img src='logo.svg' className='w-[150px] ' />
                    </div>
                    <div className='text-center '>
                      <RiUserLocationFill className='text-4xl w-full' />
                      <h4 className='text-lg font-semibold'>Localización</h4>
                      <p className='text-xs md:text-sm  text-center text-gray-700'>Polígono Dominicano, San Juan del Puerto Huelva</p>
                    </div>
                    <div className='text-center '>
                      <RiCommunityFill className='text-4xl w-full' />
                      <p className='text-lg text-center text-gray-700'>servi.rus@live.com</p>
                      <p className='text-lg text-center text-gray-700'>959 36 78 34</p>

                    </div>
                  </div>
                </Fade>

              </div>
              <div className='fixed -z-10 bg-gray-500 w-full '>

              </div>

            </div>
          )}
      </div>
      <Footer />

    </div>
  )
}

export default Contact