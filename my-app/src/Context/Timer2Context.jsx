// Timer2Context.js
import { createContext, useState, useEffect } from "react";

export const TimeContext2 = createContext();

export const TimeProvider2 = ({ children }) => {
  // Initialize state with localStorage or defaults
  const [timerState, setTimerState] = useState(() => {
    const saved = localStorage.getItem('breakTimerState');
    return saved ? JSON.parse(saved) : {
      duration: 5,
      timeLeft: 5 * 60,
      running: false
    };
  });

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('breakTimerState', JSON.stringify(timerState));
  }, [timerState]);

  // Timer countdown logic
  useEffect(() => {
    if (!timerState.running) return;

    const interval = setInterval(() => {
      setTimerState(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(interval);
          return { ...prev, timeLeft: 0, running: false };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerState.running]);

  const value = {
    duration: timerState.duration,
    timeLeft: timerState.timeLeft,
    running: timerState.running,
    setDuration: (newDuration) => {
      setTimerState(prev => ({
        ...prev,
        duration: newDuration,
        timeLeft: newDuration * 60
      }));
    },
    setRunning: (isRunning) => {
      setTimerState(prev => ({ ...prev, running: isRunning }));
    },
    resetTimer: () => {
      setTimerState(prev => ({
        ...prev,
        timeLeft: prev.duration * 60,
        running: false
      }));
    }
  };

  return (
    <TimeContext2.Provider value={value}>
      {children}
    </TimeContext2.Provider>
  );
};