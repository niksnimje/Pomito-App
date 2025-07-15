import React, { useState, useContext } from 'react';
import { ThemeContext } from '../Context/TheamContext';
import clsx from 'clsx';
import { MdOutlineColorLens } from "react-icons/md";
import { LuFileMusic } from "react-icons/lu";
import { ImEnlarge2 } from "react-icons/im";
import { FiChevronDown, FiCheck } from "react-icons/fi";

function Appearance() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions = [
    { value: "stone", label: "⚫ Aa Stone" },
    { value: "obsidia", label: "🟡 Aa Obsidia" },
    { value: "one-dark", label: "🟣 Aa One Dark" },
    { value: "toff", label: "🟤 Aa Toff" }
  ];

  const selectedOption = themeOptions.find(option => option.value === theme);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-screen-md mx-auto py-8">
        {/* Heading */}
        <h1 className={clsx(
          'font-[inter] font-semibold text-[24px] sm:text-[30px] mb-6',
          theme === 'obsidia' && 'text-white',
          theme === 'one-dark' && 'text-white',
          theme === 'toff' && 'text-[#665442]',
          theme === 'stone' && 'text-black'
        )}>Appearance Settings</h1>

        {/* Theme Selection */}
        <div className={clsx(
          'px-4 sm:px-6 py-6 rounded-lg',
          theme === 'obsidia' && 'text-white bg-[#292524] border border-[#44403c]',
          theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
          theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
          theme === 'stone' && 'text-black bg-white'
        )}>
          <h3 className='font-[inter] font-bold text-lg mb-4'>Themes</h3>

          <hr className={clsx('mb-4',
            theme === 'obsidia' && 'border-[#44403c]',
            theme === 'one-dark' && 'border-[#333842]',
            theme === 'toff' && 'border-[#e4e4e7]',
            theme === 'stone' && 'border-[#e4e4e7]'
          )} />

          <div className='flex flex-col space-y-3'>
            <div className='flex items-center space-x-2 font-[inter] text-sm font-medium'>
              <MdOutlineColorLens />
              <span className={clsx(
                'text-sm text-[var(--text-light)]',
                theme === 'obsidia' && 'text-white bg-[#1e1e2f]',
                theme === 'one-dark' && 'text-white bg-[#282c34]',
                theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
                theme === 'stone' && 'text-black'
              )}>Select a theme</span>
            </div>

            {/* Custom Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                  'w-full px-4 py-3 rounded-lg text-base sm:text-sm text-left',
                  'min-h-[48px] flex items-center justify-between',
                  'focus:outline-none focus:ring-2 focus:ring-blue-500',
                  theme === 'obsidia' && 'bg-[#292524] border border-[#44403c] hover:bg-[#3a3634]',
                  theme === 'one-dark' && 'bg-[#1D202A] border border-[#333842] hover:bg-[#2a2e3a]',
                  theme === 'toff' && 'bg-[#f9f5ff] border border-[#e4e4e7] hover:bg-[#f0e9ff]',
                  theme === 'stone' && 'bg-white border border-[#e4e4e7] hover:bg-gray-50'
                )}
              >
                <span>{selectedOption?.label}</span>
                <FiChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className={clsx(
                  'absolute z-10 mt-1 w-full rounded-md shadow-lg',
                  'focus:outline-none',
                  theme === 'obsidia' && 'bg-[#292524] border border-[#44403c]',
                  theme === 'one-dark' && 'bg-[#1D202A] border border-[#333842]',
                  theme === 'toff' && 'bg-[#f9f5ff] border border-[#e4e4e7]',
                  theme === 'stone' && 'bg-white border border-[#e4e4e7]'
                )}>
                  <div className="py-1 max-h-60 overflow-auto">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setTheme(option.value);
                          setIsOpen(false);
                        }}
                        className={clsx(
                          'w-full text-left px-4 py-2 text-sm flex items-center justify-between',
                          'hover:bg-opacity-50',
                          theme === 'obsidia' && 'hover:bg-[#3a3634]',
                          theme === 'one-dark' && 'hover:bg-[#2a2e3a]',
                          theme === 'toff' && 'hover:bg-[#f0e9ff]',
                          theme === 'stone' && 'hover:bg-gray-100',
                          theme === option.value && 'font-semibold'
                        )}
                      >
                        <span>{option.label}</span>
                        {theme === option.value && <FiCheck />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

              {/* Sounds Section */}
        <div className={clsx(
          'mt-8 px-4 sm:px-6 py-6 rounded-lg',
          theme === 'obsidia' && 'text-white bg-[#292524] border border-[#44403c]',
          theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
          theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
          theme === 'stone' && 'text-black bg-white'
        )}>
          <h3 className={clsx(
            'font-[inter] font-bold text-lg mb-4',
            theme === 'obsidia' && 'text-white',
            theme === 'one-dark' && 'text-white',
            theme === 'toff' && 'text-[#665442]',
            theme === 'stone' && 'text-black'
          )}>Sounds and Backgrounds</h3>

          <hr className={clsx('mb-4',
            theme === 'obsidia' && 'border-[#44403c]',
            theme === 'one-dark' && 'border-[#333842]',
            theme === 'toff' && 'border-[#e4e4e7]',
            theme === 'stone' && 'border-[#e4e4e7]'
          )} />

          <div className='flex flex-col space-y-2'>
            <div className='flex items-center space-x-2 mb-2'>
              <i className='text-xl'><LuFileMusic /></i>
              <span className='text-sm text-[var(--text-light)]'>Sound</span>
            </div>
            <select className={clsx(
              'w-full px-4 py-2 rounded text-sm  text-[16px]',
              theme === 'obsidia' && 'border border-[#44403c]',
              theme === 'one-dark' && 'border border-[#333842]',
              theme === 'toff' && 'border border-[#e4e4e7]',
              theme === 'stone' && 'border border-[#e4e4e7]'
            )}>
              <option value="">Select a sound</option>
              <option value="">Default</option>
            </select>
          </div>
        </div>

        {/* UI Scaling Section */}
        <div className={clsx(
          'mt-8 px-4 sm:px-6 py-6 rounded-lg',
          theme === 'obsidia' && 'text-white bg-[#292524] border border-[#44403c]',
          theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
          theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
          theme === 'stone' && 'text-black bg-white'
        )}>
          <h3 className='font-[inter] font-bold text-lg mb-4'>UI Scaling</h3>
          <hr className={clsx('mb-4',
            theme === 'obsidia' && 'border-[#44403c]',
            theme === 'one-dark' && 'border-[#333842]',
            theme === 'toff' && 'border-[#e4e4e7]',
            theme === 'stone' && 'border-[#e4e4e7]'
          )} />

          <div className='flex flex-col space-y-2'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <i className='text-base'><ImEnlarge2 /></i>
                <span className='text-sm font-bold'>Enable Larger UI Elements</span>
              </div>
              <div className="relative inline-block w-11 h-5">
                <input
                  id="switch-component-1"
                  type="checkbox"
                  className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
                />
                <label
                  htmlFor="switch-component-1"
                  className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                ></label>
              </div>
            </div>
            <p className='text-xs'>This will scale the UI elements by x1.5</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Appearance;