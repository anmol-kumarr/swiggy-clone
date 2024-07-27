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
import { useEffect, useState } from 'react';

function HomePage() {
    const [homePageData, setHomePageData] = useState([])
    const [fail, setFail] = useState(false)
    const [loading, setLoading] = useState(false)
    const [whatsInyourMind,setwhatsInYourMind]=useState([])
    const[resturantChains,setResturnatsChains]=useState([])
    const[foodDelivery,setFoodDelivery]=useState([])
    useEffect(() => {
        const url = 'https://foodfire.onrender.com/api/restaurants?lat=25.59080&lng=85.13480&page_type=DESKTOP_WEB_LISTING'

        
// https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6102763&lng=85.1338404&restaurantId=88781&submitAction=ENTER


        const ftechHomeData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                // console.log(data)
                setwhatsInYourMind(data.data.cards[0].card.card.imageGridCards.info)
                setResturnatsChains(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
                setFoodDelivery(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
                
            

                setLoading(false)
            }
            catch (err) {
                console.log(err)
                setFail(true)
            }

        }
        ftechHomeData()
        
        
    }, [])
    return (
        <div>
            {
                fail === false ? (<div>

                    <Navigation></Navigation>
                    <Hero></Hero>
                    <WhatsOnYour  WhatsOnYourMindData={whatsInyourMind}  loading={loading}></WhatsOnYour>
                    <ResturantChains resturantChains={resturantChains} loading={loading} ></ResturantChains>
                    <FoodDelivery resturantChains={resturantChains} foodDelivery={foodDelivery} loading={loading} ></FoodDelivery>
                    <Best></Best>
                    <Footer></Footer>
                </div>
                ) : (
                    <div>
                        <h1>Some Thing went wrong</h1>
                    </div>
                )
            }

        </div>
    )
}
export default HomePage;