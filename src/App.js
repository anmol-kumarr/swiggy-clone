import { useContext, useEffect, useState, } from 'react';

// import { Routes, Route, Link, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UserContext from './context/userContext';
import HomePage from './pages/homePage';
import About from './pages/about';
import PagenotFound from './pages/pagenotfound';
import Collections from './pages/collection';
import Resturant from './pages/resturantsPage';



function App() {
  const { fetchData, fetchData2 } = useContext(UserContext)

  useEffect(() => {
    // fetchData()
    // fetchData2()
  }, [])


  return (


    <div className="App">

      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/collection/:collection_id/:collection_type" element={<Collections/>} />
        <Route path='/resturant/:city/:resturantName/:resturantId' element={<Resturant></Resturant>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>


    </div>

  );
}

export default App;
