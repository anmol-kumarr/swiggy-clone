import Card from "./card"
// import Btn from "./filter"
import UserContext from "../context/userContext"
import { useContext, useEffect, useState } from "react"
import '../style/fooddelivery.css'
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useSelector } from "react-redux"
import filter from "../data/filter"
import '../style/btn.css'
import Scrollbar from "./scrollbar"
function FoodDelivery({ resturantChains, foodDelivery, loading }) {
    const currentCity = useSelector((state) => state.location[1].city[0].name)

    // const { resturantChains, foodDelivery } = useContext(UserContext)
    // console.log(resturantChains)
    // console.log(resturantChains)
    // console.log(foodDelivery)
    // const loading=true;
    // const[data,setData]=useState([])
    // Array.isArray(resturantChains)&& Array.isArray(foodDelivery)&&setData(foodDelivery,resturantChains)
    const data = []
    const [filterName, setFilterName] = useState([])
    useEffect(() => {
        data.push(foodDelivery)
        data.push(resturantChains)
    }, [])

    const filterHandler=(id)=>{
    
    }

    return (
        <div className="delivery-section">
            <h2 className="food-delivery-heading">Restaurants with online food delivery in {currentCity}</h2>
            <>
                <Scrollbar>

                    {
                        filter.map((arr) => (
                            <div className="btn-cont" key={arr.id}>

                                <button onClick={()=>filterHandler(arr.id)} className="btn">{arr.title}

                                    <span>{
                                        'icon' in arr ? (<span>{arr.icon}</span>) : ('')
                                    } </span>
                                </button>
                                {/* <span>{
            'icon' in arr ? (<span>{arr.icon}</span>) : ('')
            } </span> */}
                            </div>
                        ))
                    }
                </Scrollbar>
            </>
            {/* <Btn setFilterName={setFilterName} ></Btn> */}
            <div className="card-section">

                {
                    loading === true ? (
                        <>
                            <ShimmerSimpleGallery row={7} col={4} gap={30} card imageHeight={180} fitOnFrame={false} caption />
                        </>
                    ) : (
                        <>
                            {
                                Array.isArray(foodDelivery) && foodDelivery.length > 0 && foodDelivery.map((arr) => (
                                    <Card key={arr.info.id} arr={arr}></Card>
                                ))
                            }
                            {
                                resturantChains.map((arr) => (
                                    <Card key={arr.info.id} arr={arr}></Card>
                                ))
                            }


                        </>
                    )
                }
            </div>
            <hr />
        </div >
    )
}
export default FoodDelivery