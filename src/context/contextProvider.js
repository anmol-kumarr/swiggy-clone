import { useState } from "react";
import UserContext from "./userContext";

function UserContextProvider({ children }) {

    const [whatsOnYourMind, setWhatsonyourmind] = useState([])
    const [resturantChains, setResturantsChain] = useState([])
    const [loading, setLoading] = useState(false)
    const [slider, setSlider] = useState(true)
    const [foodDelivery, setFoodDelivery] = useState([])
    const [bestplace, setBestPlace] = useState([])
    const [bestCuisines, setBestCuisines] = useState([])
    const [swiggyDownload, setSwiggyDownload] = useState({})

    // const url2 = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    // const url = 'https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING'

    const url = 'https://foodfire.onrender.com/api/restaurants?lat=25.59080&lng=85.13480&page_type=DESKTOP_WEB_LISTING'
    // const url2 = 'https://www.swiggy.com/mapi/homepage/getCards?lat=25.5940947&lng=85.1375645'

    // const itemUrl='https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&&submitAction=ENTER&restaurantId=725082'
    async function fetchData() {
        // setLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            setWhatsonyourmind(data.data.cards[0].card.card.imageGridCards.info)
            setFoodDelivery(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)


            // console.log('hello')
            // setWhatsonyourmind(data?.data?.cards[0].card.card.imageGridCards.info)
            // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            // setResturantsChain(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

        }
        catch (err) {
            console.log(err)
        }


    }


    async function fetchData2() {
        try {
            const response2 = await fetch(url)
            const data2 = await response2.json()
            // console.log(data2?.data?.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
            // console.log(data2.data.cards[1].card)
            // setResturantsChain(data2?.data?.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
            setResturantsChain(data2.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setBestPlace(data2.data.cards[6].card.card.brands)
            setBestCuisines(data2.data.cards[7].card.card.brands)
            // console.log(data2.data.cards[6].card.card.brands)
            setSwiggyDownload(data2.data.cards[9].card.card)
            // console.log(bestplace)
            // setFoodDelivery()
            // console.log(data2.data.cards)
        }
        catch (err) {
            console.log(err)
        }
    }





    const [suggestedLocation, setsuggestedLocation] = useState([])
    const [usercoordinates, setUserCoordinates] = useState({})
    const [collectionID, setCollectionID] = useState('')
    const [collectionName, setCollectionName] = useState('')
    // const [collectionData, setCollectionData] = useState([])

    // console.log(collectionID)

    // console.log(collectionName)
    const collectionUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6102763&lng=85.1338404&collection=${collectionID}&tags=layout_CCS_${collectionName}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    const [ItemData, setItemData] = useState({})
    async function fetchItemCollection() {
        try {
            const response = await fetch(collectionUrl)
            const data = await response.json()


            // Check if the data structure is as expected
            if (data.data && data.data.cards && data.data.cards.length > 0) {
                const collectionItemData = data.data.cards[0];
                console.log(collectionItemData.card.card.title); // Output: Biryani
            } else {
                console.error('The data structure is not as expected');
            }
            // const collectionItemData = data.cards[0]

            // setItemData(collectionItemData)
            // console.log(collectionItemData)

        }
        catch (err) {
            console.log(err)
        }
    }
    const value = {
        whatsOnYourMind,
        setWhatsonyourmind,
        resturantChains,
        setResturantsChain,
        loading,
        setLoading,
        fetchData,
        // fetchData2,
        slider,
        setSlider,
        foodDelivery,
        setFoodDelivery,
        bestplace,
        setBestPlace, setBestCuisines, bestCuisines,
        swiggyDownload,
        suggestedLocation,
        setsuggestedLocation,
        usercoordinates, setUserCoordinates,
        collectionID, setCollectionID,
        collectionName, setCollectionName,
        fetchItemCollection,
        ItemData



    }



    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>

}
export default UserContextProvider