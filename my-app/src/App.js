import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/HomePage';
import About from './Component/About/About';
import Navbar from './Component/Navbar/Navbar';
import Projects from './Component/Projects/Project';
import Skills from './Component/Skills/Skills';
import Footer from './Component/Footer/Footer';
import Resume from './Component/Resume/Resume'
// import Testimonials from './Component/Testimonials/';
// import Todo from './Component/ToddoApp/Toddo';
// import Game from './Component/TicTacToe/Game';




function App() {
  return (
    <Router className='text-gray-400 bg-gray-900 body-font'>
    <div>
    <Navbar />
      <Routes>
        <Route path='' element={<Home/>}></Route>
        {/* <Route path='/game' element={<Game/>}></Route>
        <Route path='/Todo' element={<Todo/>}></Route> */}
        <Route path ='/Resume' element ={<Resume/>}></Route>
        <Route path ='/About' element ={<About/>}></Route>
        <Route path ='/Projects' element ={<Projects/>}></Route>
      </Routes>
      <Footer/>
      </div>
    </Router>
  )
}

export default App