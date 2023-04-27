import React, { useState, Fragment } from 'react'
import { RiCheckboxBlankCircleFill, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'

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
          <Menu as="div" className="">
            <Menu.Button className="hover:scale-110 duration-100 hover:text-primary " onClick={() => setShowServicios(!showServicios)}>
              Servicios
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="animate fade absolute  z-10 -ml-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/servicios/cerrajeria"
                        className={`${active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Cerrajeria
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/servicios/presion"
                        className={`${active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Grupo de presión
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/servicios/automatismos"
                        className={`${active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Automatismo
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/servicios/domotica"
                        className={`${active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Domótica
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>

              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div>
          <Menu as="div" className="">
            <Menu.Button className="hover:scale-110 duration-100 hover:text-primary " onClick={() => setShowServicios(!showServicios)}>
              Mantenimientos
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="animate fade absolute  z-10 -ml-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/mantenimientos/puertas"
                        className={`${active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Puertas de Garaje
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/mantenimientos/presion"
                        className={`${active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Grupo de presión
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>

              </Menu.Items>
            </Transition>
          </Menu>
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