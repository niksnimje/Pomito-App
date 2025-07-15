import React, { useContext, useState } from 'react';
import { TimeContext2 } from '../Context/Timer2Context';
import { Link } from 'react-router-dom';
import { IoPlayOutline } from "react-icons/io5";
import { TbPlayerPause } from "react-icons/tb";
import { FiRefreshCw } from "react-icons/fi";
import { ThemeContext } from '../Context/TheamContext';
import clsx from 'clsx';
import { TimeContext } from '../Context/TimerContext';

function BreakTime() {
  const { 
    duration, 
    timeLeft, 
    running, 
    setRunning, 
    resetTimer 
  } = useContext(TimeContext2);
  
  const [showModal, setShowModal] = useState(false);
  const [showDeepResetModal, setShowDeepResetModal] = useState(false); 
  const { theme } = useContext(ThemeContext);
  const { runningg, resetTimerr } = useContext(TimeContext);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const handleReset = () => {
    setShowModal(true);
  };

  const confirmReset = () => {
    resetTimer();
    setShowModal(false);
  };

  
  const toggleTimer = () => {
    if (runningg === true) {
      setShowDeepResetModal(true);
      return;
    }
    setRunning(!running);
  };

  const confirmDeepReset = () => {
    resetTimerr();
    setShowDeepResetModal(false);
    setRunning(true); 
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-start pt-16 pb-8 px-4">
        {/* TAB NAV */}
        <div className="flex w-full max-w-md mt-[35%] md:mt-[10%] lg:mt-[8%]">
          <Link to="/"
            className={clsx(
              'w-1/2 text-center px-3 py-2 rounded-l text-sm md:text-base',
              theme === 'obsidia' && 'text-white',
              theme === 'one-dark' && 'text-white',
              theme === 'toff' && 'text-[#665442]',
              theme === 'stone' && 'text-black'
            )}
          >
            Deep Work
          </Link>
          <Link to="/breaktime" 
            className={clsx(
              'w-1/2 text-center px-3 py-2 rounded-r text-sm md:text-base',
              theme === 'obsidia' && 'text-white border border-[#44403c] bg-[#292524]',
              theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
              theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
              theme === 'stone' && 'text-white bg-black'
            )}
          >
            Break Time
          </Link>
        </div>

        {/* TIMER */}
        <div className="flex-1 flex flex-col items-center sm:justify-start md:justify-start lg:justify-start w-full">
          <h1 className={clsx(
            'font-bold text-7xl md:text-9xl lg:text-[160px] mb-8',
            theme === 'obsidia' && 'text-white',
            theme === 'one-dark' && 'text-white',
            theme === 'toff' && 'text-[#665442]',
            theme === 'stone' && 'text-black'
          )}>
            {minutes}:{seconds}
          </h1>
          
          {/* BUTTONS */}
          <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
            <button
              onClick={toggleTimer}
              className={clsx(
                'w-full py-3 rounded-lg text-sm md:text-base',
                theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
                theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
                theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
                theme === 'stone' && 'text-white bg-black'
              )}          
            >
              {running ? 
              (
                <span className="flex items-center justify-center">
                                <TbPlayerPause className="text-xl md:text-2xl mr-2" />
                                Pause
                              </span>
              ):(
                 <span className="flex items-center justify-center">
                                <IoPlayOutline className="text-xl md:text-2xl mr-2" />
                                Start
                              </span>
              )}
            </button>
            <br /> 

            {running && (
              <button
                onClick={handleReset}
                className={clsx(
                  'w-full py-2 rounded-lg text-sm md:text-base',
                  theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
                  theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
                  theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
                  theme === 'stone' && 'text-white bg-black'
                )}       
              >
                <span className="flex items-center justify-center">
                                <FiRefreshCw className="mr-2" />
                                Reset
                              </span>
              </button>
            )}
          </div>
        </div>

        
        {showModal && (
          <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={clsx(
              "p-6 rounded-lg shadow-lg text-center w-full max-w-sm",
              theme === 'obsidia' && 'bg-[#292524] text-white',
              theme === 'one-dark' && 'bg-[#1D202A] text-white',
              theme === 'toff' && 'bg-[#f9f5ff] text-[#665442]',
              theme === 'stone' && 'bg-white text-black'
            )}>
              <h2 className="text-lg font-semibold mb-4">Are you sure you want to end your break?</h2>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={confirmReset} 
                  className="px-6 py-2 bg-red-500 text-white rounded"
                >
                  Yes
                </button>
                <button 
                  onClick={() => setShowModal(false)} 
                  className={clsx(
                    'px-6 py-2 rounded-lg',
                    theme === 'obsidia' && 'bg-[#44403c] text-white',
                    theme === 'one-dark' && 'bg-[#333842] text-white',
                    theme === 'toff' && 'bg-gray-200 text-[#665442]',
                    theme === 'stone' && 'bg-gray-300 text-black'
                  )}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        
        {showDeepResetModal && (
          <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={clsx(
              "p-6 rounded-lg shadow-lg text-center w-full max-w-sm",
              theme === 'obsidia' && 'bg-[#292524] text-white',
              theme === 'one-dark' && 'bg-[#1D202A] text-white',
              theme === 'toff' && 'bg-[#f9f5ff] text-[#665442]',
              theme === 'stone' && 'bg-white text-black'
            )}>
              <h2 className="text-lg font-semibold mb-4">
                A Deep Work session is already running.<br /> Do you want to reset and start Break Time?
              </h2>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={confirmDeepReset} 
                  className="px-6 py-2 bg-red-500 text-white rounded"
                >
                  Yes
                </button>
                <button 
                  onClick={() => setShowDeepResetModal(false)} 
                  className={clsx(
                    'px-6 py-2 rounded-lg',
                    theme === 'obsidia' && 'bg-[#44403c] text-white',
                    theme === 'one-dark' && 'bg-[#333842] text-white',
                    theme === 'toff' && 'bg-gray-200 text-[#665442]',
                    theme === 'stone' && 'bg-gray-300 text-black'
                  )}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default BreakTime;
