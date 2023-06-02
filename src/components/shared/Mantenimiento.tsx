import React from 'react'

const Mantenimiento = () => {
    return (
        <div className=' flex flex-col items-stretch bg-gray'>

            <div className='mt-24 flex flex-col items-center justify-center flex-1'>
                <div className='md:px-12   '>
                    <img src="/images/mantenimiento.png" />
                    <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-800 tracking-widest mt-4 md:ml-2 drop-shadow-2xl'>Próximamente</h1>
                    <h1 className='text-3xl font-bold text-center text-slate-800 mt-2 drop-shadow-2xl'>En construcción</h1>
                </div>
            </div>
        </div >
    )
}

export default Mantenimiento