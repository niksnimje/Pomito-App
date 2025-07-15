import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../Context/TheamContext';
import { FaRegClock } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { TbCancel } from "react-icons/tb";
import { SiSession } from "react-icons/si";
import clsx from 'clsx';
import FocusChart from '../Components/FocusChart';

function Activty() {
  const { theme } = useContext(ThemeContext);
  const [selectedRange, setSelectedRange] = useState('7');
  const [stats, setStats] = useState({ total: 0, sessions: 0, resets: 0, average: 0 });

  useEffect(() => {
    const sessionStats = JSON.parse(localStorage.getItem('sessionLog')) || { sessions: [] };
    const now = new Date();

    const filterByDays = (days) => {
      const pastDate = new Date(now);
      pastDate.setDate(now.getDate() - parseInt(days));
      return sessionStats.sessions.filter(session => new Date(session.timestamp) >= pastDate);
    };

    const filtered = filterByDays(selectedRange);
    const focusSessions = filtered.filter(s => s.type === 'start');
    const resetSessions = filtered.filter(s => s.type === 'reset');

    const totalDuration = focusSessions.reduce((sum, cur) => sum + (cur.duration || 0), 0);
    const sessionCount = focusSessions.length;
    const resetCount = resetSessions.length;
    const avgDuration = sessionCount ? Math.round(totalDuration / sessionCount) : 0;

    setStats({
      total: totalDuration,
      sessions: sessionCount,
      resets: resetCount,
      average: avgDuration
    });
  }, [selectedRange]);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto py-8">
        <h1 className={clsx('font-semibold text-2xl sm:text-3xl mb-4',
          theme === 'obsidia' && 'text-white',
          theme === 'one-dark' && 'text-white',
          theme === 'toff' && 'text-[#665442]',
          theme === 'stone' && 'text-black')}>
          Activity
        </h1>

        <div className="my-4">
          <select
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
            className={clsx('px-4 py-2 rounded  w-full ',
              theme === 'obsidia' && 'border border-[#44403c] text-white bg-[#292524]',
              theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
              theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
              theme === 'stone' && 'border border-[#e4e4e7] bg-white')}
          >
            <option value="1">Today</option>
            <option value="7">Last 7 Days</option>
            <option value="28">Last 28 Days</option>
          </select>
        </div>

        <div className={clsx(
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-6',
          theme === 'obsidia' && 'text-black',
          theme === 'one-dark' && 'text-white',
          theme === 'toff' && 'text-[#665442]',
          theme === 'stone' && 'text-black')}>
          {/* Card 1 */}
          <div className={clsx('px-6 py-4 rounded-lg shadow',
            theme === 'obsidia' && 'text-white border border-[#44403c] bg-[#292524]',
            theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
            theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
            theme === 'stone' && 'text-black bg-white')}>
            <div className='flex items-center justify-between'>
              <p>Focus Time</p>
              <FaRegClock />
            </div>
            <h2 className='text-xl font-bold'>{stats.total}m</h2>
          </div>

          {/* Card 2 */}
          <div className={clsx('px-6 py-4 rounded-lg shadow',
            theme === 'obsidia' && 'text-white border border-[#44403c] bg-[#292524]',
            theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
            theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
            theme === 'stone' && 'text-black bg-white')}>
            <div className='flex items-center justify-between'>
              <p>Sessions</p>
              <SiSession />
            </div>
            <h2 className='text-xl font-bold'>{stats.sessions}</h2>
          </div>

          {/* Card 3 */}
          <div className={clsx('px-6 py-4 rounded-lg shadow',
            theme === 'obsidia' && 'text-white border border-[#44403c] bg-[#292524]',
            theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
            theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
            theme === 'stone' && 'text-black bg-white')}>
            <div className='flex items-center justify-between'>
              <p>Cancelled</p>
              <TbCancel />
            </div>
            <h2 className='text-xl font-bold'>{stats.resets}</h2>
          </div>

          {/* Card 4 */}
          <div className={clsx('px-6 py-4 rounded-lg shadow',
            theme === 'obsidia' && 'text-white border border-[#44403c] bg-[#292524]',
            theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
            theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
            theme === 'stone' && 'text-black bg-white')}>
            <div className='flex items-center justify-between'>
              <p>Average</p>
              <FiTarget />
            </div>
            <h2 className='text-xl font-bold'>{stats.average}m</h2>
          </div>
        </div>

        {/* Chart Info */}
        <div className={clsx(
          'px-6 py-6 rounded-lg mb-6',
          theme === 'obsidia' && 'text-white bg-[#292524] border border-[#44403c]',
          theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
          theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
          theme === 'stone' && 'text-black bg-white')}>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-sm mb-4'>Charts</h3>
            <FiTarget />
          </div>
          <p>At this moment, charts are only available on desktop.</p>
        </div>

        {/* Chart Component */}
        <FocusChart />
      </div>
    </div>
  );
}

export default Activty;
