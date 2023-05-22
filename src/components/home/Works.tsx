import React from 'react'

const Works = () => {
    return (
        <div className='container mx-auto p-8 xl:p-20 mb-8 '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='mb-8'>
                    <h1 className='font-bold text-[40px]'>NUESTROS TRABAJOS</h1>
                    <p className='text-xl text-gray-500'>
                        Podemos ver algunos de nuestros últimos trabajos publicados en la web
                    </p>
                </div>
                
            </div>
            {/* WORKS */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                <div className='flex flex-col gap-1 rounded-3xl'>
                    <div style={{backgroundImage: `url('images/automatismos/enrollable02.png')`}}className='cursor-pointer w-full active:scale-105 active:duration-100 rounded-2xl mb-2 h-[480px] 
                    object-cover transition-all duration-500 shadow-md w-full ease-in hover:bg-[length:1200px]  bg-center bg-[length:900px]' ></div>
                    <h3 className='text-2xl font-bold pl-2 mt-1'>Bomberos - Huelva</h3>
                    <p className='text-gray-500 pl-3 -mt-2 '>Puertas Enrollables </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
                    <div className='flex flex-col gap-1'>
                        <div style={{backgroundImage: `url('images/automatismos/puertaabatible01.png')`}}className='cursor-pointer w-full active:scale-105 active:duration-100 rounded-2xl mb-2 h-[208px] 
                         object-cover transition-all duration-500 shadow-md w-full ease-in hover:bg-[length:500px]  bg-center bg-[length:400px]' ></div>
                        <h3 className='text-2xl font-bold pl-2 '>Puerta Garaje - Huelva</h3>
                        <p className='text-gray-500 pl-3 -mt-2 '>Puertas Abatibles </p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div style={{backgroundImage: `url('images/automatismos/puertaabatible02.png')`}}className='cursor-pointer w-full active:scale-105 active:duration-100 rounded-2xl mb-2 h-[208px] 
                         object-cover transition-all duration-500 shadow-md w-full ease-in hover:bg-[length:500px]  bg-center bg-[length:400px]' ></div>
                        <h3 className='text-2xl font-bold pl-2 '>Urbanización - Huelva</h3>
                        <p className='text-gray-500 pl-3 -mt-2 '>Puertas Enrollables </p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div style={{backgroundImage: `url('images/automatismos/corredera03.png')`}}className='cursor-pointer w-full active:scale-105 active:duration-100 rounded-2xl mb-2 h-[208px] 
                         object-cover transition-all duration-500 shadow-md w-full ease-in hover:bg-[length:500px]  bg-center bg-[length:400px]' ></div>
                        <h3 className='text-2xl font-bold pl-2 '>Puerta Garaje - Huelva</h3>
                        <p className='text-gray-500 pl-3 -mt-2 '>Puertas Correderas </p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div style={{backgroundImage: `url('images/automatismos/seccionale01.png')`}}className='cursor-pointer w-full active:scale-105 active:duration-100 rounded-2xl mb-2 h-[208px] 
                         object-cover transition-all duration-500 shadow-md w-full ease-in hover:bg-[length:500px]  bg-center bg-[length:400px]' ></div>
                        <h3 className='text-2xl font-bold pl-2 '>Puerta Garaje - Huelva</h3>
                        <p className='text-gray-500 pl-3 -mt-2 '>Puertas Seccionales </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works