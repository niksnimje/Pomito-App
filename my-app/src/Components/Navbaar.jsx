import React, { useContext, useState } from 'react';
import { BsWindowSplit } from "react-icons/bs";
import { LuTimer } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { LuListTree } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ThemeContext } from '../Context/TheamContext';

function Navbaar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const menuData = [
    {
      icon: <LuTimer />, menuName: "Timer", path: "/"
    },
    {
      icon: <GoTasklist />, menuName: "Tasks", path: "/tasks"
    },
    {
      icon: <LuListTree />, menuName: "Activty", path: "/activty"
    },
    {
      icon: <MdOutlinePersonOutline />, menuName: "Profile", path: "/profile"
    }
  ];

  const menuData2 = [
    {
      icon: <LuListTree />, menuName: "General", path: "/general"
    },
    {
      icon: <MdOutlinePersonOutline />, menuName: "Appearance", path: "/appearance"
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div
        className="fixed z-50 top-4 left-[80%] sm:left-[40%] md:left-[30%] lg:left-[15%]"
      >
        <button
          className={clsx(
            'font-medium text-xl px-2 py-2',
            theme === 'obsidia' && 'text-white',
            theme === 'one-dark' && 'text-white',
            theme === 'toff' && 'text-[#665442]',
            theme === 'stone' && 'text-black'
          )}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <BsWindowSplit />
        </button>
      </div>

      {/* Sidebar */}
     <div
  className={clsx(
    `fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform transform ease-in-out duration-300
     ${isOpen ? 'translate-x-0' : '-translate-x-full'}`,
    theme === 'obsidia' && 'text-white bg-[#292524] border-[#44403c] border',
    theme === 'one-dark' && 'text-white bg-[#1D202A] border-[#333842] border',
    theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
    theme === 'stone' && 'text-black bg-white'
  )}
>
        <div className='flex space-x-3 items-center'>
          <h5 className="font-semibold text-white uppercase menu_box h-[40px] w-[40px] flex items-center justify-center font-[inter] bg-black rounded-[8px]">
            P
          </h5>
          <div>
            <p className='text-[14px] font-bold'>Pomito</p>
            <span className='text-[14px] text-[var(--text-ligth)]'>v.1.0.0</span>
          </div>
        </div>

        {/* Menu Items */}
        <ul className="space-y-2 font-medium mt-6">
          <h3 className='text-[14px] font-[inter] font-bold'>General</h3>
          {menuData.map((el, index) => (
            <li key={index}>
              <Link
                to={el.path}
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#e5e7eb55] group"
              >
                <i className={clsx('text-[20px]', theme === 'obsidia' && 'text-white', theme === 'one-dark' && 'text-white', theme === 'toff' && 'text-[#665442]', theme === 'stone' && 'text-black')}>{el.icon}</i>
                <span className={clsx('ml-2', theme === 'obsidia' && 'text-white', theme === 'one-dark' && 'text-white', theme === 'toff' && 'text-[#665442]', theme === 'stone' && 'text-black')}>{el.menuName}</span>
              </Link>
            </li>
          ))}

          <h3 className='text-[14px] font-[inter] font-bold'>Settings</h3>
          {menuData2.map((el, index) => (
            <li key={index}>
              <Link
                to={el.path}
                className={clsx('flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#e5e7eb55] group', theme === 'obsidia' && 'text-white', theme === 'one-dark' && 'text-white', theme === 'toff' && 'text-[#665442]', theme === 'stone' && 'text-black')}
              >
                <i className='text-[20px]'>{el.icon}</i>
                <span className={clsx('ml-2', theme === 'obsidia' && 'text-white', theme === 'one-dark' && 'text-white', theme === 'toff' && 'text-[#665442]', theme === 'stone' && 'text-black')}>{el.menuName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbaar;
