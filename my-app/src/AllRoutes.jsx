import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbaar from './Components/Navbaar'
import General from './Pages/General'
import BreakTime from './Pages/BreakTime'
import Tasks from './Pages/Tasks'
import Appearance from './Pages/Appearance'
import Profile from './Pages/Profile'
import Login from './Components/Login'
import Activty from './Pages/Activty'

function AllRoutes() {
  return (
    <>
    <Navbaar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/breaktime' element={<BreakTime />}/>
            <Route path='/tasks' element={<Tasks />}/>
            <Route path='/activty' element={<Activty />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/general' element={<General />}/>
            <Route path='/appearance' element={<Appearance />}/>
        </Routes>
    </>
  )
}

export default AllRoutes