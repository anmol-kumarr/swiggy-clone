import Card from "./card"
import Btn from "./filter"
import UserContext from "../context/userContext"
import { useContext } from "react"
import '../style/fooddelivery.css'
function FoodDelivery() {

    const { resturantChains, foodDelivery } = useContext(UserContext)
    console.log(foodDelivery)
    return (
        <div className="delivery-section">
            <h2>Restaurants with online food delivery in Patna</h2>
            <Btn></Btn>
            <div className="card-section">



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
            




            </div>

        </div>
    )
}
export default FoodDelivery