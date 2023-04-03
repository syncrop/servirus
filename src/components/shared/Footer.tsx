import React from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className='bg-footer p-8 xl:py-20 xl:px-32'>
            <div className='flex items-center xl:px-12 justify-between border-b border-gray-500 broder-w pb-8'>
                <div className='w-1/6'>
                    <a href="#" className='text-2xl relative p-1  text-white z-10 bg-footer'>
                        Servirus<span className='text-primary text-5xl'>.</span>{" "}
                        <RiCheckboxBlankCircleFill className='hidden md:flex absolute -left-3 bottom-5 z-10 md:-bottom-3 text-primary md:-z-10' />
                    </a>
                </div>
                <div></div>
            </div>
            <div className='mt-8 justify-center xl:px-12'>
                <h3 className='text-lg font-bold text-white'>Compañia</h3>
                <nav className='mt-2 flex flex-col md:flex-row pl-8 md:pl-2 md:items-center gap-8 md:gap-20 '>
                    <a href="" className='text-sm text-gray-300 hover:text-white transition-color'>Sobre Nosotros</a>

                    <a href="" className='text-sm text-gray-300 hover:text-white'>Servicios</a>

                    <a href="" className='text-sm text-gray-300 hover:text-white'>Contacto</a>
                </nav>
            </div>
            <div className='w-full mt-10 text-sm text-gray-400 text-center'>
                <p>© syncropdev 2023 - All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer