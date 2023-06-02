import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export const SubMenu = ({ list, closeEvent }) => {
  return (
    <div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="animate fade absolute  z-10  md:ml-48 -mt-[13.7rem] md:-mt-8 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none">
          {list.map((item) => (
            <div className="px-1 py-1 " key={item.name}>
              <Menu.Item>
                {({ active, close }) =>
                  item.submenu ? (
                    <Menu as="div" className="">
                      <Menu.Button
                        className={`${
                          active ? "bg-gray-200 text-gray-700" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm focus:bg-gray-200`}
                      >
                        {item.name}
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
                        <Menu.Items className="animate fade absolute  z-10 ml-28 w-[135px]  md:ml-48 -mt-[8rem] md:-mt-8 md:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none">
                          {item.submenu.map((item) => (
                            <div className="px-1 py-1 ">
                              <Menu.Item>
                                {({ active }) =>
                                  item.submenu ? (
                                    <>
                                      <SubMenu link={item.submenu} />
                                    </>
                                  ) : (
                                    <NavLink
                                      to={item.url}
                                      onClick={closeEvent}
                                      className={`${
                                        active
                                          ? "bg-gray-200 text-gray-700"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      {item.name}
                                    </NavLink>
                                  )
                                }
                              </Menu.Item>
                            </div>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <NavLink
                      to={item.url}
                      onClick={closeEvent}
                      className={`${
                        active ? "bg-gray-200 text-gray-700" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.name}
                    </NavLink>
                  )
                }
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </div>
  );
};

export default SubMenu;
