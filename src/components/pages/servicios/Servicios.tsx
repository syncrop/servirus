import React, { useEffect, useState } from 'react'
import ScrollToTop from '../../shared/ScrollToTop'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import CookieConsent from 'react-cookie-consent';
import { Link, useParams } from 'react-router-dom';
import { Automatismos } from '../../../data/Automatismos';
import { RiPlayCircleFill} from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, HashNavigation } from "swiper";
import Player from '../../shared/Player';

const Fade = require("react-reveal/Fade")

const createInitialItem = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
        items.push({
            id: i,
            showPlay: false
        });
    }
    return items
}

const createInitialSwiper = () => [{src: null, type: null}];

const Servicios = () => {
    const path = window.location.pathname.split('/').pop();

    const [loading, setLoading] = useState(false);
    const [viewItem, setViewItem] = useState(createInitialItem())
    const [viewSwiper, setViewSwiper] = useState(createInitialSwiper())

    useEffect(() => {
        setViewItem(createInitialItem());
        setViewSwiper(createInitialSwiper())
    }, [path]);

    const { tipo, subtipo } = useParams();
    const url = subtipo ? `${tipo}/${subtipo}` : tipo;


    const handleViewItem = (index: number, showPlay = false) => setViewItem([{
        id: index,
        showPlay: showPlay
    }]);

    const handleViewSwiper = (obj: any) => setViewSwiper(obj); 

    const showFile = (obj: any) => {
        return obj && obj.type === 'mp4' ? <Player file={obj.src}/>  : <img className=' px-14 pt-6 pb-12  max-h-[630px] ' src={obj.src} alt=""  />;
    }; 
    

    return (
        <div className=' min-h-screen flex flex-col items-stretch '>
            <ScrollToTop />
            <Header />
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

            <div className='flex-1 h-full pt-36 pb-24 flex flex-col items-center justify-start'>
                {loading ? (
                    <div className='w-full pt-20 flex flex-col items-center'>
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
                        <div className='flex flex-col gap-4 2xl:mx-64'>
                            <Fade>
                                {Automatismos.map((item) => item.id && item.id === url ?
                                    <div className='container' >
                                        <h1 className='font-bold text-4xl lg:text-5xl text-center'>{item.name}</h1>
                                        
                                        <div className='my-10  flex flex-col lg:flex-row lg:h-[620px]'>
                                            <div className={`flex max-w-full flex-col  lg:w-9/12 2xl:w-4/6 `}>
                                            {
                                                item.img && item.img[0].files.length > 0 ?  
                                                <div>
                                                    <Fade left>
                                                        <h1 className='text-3xl text-center font-semibold text-black'>{!viewSwiper[0].src ? item.img[0].desc : item.img[0].desc}</h1>
                                                        <div className='flex h-full '>
                                                        <Swiper
                                                            spaceBetween={30}
                                                            hashNavigation={{
                                                            watchState: true,
                                                            }}
                                                            pagination={{
                                                            clickable: true,
                                                            }}
                                                            navigation={true}
                                                            modules={[Pagination, Navigation, HashNavigation]}
                                                            className="mySwiper"
                                                        >
                                                            {
                                                                !viewSwiper[0].src ? <div>
                                                                    {
                                                                        item.img[0].files.map((file, index) => 
                                                                        <SwiperSlide data-hash={`slide${index}`} >
                                                                            { () =>  showFile(file)}
                                                                        </SwiperSlide>
                                                                        )
                                                                    }
                                                                </div>
                                                                : <div>
                                                                    {
                                                                      viewSwiper.map((file, index) => <div>
                                                                          <SwiperSlide data-hash={`slide${index}`} >
                                                                              { () =>  showFile(file)}
                                                                          </SwiperSlide>
                                                                      </div>
                                                                      )
                                                                    }
                                                                </div>
                                                            }
                                                        </Swiper>
                                                        </div>
                                                    </Fade>
                                                </div>
                                             : '' 
                                            }
                                            </div>
                                           
                                            <div className='flex flex-col md:flex-row lg:flex-col md:w-full lg:w-3/12 2xl:w-2/6 mt-10 lg:mt-0  gap-y-4 2xl:px-20'>
                                            <Fade right >
                                            
                                                { item.img && item.img.map((img, index) => 
                                                    <div className='w-full mx-1 lg:mx-0  rounded-md bg-im active:scale-105 transition-all duration-100 select-none	' 
                                                    onMouseEnter={() => handleViewItem(index, true)}
                                                    onMouseLeave={() => handleViewItem(index, false)} 
                                                    onClick={() => handleViewSwiper(img.files)}>
                                                        {
                                                            img.desc ? 
                                                                <div>
                                                                    <div 
                                                                        style={{backgroundImage: `url(${img.src})`}} className="w-full ease-in hover:bg-[length:500px]  hover:grayscale-[0.5] bg-center bg-[length:350px] h-44  transition-all duration-500 
                                                                        lg:mx-auto border-[3px] border-black rounded-2xl shadow-xl cursor-pointer" >
                                                                        <p className={` text-center mt-12 h-full text-3xl text-white  font-bold`}><span className='flex w-full place-content-center'>
                                                                            <RiPlayCircleFill className={`${viewItem.find(item => item.id === index)?.showPlay ? 'visible' : 'invisible'} 
                                                                            
                                                                            transition-opacity ease-in duration-500 text-header text-6xl rounded-full bg-white`}/></span></p>
                                                                        
                                                                    </div>       
                                                                    <p className='text-center mt-1 text-xl font-bold'>{img.desc}</p>
                                                                </div>
                                                            : <div></div>
                                                        }
                                                </div>
                                                
                                                )}
                                            </Fade>

                                            </div>
                                        </div>
                                        <div className='mt-32 lg:mt-4 w-full text-lg text-justify'>
                                            <Fade left cascade>
                                                <div>
                                                    <h1 className='px-6 text-black text-3xl pb-2'>Descripción</h1>
                                                    {item.description.map(desc => <p  className='px-6 text-gray-700  '>{desc}</p>)}
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                    : <div className='hidden'></div>)}
                            </Fade>
                        </div>
                    )}
            </div>
            <Footer />
        </div>
    )
}

export default Servicios

