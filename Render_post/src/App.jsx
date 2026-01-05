import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Posts from './pages/posts';
import Todos from './pages/Todos';
import Users from './pages/users';

function App() {
return(

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/posts" element={<Posts/>}></Route>
    <Route path="/todos" element={<Todos/>}></Route>
    <Route path="/users" element={<Users/>}></Route>

  </Routes>
)
}

export default App
