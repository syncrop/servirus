import React from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-footer p-8 xl:py-16 xl:px-32'>
            <div className='flex items-center xl:px-12 justify-between border-b border-gray-500 broder-w pb-8 servirus'>
                <div className='w-1/6'>
                <NavLink to='/' className='text-3xl  relative  z-30 text-headertext  servirus tracking-wider	font-[550]	flex flex-row'>
                    <img src='/logoH.svg' className='w-[60px] mr-2 ' alt=''/> SERVIRUS <span className='text-headertext text-sm absolute top-9 left-[4.9rem] tracking-wider'>AUTOMATISMOS</span>
                </NavLink>
                </div>
                <div></div>
            </div>
            <div className='mt-8 justify-center xl:px-12 text-headertext'>
                <h3 className='text-lg font-bold text-gray-200'>Compañia</h3>
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