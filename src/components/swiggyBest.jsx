import UserContext from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import BestBtn from "./bestBtn";
import '../style/best.css'
function Best() {
    const { bestplace, bestCuisines } = useContext(UserContext)
    // console.log(bestCuisines)
    const BestPlceheading = 'Best Places to Eat Across Cities'
    const bestCuisinesHeading = 'Best Cuisines Near Me'

    // const [useShowBtn, setUSeShowBtn] = useState(true)

    // console.log(bestplace)
    return (
        <div className="best-cont">
            <div>

                <BestBtn  heading={BestPlceheading} data={bestplace} ></BestBtn>
            </div>
            <div>

                <BestBtn heading={bestCuisinesHeading} data={bestCuisines}></BestBtn>
            </div>
            <div className="every-resturant">
                <h2>Explore Every Restaurants Near Me</h2>
                <div className="best-card-section">
                    <div className="best-btn">Explore Resturant near me</div>
                    <div className="best-btn">Explore Top Rated Resturant Near Me</div>
                </div>
            </div>
        </div>
    )
}
export default Best;