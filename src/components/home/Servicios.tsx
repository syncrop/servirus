import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';


const Servicios = () => {
    return (
        <div className='bg-gray-100  p-8 flex flex-col items-center justify-center gap-8'>
            <h1 className='text-4xl font-medium text-gray-800 tracking-normal'>Nuestros Servicios</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-12 text-xl md:text-lg md:text-xl text-gray-500'>
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
                <div className=' cursor-pointer justify-self-center  py-auto md:col-span-3'>
                    <NavLink to='/servicios' className='bg-secondary text-white py-2 px-8 rounded-xl text-xl hover:opacity-80 hover:scale-110 transition-all duration-200 shadow-xl 
                        cursor-pointer   justify-center flex flex-row gap-3'
                    >Ver más servicios</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Servicios