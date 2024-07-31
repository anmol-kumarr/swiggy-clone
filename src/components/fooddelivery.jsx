import Card from "./card"
import Btn from "./filter"
import UserContext from "../context/userContext"
import { useContext } from "react"
import '../style/fooddelivery.css'
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useSelector } from "react-redux"
function FoodDelivery({ resturantChains, foodDelivery,loading }) {
    const currentCity=useSelector((state)=>state.location[1].city[0].name)

    // const { resturantChains, foodDelivery } = useContext(UserContext)
    // console.log(resturantChains)
    // console.log(resturantChains)
    // console.log(foodDelivery)
    // const loading=true;
    return (
        <div className="delivery-section">
            <h2 className="food-delivery-heading">Restaurants with online food delivery in {currentCity}</h2>
            <Btn></Btn>
            <div className="card-section">

                {
                    loading === true ? (
                        <>
                            <ShimmerSimpleGallery row={7} col={4} gap={30}  card imageHeight={180} fitOnFrame={false} caption />
                        </>
                    ) : (
                        <>
                            {

                                foodDelivery.map((arr) => (
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