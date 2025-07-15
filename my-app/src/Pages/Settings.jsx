import React, { useContext, useState } from 'react';
import { TimeContext } from '../Context/TimerContext';


function Settings() {
  const { setDuration } = useContext(TimeContext);
  const [input, setInput] = useState("");

  const handleSave = () => {
    const time = parseInt(input);
    if (!isNaN(time) && time > 0) {
      setDuration(time);
      alert("Time set successfully!");
    }
  };

  return (
    <div className="p-4">
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter time in minutes"
        className="border px-3 py-1 rounded"
      />
      <button onClick={handleSave} className="ml-2 px-4 py-1 bg-blue-500 text-white rounded">
        Set
      </button>
      
    </div>
  );
}

export default Settings;
