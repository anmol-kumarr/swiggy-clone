import Hero from '../components/hero';
import Navigation from '../components/navigation';
// import UserContext from './context/userContext';
import WhatsOnYour from '../components/whatsInyourMind';
// import Scrollbar from './components/scrollbar';
import ResturantChains from '../components/resturentChains';
// import Btn from './components/filter';
// import { GlobalContext } from './context/globalcontext';
import FoodDelivery from '../components/fooddelivery';
import Best from '../components/swiggyBest';
import Footer from '../components/footer';

function HomePage() {
    return (
        <div>
            <Navigation></Navigation>
            <Hero></Hero>
            <WhatsOnYour></WhatsOnYour>
            <ResturantChains ></ResturantChains>
            {/* <Btn ></Btn> */}
            <FoodDelivery></FoodDelivery>
            <Best></Best>
            <Footer></Footer>
        </div>
    )
}
export default HomePage;