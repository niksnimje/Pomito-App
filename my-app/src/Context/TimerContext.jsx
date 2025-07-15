import { createContext, useState, useEffect } from "react";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  
  const [timerState, setTimerState] = useState(() => {
    const savedState = localStorage.getItem('timerState');
    return savedState ? JSON.parse(savedState) : {
      duration: 25,
      timeLeft: 25 * 60,
      runningg: false
    };
  });

  
  useEffect(() => {
    localStorage.setItem('timerState', JSON.stringify(timerState));
  }, [timerState]);

  
  useEffect(() => {
    if (!timerState.runningg) return;

    const interval = setInterval(() => {
      setTimerState(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(interval);
          return { ...prev, timeLeft: 0, runningg: false };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

  
    return () => clearInterval(interval);
  }, [timerState.runningg]);

  const value = {
    duration: timerState.duration,
    timeLeft: timerState.timeLeft,
    runningg: timerState.runningg,
    setDuration: (newDuration) => {
      setTimerState(prev => ({
        ...prev,
        duration: newDuration,
        timeLeft: newDuration * 60
      }));
    },
    setrunningg: (isrunningg) => {
      setTimerState(prev => ({ ...prev, runningg: isrunningg }));
    },
    resetTimerr: () => {
      setTimerState(prev => ({
        ...prev,
        timeLeft: prev.duration * 60,
        runningg: false
      }));
    }
  };


  return (
    <TimeContext.Provider value={value}>
      {children}
    </TimeContext.Provider>
  );
};