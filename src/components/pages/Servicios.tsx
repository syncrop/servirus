
import '../../App.css';
import Header from '../shared/Header';
import Hero from '../home/Hero';
import Servicios from '../home/Servicios';
import Works from '../home/Works';
import Footer from '../shared/Footer';
import ScrollToTop from '../shared/ScrollToTop';



function App() {
    return (
        <div className=''>
            <ScrollToTop />
            <Header />
            <div className='h-[75vh] pt-36 pb-24 px-8 flex flex-col items-center justify-center gap-8'>
                <h1 className='text-4xl font-medium text-gray-800 tracking-normal'>Nuestros Servicios</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-12 text-xl md:text-lg md:text-xl text-gray-500'>
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
                    <div className='flex flex-col justify-center text-center pt-2 cursor-pointer h-full'>
                        <img src="otros.jpg" className='w-64 ' />
                        <h2 className='cursor-pointer  hover:scale-110 transition-all duration-100 '>Otros</h2>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
