import React, { useEffect, useState } from 'react'
import ScrollToTop from '../shared/ScrollToTop'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { RiCommunityFill, RiUserLocationFill } from "react-icons/ri";

const Contact = () => {
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
            <div className='flex flex-col gap-4 md:px-40 container '>
              <h1 className='font-bold text-4xl text-center'>Contactanos</h1>
              <p className='text-2xl text-gray-500 text-center '>Puedes enviarnos un email como llamarnos en el número de teléfono que aparece abajo.</p>
              <div className='flex flex-row gap-8'>
                <div className=' mt-4 lg:w-3/4 bg-gray-200 px-8 py-8 rounded-lg shadow-xl'>
                  <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-12'>
                    <div className='flex flex-col'>
                      <label className='text-lg text-gray-800'>Nombre</label>
                      <input type="text" placeholder='Su Nombre' className='border-2 border-gray-800 rounded-lg px-2 py-2  bg-gray-100' />
                    </div>
                    <div className='flex flex-col'>
                      <label className='text-lg text-gray-800'>Apellidos</label>
                      <input type="text" placeholder='Su apellido' className='border-2 border-gray-800 rounded-lg px-2 py-2  bg-gray-100' />
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 justify-between mt-4 md:gap-12'>
                    <div className='flex flex-col md:w-full'>
                      <label className='text-lg text-gray-800'>Email</label>
                      <input type="email" placeholder='email@email.com' className='border-2 border-gray-800 rounded-lg px-2 py-2   bg-gray-100' />
                    </div>
                    <div className='flex flex-col md:w-full'>
                      <label className='text-lg text-gray-800'>Telefono</label>
                      <input type="phone" placeholder='677 777 777' className='border-2 border-gray-800 rounded-lg px-2 py-2  bg-gray-100' />
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-1 justify-between mt-4'>
                    <div className='flex flex-col w-full'>
                      <label className='text-lg text-gray-800'>Su mensaje</label>
                      <textarea className='border-2 border-gray-800 rounded-lg px-2 py-2 w-full bg-gray-100 w-full h-24' />
                    </div>
                  </div>
                  <div className='grid grid-cols-1'>
                    <p className='text-xs text-gray-500 mt-2 px-4'>Al enviar este formulario, acepta nuestros términos y condiciones y nuestra política de privacidad, que explica cómo podemos recopilar, usar y divulgar su información personal, incluso a terceros.</p>
                  </div>
                  <div className='grid grid-cols-1 text-center pt-4'>
                    <button className='bg-secondary w-2/5 text-white py-2 px-8 rounded-xl text-xl hover:opacity-80 hover:scale-110 transition-all duration-200 shadow-xl justify-self-center'>Enviar</button>
                  </div>
                </div>
                <div className='justify-center flex flex-col mt-4 lg:w-1/4 bg-gray-200 px-8 py-8 rounded-lg shadow-xl gap-12'>
                  <div className='text-center '>
                    <RiCommunityFill className='text-4xl w-full' />
                    <h4 className='text-lg font-semibold'>Servirus</h4>
                  </div>
                  <div className='text-center '>
                    <RiUserLocationFill className='text-4xl w-full' />
                    <h4 className='text-lg font-semibold'>Localización</h4>
                    <p className='text-xs md:text-sm  text-center text-gray-700'>Polígono Dominicano, San Juan del Puerto Huelva</p>
                  </div>
                  <div className='text-center '>
                    <RiCommunityFill className='text-4xl w-full' />
                    <h4 className='text-lg font-semibold'>Teléfono</h4>
                    <p className='text-lg text-center text-gray-700'>678 849 934</p>

                  </div>


                </div>

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