import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/HomePage';
import Game from './Component/TicTacToe/Game';
import Todo from './Component/ToddoApp/Toddo';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/game' element={<Game/>}></Route>
        <Route path='/Todo' element={<Todo/>}></Route>
      </Routes>
      </div>
    </Router>
  )
}

export default App