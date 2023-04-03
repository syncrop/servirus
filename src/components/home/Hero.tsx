import React from 'react'
import { RiCheckboxBlankCircleFill, RiArrowRightCircleLine, RiCheckboxBlankFill } from "react-icons/ri";

const Hero = () => {
    return (
        <section className=' grid grid-cols-1 md:grid-cols-9 container mx-auto md:pb-20 pt-28 md:pt-24'>
            {/* Information */}
            <div className='flex md:hidden  justify-center object-cover relative'>
                <img src="servirus-inicio.png" className='w-72 h-72 mx-auto ' />
                <RiCheckboxBlankFill className='absolute top-12 shadow-lg  
                text-[230px] text-gray-300 p-[.5px] bg-gray-300 -z-10 border-[8px] border-secondary rounded-2xl' />
            </div>
            <div className='col-span-5 pt-4 pb-4  md:pt-44 justify-center text-center'>
                <div className='flex flex-col gap-6 md:gap-12'>
                    <div className=''>
                        <h1 className='text-6xl font-bold leading-[6.5rem] pl-2  drop-shadow-xl tracking-wide'>Servirus</h1>
                        <span className='text-secondary relative p-2 border-8 border-secondary text-4xl font-bold 
                            drop-shadow-sm tracking-wide'>
                            Automatismos
                            <RiCheckboxBlankCircleFill className='text-white text-sm absolute -left-4 -top-4
                         p-2 bg-secondary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-white text-sm absolute -right-4 -top-4
                         p-2 bg-secondary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-white text-sm absolute -left-4 -buttom-4
                         p-2 bg-secondary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-white text-sm absolute -right-4 -buttom-4
                         p-2 bg-secondary rounded-full box-content' />
                        </span>
                    </div>
                    <p className='pt-2 px-8 text-gray-500 text-2xl leading-[2.5rem] drop-shadow-xl'>Todas las soluciones para su
                        hogar y empresa</p>
                    <div className='flex flex-col lg:flex-row items-center gap-4 justify-center'>
                        <button className='bg-secondary text-white py-2 px-8 rounded-xl text-xl hover:opacity-80 hover:scale-110 transition-all duration-200 shadow-xl'>
                            Contactanos
                        </button>
                        <button className='flex items-center gap-1 py-2 px-8  text-xl hover:scale-110  transition-all duration-200'>
                            <RiArrowRightCircleLine className='text-3xl text-secondary drop-shadow-xl' /> Ver mas
                        </button>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex col-span-4 md:mr-4  pt-24  object-cover relative'>
                <img src="servirus-inicio.png" className='w-96 h-96 ml-2' />
                <RiCheckboxBlankFill className='absolute md:top-[7.5rem] lg:top-[7rem] shadow-lg  
                md:text-[342px] lg:text-[400px] text-gray-300 p-[.5px] bg-gray-300 -z-10 border-[8px] border-secondary rounded-2xl' />
            </div>
        </section>);

}

export default Hero