import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GoPencil } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import clsx from 'clsx';
import { ThemeContext } from '../Context/TheamContext';

function Tasks() {
  const [data, setData] = useState([]);
  const [task, setTask] = useState("");
  const [checked, setChecked] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const { theme } = useContext(ThemeContext);

  const getData = () => {
    axios.get("http://localhost:8080/tasks/get")
      .then((res) => {
        setData(res.data.tasks || []);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => setTask(e.target.value);

  const handleSubmit = () => {
    if (!task.trim()) return;
    axios.post("http://localhost:8080/tasks/post", { title: task })
      .then(() => {
        setTask("");
        getData();
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8080/tasks/delete/${_id}`)
      .then(() => getData())
      .catch((err) => console.error(err));
  };

  const handleCheck = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const handleEdit = (index, currentValue) => {
    setEditIndex(index);
    setEditValue(currentValue);
  };

  const handleUpdate = (_id) => {
    axios.put(`http://localhost:8080/tasks/update/${_id}`, { title: editValue })
      .then(() => {
        setEditIndex(null);
        setEditValue("");
        getData();
      })
      .catch((err) => console.error(err));
  };

  const tasksLeft = data.length - checked.filter(Boolean).length;

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto py-8">
        <h1 className={clsx(
          'font-[inter] font-semibold text-[24px] sm:text-[30px] mb-4 sm:mb-6',
          theme === 'obsidia' && 'text-white',
          theme === 'one-dark' && 'text-white',
          theme === 'toff' && 'text-[#665442]',
          theme === 'stone' && 'text-black'
        )}>
          Tasks
        </h1>

        <p className={clsx(
          'mb-4 sm:mb-6 text-sm sm:text-base',
          theme === 'obsidia' && 'text-[#A0A5AF]',
          theme === 'one-dark' && 'text-[#A0A5AF]',
          theme === 'toff' && 'text-[#665442]',
          theme === 'stone' && 'text-black'
        )}>
          Focus on a few tasks and make progress on them.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-6">
          <input
            type="text"
            placeholder="Add New Task"
            value={task}
            onChange={handleChange}
            className={clsx(
              'flex-1 px-3 py-2 rounded-lg border shadow w-full',
              theme === 'obsidia' && 'placeholder-white text-white bg-[#292524] border-[#44403c]',
              theme === 'one-dark' && 'placeholder-white text-white bg-[#1D202A] border-[#333842]',
              theme === 'toff' && 'placeholder-[#665442] text-[#665442] bg-[#f9f5ff]',
              theme === 'stone' && 'text-black bg-white placeholder-black'
            )}
          />
          <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded-lg w-full sm:w-auto">+</button>
        </div>

        <div className={clsx(
          'max-h-[400px] overflow-y-auto rounded-lg p-4 space-y-3',
          theme === 'obsidia' && 'text-white bg-[#292524] border border-[#44403c]',
          theme === 'one-dark' && 'text-white bg-[#1D202A] border border-[#333842]',
          theme === 'toff' && 'text-[#665442] bg-[#f9f5ff]',
          theme === 'stone' && 'text-black bg-white'
        )}>
          {data.length > 0 ? data.map((el, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 w-full">
                <input type="checkbox" checked={!!checked[index]} onChange={() => handleCheck(index)} />
                {editIndex === index ? (
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => handleUpdate(el._id)}
                    className="flex-1 px-2 py-1 border rounded"
                    autoFocus
                  />
                ) : (
                  <h2 className={`flex-1 ${checked[index] ? 'line-through text-gray-400' : ''}`}>{el.title}</h2>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => handleEdit(index, el.title)}><GoPencil /></button>
                <button onClick={() => handleDelete(el._id)}><AiOutlineDelete /></button>
              </div>
            </div>
          )) : (
            <p className="text-gray-400 text-center">No tasks available</p>
          )}
        </div>

        <div className="mt-6 font-medium">
          <h3 className={clsx(
            theme === 'obsidia' && 'text-[#A0A5AF]',
            theme === 'one-dark' && 'text-[#A0A5AF]',
            theme === 'toff' && 'text-[#665442]',
            theme === 'stone' && 'text-black'
          )}>
            {tasksLeft} {tasksLeft === 1 ? "Task is left" : "Tasks are left"}
          </h3>
          <i className="text-xs flex items-center gap-1 mt-1">
            <MdAccessTime className="text-yellow-500" />
            <span className="text-[var(--text-light)]">Become a pro member to sync tasks</span>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
