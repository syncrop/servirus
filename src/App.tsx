
import './App.css';
import Header from './components/shared/Header';
import Hero from './components/home/Hero';
import Servicios from './components/home/Servicios';
import Works from './components/home/Works';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import { RiMessage2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
const Fade = require("react-reveal/Fade")


function App() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
  }
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  return (
    <div className=''>

      <ScrollToTop />
      <Header />
      {loading ? (
        <div className='w-full pt-36 flex flex-col items-center'>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>
        </div>
      )
        : (
          <div>
            <Fade>

              <Hero />

              <Servicios />
              <Works />
              <Footer />
              <div className=' bg-secondary shadow-2xl text-white fixed right-6 bottom-8 -rotate-12
        md:right-8 text-red text-4xl border-2 rounded-full border-gray-600 px-3 py-3 xl:mx-36
        cursor-pointer hover:scale-125 transition-all delay-100 active:bg-gray-400' onClick={routeChange}>
                <RiMessage2Line className='animate-pulse' />
              </div>
            </Fade>
          </div>
        )}
    </div>
  );
}

export default App;
