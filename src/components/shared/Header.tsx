import React, { useState, Fragment } from 'react'
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'
import SubMenu from './SubMenu.js';

const automatismosSubMenu = [
  { name: 'Puertas Abatibles', submenu: [{ name: 'Puertas de Garaje', url: '/servicios/automatismos/abatibles/garaje' }, { name: 'Portales', url: '/servicios/automatismos/abatibles/portales' }] },
  { name: 'Puertas Basculantes', url: '/servicios/automatismos/basculantes' },
  { name: 'Puertas Correderas', url: '/servicios/automatismos/correderas' },
  { name: 'Puertas Enrollables', url: '/servicios/automatismos/enrollables' },
  { name: 'Puertas Seccionales', url: '/servicios/automatismos/seccionales' },
  { name: 'Lona Rápida', url: '/servicios/automatismos/lona' },
]
const gPresionSubMenu = [
  { name: 'Agua Potable', url: '/servicios/gpresion/agua' },
  { name: 'Bomba Achique', url: '/servicios/gpresion/achique' },
  { name: 'Filtración de agua', url: '/servicios/gpresion/filtro-agua' },

]
const domoticaSubMenu = [
  { name: 'Porteros GSM', url: '/servicios/domotica/porteros-gsm' },
  { name: 'Cámaras', url: '/servicios/domotica/camaras' },
  { name: 'Iluminación', url: '/servicios/domotica/iluminacion' },
  { name: 'Llaves NFC', url: '/servicios/domotica/llaves-nfc' },
]
const cerrajeriaSubMenu = [
  { name: 'Acero Básico', url: '/servicios/cerrajeria/acero-basico' },
  { name: 'Acero Inoxidable', url: '/servicios/cerrajeria/acero-inoxidable' },
]
const serviciosMenu = [
  { name: 'Automatismos', submenu: automatismosSubMenu },
  { name: 'Grupo de Presión', submenu: gPresionSubMenu },
  { name: 'Domótica', submenu: domoticaSubMenu },
  { name: 'Cerrajería', submenu: cerrajeriaSubMenu },
]
const mantenimientosMenu = [
  { name: 'Puertas de Garaje', url: '' },
  { name: 'Grupo de Presión', url: '' },
  { name: 'Porteros GSM', url: '' },
  { name: 'Bombas de Achique', url: '' },
]

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServicios, setShowServicios] = useState(false);


  return (
    <div>

      <header className='shadow-xl bg-header fixed flex items-center w-full justify-between lg:justify-start pb-2 px-8 h-24 z-50'>
        <div className='lg:w-1/6 text-center mb-2 '>
          <NavLink to='/' className='text-4xl  relative bg-header z-30 text-headertext servirus tracking-wider	font-[550]	flex flex-row'>
            <img src='/logoH.svg' className='w-[65px] mr-2 ' alt=''/> SERVIRUS <span className='text-headertext text-lg absolute top-9 left-[5.3rem] tracking-wider'>AUTOMATISMOS</span>{" "}
          </NavLink>
        </div>
        <nav className={`fixed  bg-header z-20 text-gray-200 w-[80%] md:w-[40%] lg:w-full h-full ${showMenu ? 'left-0' : '-left-full'} 
        top-0 lg:static flex-1 flex flex-col lg:flex-row items-center justify-center gap-10
        transition-all duration-300`}>
          <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white text-lg" :
              'hover:scale-110 duration-100 hover:text-headertext '
          }>
            Inicio</NavLink>
          <div>
            <Menu as="div">
              <Menu.Button className="hover:scale-110 duration-100 hover:text-headertext " >
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
                <Menu.Items className='animate fade absolute  z-10 -ml-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none '>
                  {serviciosMenu.map(item =>
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active, close }) => (
                          <Menu as="div" className="">
                            <Menu.Button className={`${active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm focus:bg-gray-200`} >
                              {item.name}
                            </Menu.Button>
                            {item.submenu ?
                              <SubMenu list={item.submenu} closeEvent={close} />
                              :
                              ''
                            }
                          </Menu>
                        )}
                      </Menu.Item>
                    </div>
                  )}
                </Menu.Items>

              </Transition>
            </Menu>
          </div>
          <div>
            <Menu as="div" className="">
              <Menu.Button className="hover:scale-110 duration-100 hover:text-headertext " onClick={() => setShowServicios(!showServicios)}>
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
                  {mantenimientosMenu.map(item =>
                    <div className="px-1 py-1 " key={item.name}>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink to={item.url}
                            className={`${active ? 'bg-gray-200 text-gray-700' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {item.name}
                          </NavLink>
                        )}
                      </Menu.Item>
                    </div>
                  )}
                </Menu.Items>

              </Transition>
            </Menu>
          </div>

          <NavLink to='/about' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white text-lg" :
              'hover:scale-110 duration-100 hover:text-headertext '
          }>Sobre Nosotros</NavLink>
          <NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white text-lg" :
              'hover:scale-110 duration-100 hover:text-headertext '
          }>Contacto</NavLink>
        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className='text-2xl px-2 pt-2 lg:hidden text-headertext'>
          {showMenu ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </header>

    </div>
  );
}

export default Header