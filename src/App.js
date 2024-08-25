import { useContext, useEffect, useState, } from 'react';

// import { Routes, Route, Link, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import UserContext from './context/userContext';
import HomePage from './pages/homePage';
import About from './pages/about';
import PagenotFound from './pages/pagenotfound';
import Collections from './pages/collection';
import Resturant from './pages/resturantsPage';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Auth from './pages/auth';



function App() {
  const { fetchData, fetchData2 } = useContext(UserContext)

  useEffect(() => {
    // fetchData()
    // fetchData2()
  }, [])


  return (


    // <Router>

    //   <Routes>
    //     <Route path="/" element={<Layout />} />
    //     <Route index element={<HomePage />} />
    //     <Route path="collection/:collection_id/:collection_type" element={<Collections />} />
    //     <Route path='resturant/:city/:resturantName/:resturantId' element={<Resturant></Resturant>} />
    //     <Route path="about" element={<About />} />
    //     <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
    //   </Routes>

    // </Router>


    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="collection/:collection_id/:collection_type" element={<Collections />} />
        <Route path="resturant/:city/:resturantName/:resturantId" element={<Resturant />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PagenotFound />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>





  );
}

const Layout = () => {
  return (
    <div className="App">

      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App;
