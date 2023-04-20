import React from 'react'
import { RiCheckboxBlankCircleFill, RiArrowRightCircleLine, RiCheckboxBlankFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <section className=' grid grid-cols-1 md:grid-cols-9 container mx-auto md:pb-20 pt-28 md:pt-24'>
            {/* Information */}
            <div className='flex md:hidden  justify-center object-cover relative mt-4'>
                <img src="servirus2.jpeg" className='w-80 mx-auto border-[5px] border-black rounded-2xl shadow-2xl' />
            </div>
            <div className='col-span-5 pt-4 pb-4  md:pt-44 justify-center text-center'>
                <div className='flex flex-col gap-6 md:gap-12'>
                    <div className=''>
                        <h1 className='text-6xl md:text-8xl font-bold leading-[6.5rem] pl-2  drop-shadow-xl tracking-wide md:pb-6'>Servirus</h1>
                        <span className='text-black relative p-2 border-8 border-black text-4xl font-bold 
                            drop-shadow-sm tracking-wide'>
                            Automatismos
                            <RiCheckboxBlankCircleFill className='text-white text-sm absolute -left-4 -top-4
                         p-2 bg-black rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-white text-sm absolute -right-4 -top-4
                         p-2 bg-black rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-white text-sm absolute -left-4 -buttom-4
                         p-2 bg-black rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-white text-sm absolute -right-4 -buttom-4
                         p-2 bg-black rounded-full box-content' />
                        </span>
                    </div>
                    <div>
                        <p className='pt-8 px-8 text-gray-500 text-2xl md:text-3xl leading-[2.5rem] drop-shadow-xl'>Abriendo puertas hacia el futuro</p>
                        <p className='mt-4 px-8 text-gray-500 text-xl md:text-xl leading-[2.5rem] drop-shadow-xl'>Somos una empresa especializada en el montaje y
                            mantenimiento de puertas automáticas, domotica  y equipos de bombeo de agua . Podemos aconsejarles y colocarles el sistema que mejor se ajuste a sus necesidades.</p>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-4 justify-center'>
                        <NavLink to='/contact' className='bg-secondary text-white py-2 px-8 rounded-xl text-xl hover:opacity-80 hover:scale-110 transition-all duration-200 shadow-xl'>
                            Contactanos
                        </NavLink>

                        <button className=' flex items-center gap-1 py-2 px-8  text-xl hover:scale-110  transition-all duration-200'>
                            <RiArrowRightCircleLine className='text-3xl text-black drop-shadow-xl' /> Ver mas
                        </button>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex col-span-4 lg:mr-2  pt-24   object-cover relative items-center'>
                <img src="servirus2.jpeg" className='w-auto h-72 ml-2 lg:h-96 border-[5px] border-black rounded-2xl shadow-2xl' />
                {/* <RiCheckboxBlankFill className='absolute top-[7.5rem] lg:top-[7rem] shadow-lg  
                md:text-[342px] lg:text-[400px]  text-gray-300 p-[.5px] bg-gray-300 -z-10 border-[8px] border-secondary rounded-2xl' /> */}
            </div>
        </section>);

}

export default Hero