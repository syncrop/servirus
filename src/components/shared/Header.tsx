import React, { useState } from 'react'
import { RiCheckboxBlankCircleFill, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServicios, setShowServicios] = useState(false);
  return (
    <header className='shadow-xl bg-header fixed flex items-center w-full justify-between lg:justify-start pb-2 px-8 h-24 z-50'>
      <div className='lg:w-1/6 text-center mb-4 '>
        <NavLink to='/' className='text-3xl font-bold relative p-2  bg-header z-30 text-white'>
          Servirus <span className='text-primary text-6xl '>.</span>{" "}
          <RiCheckboxBlankCircleFill className='absolute -left-4 -bottom-4 text-primary -z-10' />
        </NavLink>
      </div>
      <nav className={`fixed  bg-header z-20 text-gray-200 w-[80%] md:w-[40%] lg:w-full h-full ${showMenu ? 'left-0' : '-left-full'} 
        top-0 lg:static flex-1 flex flex-col lg:flex-row items-center justify-center gap-10
        transition-all duration-300`}>
        <NavLink to='/' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white text-lg" :
            'hover:scale-110 duration-100 hover:text-primary '
        }>
          Inicio</NavLink>
        <div>
          <button className='hover:scale-110 duration-100 hover:text-primary ' onClick={() => setShowServicios(!showServicios)}>
            Servicios
          </button>
          <div className={`${showServicios ? 'absolute  z-10 -ml-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none ' : 'hidden'} `}
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
            <div className='py-1 ' role="none" >
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:duration-500 active:bg-gray-100 active:duration-200 active:text-gray-500" role="menuitem" id="menu-item-0">Cerrajeria</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:duration-500 active:bg-gray-100 active:duration-200 active:text-gray-500" role="menuitem" id="menu-item-1">Grupo de presión</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:duration-500 active:bg-gray-100 active:duration-200 active:text-gray-500" role="menuitem" id="menu-item-2">Automatismo</a>
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:duration-500 active:bg-gray-100 active:duration-200 active:text-gray-500" role="menuitem" id="menu-item-3">Domótica</a>
            </div>
          </div>
        </div>
        <NavLink to='/trabajos' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white text-lg" :
            'hover:scale-110 duration-100 hover:text-primary '
        }>Trabajos</NavLink>
        <NavLink to='/about' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white text-lg" :
            'hover:scale-110 duration-100 hover:text-primary '
        }>Sobre Nosotros</NavLink>
        <NavLink to='/contact' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-white text-lg" :
            'hover:scale-110 duration-100 hover:text-primary '
        }>Contacto</NavLink>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className='text-2xl px-2 pt-2 lg:hidden text-white'>
        {showMenu ? <RiCloseLine /> : <RiMenuLine />}
      </button>
    </header>
  );
}

export default Header