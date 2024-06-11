import { useContext, useEffect, useState, } from 'react';

// import { Routes, Route, Link, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import UserContext from './context/userContext';

import HomePage from './pages/homePage';
import About from './pages/about';
import Resturants from './pages/resturants';
import PagenotFound from './pages/pagenotfound';



function App() {
  const { fetchData, fetchData2 } = useContext(UserContext)

  useEffect(() => {
    fetchData()
    fetchData2()
  }, [])


  return (


    <div className="App">

      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/resturants" element={<Resturants />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>


    </div>

  );
}

export default App;
