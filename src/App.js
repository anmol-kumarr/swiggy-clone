import { useContext, useEffect, useState } from 'react';
import './App.css';
import Hero from './components/hero';
import Navigation from './components/navigation';
import UserContext from './context/userContext';
import WhatsOnYour from './components/whatsInyourMind';
import Scrollbar from './components/scrollbar';
import ResturantChains from './components/resturentChains';
import Btn from './components/filter';
import { GlobalContext } from './context/globalcontext';
import FoodDelivery from './components/fooddelivery';



function App() {
  const { fetchData, fetchData2, WhatsOnYourMind, resturantChains } = useContext(UserContext)
  const [slider, setSlider] = useState(true)
  useEffect(() => {
    fetchData()
    fetchData2()
  }, [])

  // console.log(resturantChains)
  return (
    <div className="App">


      <Navigation></Navigation>
      <Hero></Hero>
      <WhatsOnYour></WhatsOnYour>
      <ResturantChains ></ResturantChains>
      {/* <Btn ></Btn> */}
      <FoodDelivery></FoodDelivery>

    
    </div>
  );
}

export default App;
