import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const Servicios = () => {
    return (
        <div className='bg-gray-200 p-8 flex flex-col items-center justify-center gap-8 py-16'>
            <h1 className='text-4xl font-semibold text-gray-800 tracking-normal'>NUESTROS SERVICIOS</h1>
            <div className='grid grid-cols md:grid-cols-4 items-center gap-12 text-xl md:text-lg md:text-xl text-gray-500'>
                <div className='transition-all duration-100 cursor-pointer hover:border-gray-500 border-2 hover:rounded-xl hover:shadow-2xl p-8 flex flex-col justify-center text-center'>
                    <img src="videportero.png" className='w-60 cursor-pointer' />
                    <h2 className='cursor-pointer pt-4 '>Cerrajeria</h2>
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
    )
}

export default Servicios