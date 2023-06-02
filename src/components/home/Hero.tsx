import React from 'react'
import { NavLink } from 'react-router-dom';

const Fade = require("react-reveal/Fade")

const Hero = () => {
    return (
        <section className='grid grid-cols-1 pt-24  md:grid-cols-9 md:pb-20 md:pt-24'>
            {/* Information */}
            <div className='relative flex justify-center w-full mx-auto lg:container max-h-96 md:hidden lg:mt-4'>
                <img src="servirus2.jpeg" className='w-full lg:w-80 object-cover  lg:mx-auto lg:border-[5px] lg:border-black lg:rounded-2xl shadow-2xl' />
            </div>
            <div className='container justify-center col-span-5 pt-4 pb-4 mx-auto text-center md:pt-36'>
                <div className='flex flex-col gap-6 md:gap-12'>
                    <div className=''>
                        <Fade top>
                            <h1 className='text-6xl md:text-8xl  mt-2  pl-2  drop-shadow-xl   flex flex-col  tracking-wide font-[500]'>SERVIRUS
                                <p className='text-black  flex -mt-3 text-2xl md:text-4xl justify-center font-[700] 
                            drop-shadow-sm tracking-wide servirus'>
                                    AUTOMATISMOS
                                </p>
                            </h1>
                        </Fade>
                    </div>
                    <Fade left>
                        <div>

                            <p className='pt-8 px-8 text-gray-700 text-left md:text-center font-[500] text-2xl md:text-3xl md:leading-[2.5rem] drop-shadow-xl'>Somos una empresa especializada en el montaje y
                                mantenimiento de puertas automáticas, domotica  y equipos de bombeo de agua . Podemos aconsejarles y colocarles el sistema que mejor se ajuste a sus necesidades.</p>

                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
                            <NavLink to='/contact' className='px-20 py-2 text-2xl text-white transition-all duration-200 shadow-xl bg-secondary rounded-xl hover:opacity-80 hover:scale-110'>
                                Contactanos
                            </NavLink>

                            {/* <button className='flex items-center gap-1 px-8 py-2 text-xl transition-all duration-200  hover:scale-110'>
                                <RiArrowRightCircleLine className='text-3xl text-black drop-shadow-xl' /> Ver mas
                            </button> */}
                        </div>
                    </Fade>

                </div>
            </div>
            <div className='items-center justify-center hidden object-cover col-span-4 pt-24 md:flex'>
                <img src="servirus2.jpeg" className='w-auto  lg:h-96 border-[5px] border-black rounded-2xl shadow-2xl' />
                {/* <RiCheckboxBlankFill className='absolute top-[7.5rem] lg:top-[7rem] shadow-lg  
                md:text-[342px] lg:text-[400px]  text-gray-300 p-[.5px] bg-gray-300 -z-10 border-[8px] border-secondary rounded-2xl' /> */}
            </div>
        </section>);

}

export default Hero