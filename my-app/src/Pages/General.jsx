import React, { useContext, useEffect, useState } from 'react'
import { FaRegClock } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import toast from 'react-hot-toast';
import { TimeContext } from '../Context/TimerContext';
import { TimeContext2 } from '../Context/Timer2Context';
import { PiBowlSteamBold } from "react-icons/pi";
import clsx from 'clsx';
import { ThemeContext } from '../Context/TheamContext';

function General() {
    const { duration,setDuration } = useContext(TimeContext);
  const { duration: timer, setDuration: setTimerDuration } = useContext(TimeContext2);

    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [On, setOn] = useState(false);
      const { theme, setTheme } = useContext(ThemeContext);

    const click = () => {
    setOn((prev) => {
      const newValue = !prev;
      toast.success(`Notification is ${newValue ? 'On' : 'Off'}`);
      return newValue;
    });
  };

    const handleDurationChange = (e) => {
        const value = e.target.value;
        setInput(value);
        const time = parseInt(value);
        if (!isNaN(time) && time > 0) {
            setDuration(time);
        }
    };

  const handleTimerChange = (e) => {
  const value = e.target.value;
  setInput2(value);
  const time = parseInt(value);
  if (!isNaN(time) && time > 0) {
    setTimerDuration(time);
  }
};

  return (
    <>
        <div className="container mx-auto">
            <div className="max-w-[832px] w-full mx-auto px-4 py-8">
            <h1 className={clsx(
                                'font-[inter] font-semibold text-[30px]',
                                theme === 'obsidia' && 'text-white ',
                                theme === 'one-dark' && 'text-white ',
                                theme === 'toff' && 'text-[#665442] ',
                                theme === 'stone' && 'text-black '
                              )}
            
            >General Settings</h1> <br />
                <div
                className={clsx(
    'px-6 py-6 rounded-lg ',
    theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
    theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
    theme === 'toff' && 'text-[#665442] bg-[#f9f5ff] ',
    theme === 'stone' && 'text-black bg-white '
  )}>
                    <h3 className='font-[inter] font-bold text-lg mb-4'>Timers</h3>
                    <hr 
                      className={clsx(
                          'mb-4 ',
                          theme === 'obsidia' && 'border-[#44403c]',
                          theme === 'one-dark' && 'border-[#333842]',
                          theme === 'toff' && 'border-[#e4e4e7]',
                          theme === 'stone' && ' border-[#e4e4e7]'
                        )}
                    />
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div className="c_1">
                            <div className='flex items-center space-x-2 font-[inter] text-sm font-medium mb-2'>
                                <i><FaRegClock /></i>
                            <span>Deep Work Session</span>
                            </div>
                            <div className='flex flex-wrap gap-2 items-center'>
                            
                            <input type="number" value={duration}  className='w-[80px] px-3 py-1 border-1 border-[#e4e4e7] rounded-lg  shadow' onChange={handleDurationChange}  />

                            <span className='font-[var(--text-light)]'>minutes</span>
                            <i className='font-[var(--text-light)]'><IoInformationCircleOutline /></i>
                            </div>
                        </div>
                        <div className="c_1">
                            <div className='flex items-center space-x-2 font-[inter] text-sm font-medium mb-2'>
                                <i><PiBowlSteamBold /></i>
                            <span>Break Time</span>
                            </div>
                            <div className='flex flex-wrap gap-2 items-center'>
                            <input type="number" value={timer} onChange={handleTimerChange}   className='w-[80px] px-3 py-1 border-1 border-[#e4e4e7] rounded-lg  shadow' />
                            <span className='font-[var(--text-light)]'>minutes</span>
                            <i className='font-[var(--text-light)]'><IoInformationCircleOutline /></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification */}

                <div
                  className={clsx(
    'mt-8  px-6 py-6 rounded-lg',
    theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
    theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
    theme === 'toff' && 'text-[#665442] bg-[#f9f5ff] ',
    theme === 'stone' && 'text-black bg-white '
  )}

                >
                      <h3 className='font-[inter] font-bold text-lg mb-4'>Notifications</h3>
                    <hr className={clsx(
                          'mb-4 ',
                          theme === 'obsidia' && 'border-[#44403c]',
                          theme === 'one-dark' && 'border-[#333842]',
                          theme === 'toff' && 'border-[#e4e4e7]',
                          theme === 'stone' && ' border-[#e4e4e7]'
                        )}
                    
                    
                    />
                      <div className="c_1">
                            <div className='flex flex-wrap items-center justify-between gap-2 mb-2 text-sm font-medium'>
                               <div className='flex  items-center'>
                                 <i className='text-base'><IoMdNotificationsOutline /></i>
                            <span className='text-sm'>Browser Notifications</span>
                               </div>
                            <div className="relative w-11 h-5 shrink-0">
          <input
          id="switch-component-1"
          type="checkbox"
          onChange={click}
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor="switch-component-1"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label> 
                            </div>

                            </div>
                            <p className='text-sm mt-2'>Web notifications are not available on iOS</p>
                        </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default General