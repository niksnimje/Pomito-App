import React, { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import clsx from 'clsx';
import { ThemeContext } from '../Context/TheamContext';

function FocusChart() {
  const [hourlyData, setHourlyData] = useState([]);
  const {theme}=useContext(ThemeContext)

  useEffect(() => {
    const sessionStats = JSON.parse(localStorage.getItem('sessionLog')) || { sessions: [] };
    const hourMap = Array(24).fill(0);

    sessionStats.sessions.forEach(entry => {
      if (entry.type === 'start' && entry.duration) {
        const hour = new Date(entry.timestamp).getHours();
        hourMap[hour] += entry.duration;
      }
    });

    const chartData = hourMap.map((mins, hour) => ({
      hour: `${hour}:00`,
      minutes: mins
    }));

    setHourlyData(chartData);
  }, []);

  return (
    <div
      className={clsx('w-full max-w-4xl mx-auto px-4 py-8  rounded-lg ',
                    theme === 'obsidia' && 'border border-[#44403c] text-white bg-[#292524]',
                    theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
                    theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
                    theme === 'stone' && 'border border-[#e4e4e7] bg-white text-black')}
    >
      <h2 className="text-xl font-semibold ">Deep Work Hours</h2>
      <p className='mb-4'>Daily</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={hourlyData}>
          <XAxis dataKey="hour" stroke="#888" fontSize={12} />
          <YAxis stroke="#888" fontSize={12} tickFormatter={(v) => `${v}m`} />
          <Tooltip formatter={(v) => `${v} minutes`} />
          <Bar dataKey="minutes" fill="#3b82f6" maxBarSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FocusChart;
