import React from 'react'

const Works = () => {
    return (
        <div className='container mx-auto p-8 xl:p-20 mb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='mb-8'>
                    <h1 className='font-bold text-[40px]'>Nuestros Trabajos</h1>
                    <p className='text-xl text-gray-500'>
                        Podemos ver algunos de nuestros últimos trabajos publicados en la web
                    </p>
                </div>
                <div className='mb-8 text-center justify-center my-auto'>
                    <button className='bg-secondary text-white py-2 px-8 rounded-xl text-xl hover:opacity-80 hover:scale-110 transition-all duration-200 shadow-xl'>Ver más trabajos</button>
                </div>
            </div>
            {/* WORKS */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex flex-col gap-1'>
                    <img src="puerta01.jpg" className='w-full rounded-3xl mb-2 h-[480px] object-cover' />
                    <p className='text-gray-500 pl-2'>Puerta Automática - Marzo, 2023</p>
                    <h3 className='text-2xl font-bold pl-2'>Ayamonte, Huelva</h3>
                    <p className='text-gray-800 pl-2'>Estructura de aluminio de ultima tecnología y últimas calidades. Puerta con motores de bajo consumo y alta resistencia.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
                    <div className='flex flex-col gap-1'>
                        <img src="portero01.webp" className='w-full rounded-3xl mb-2' />
                        <p className='text-gray-500 pl-2'>Puerta Automática - Febrero, 2023</p>
                        <h3 className='text-2xl font-bold pl-2'>Aljaraque, Huelva</h3>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <img src="puerta02.webp" className='w-full rounded-3xl mb-2' />
                        <p className='text-gray-500 pl-2'>Cámara Seguridad - Enero, 2023</p>
                        <h3 className='text-2xl font-bold pl-2'>Almonte, Huelva</h3>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <img src="camara01.jpeg" className='w-full rounded-3xl mb-2' />
                        <p className='text-gray-500 pl-2'>Cámara Seguridad - Noviembre, 2022</p>
                        <h3 className='text-2xl font-bold pl-2'>Almonte, Huelva</h3>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <img src="puerta03.jpg" className='w-full rounded-3xl mb-2 h-[180px] object-over' />
                        <p className='text-gray-500 pl-2'>Puerta Automática - Noviembre, 2022</p>
                        <h3 className='text-2xl font-bold pl-2'>Lepe, Huelva</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works