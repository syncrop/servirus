
import './App.css';
import Header from './components/shared/Header';
import Hero from './components/home/Hero';
import Servicios from './components/home/Servicios';
import Works from './components/home/Works';
import Footer from './components/shared/Footer';
import { RiMessage2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import CookieConsent from "react-cookie-consent";

const Fade = require("react-reveal/Fade")


function App() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
  }
  const [loading, setLoading] = useState(false);
  const [enterContact, setEnterContact] = useState(false);

  useEffect(() => {
    setLoading(false);
    
  }, []);


  return (
    <div className=''>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar Cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B", textAlign: "center" }}
        buttonStyle={{ backgroundColor: "#1961F1", color: "#ffffff", fontSize: "18px" }}
        expires={150}
        declineButtonText="Rechazar"
        declineButtonClasses='bg-header hover:opacity-80 transition-all duration-200'
        buttonClasses="bg-header hover:opacity-80 transition-all duration-200"
        enableDeclineButton
      >
        Este sitio web utiliza cookies para la mejora de experiencia de usuario{" "} <Link to='/cookies' className='text-gray-500 cursor-pointer'>Para mas información</Link>
      </CookieConsent>
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
            </Fade>
              <Footer />
              <div className={`flex flex-row bg-secondary shadow-2xl text-white fixed right-6 bottom-8 
                md:right-8  text-4xl border-2 rounded-full border-gray-600 px-3 py-3 xl:mx-36  transition-all duration-150
                cursor-pointer  active:bg-gray-400`} onMouseEnter={() => setEnterContact(true)} onMouseLeave={() => setEnterContact(false)} onClick={routeChange}>
                <RiMessage2Line />
                  <p className={`transition-all duration-500 text-2xl ease-in ${enterContact ? 'opacity-100 w-full' : 'opacity-0 w-0'} mt-1 ml-1  text-white`}>Contactanos</p>
              </div>
            
          </div>
        )}
    </div>
  );
}

export default App;
