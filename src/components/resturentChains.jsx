import { useContext, useEffect } from "react";
import Scrollbar from "./scrollbar";
import UserContext from "../context/userContext";
import { MdStars } from "react-icons/md";
import '../style/resturantchain.css'
import { GoDotFill } from "react-icons/go";
function ResturantChains() {
    const url = "https://media-assets.swiggy.com/"
    const { resturantChains ,setSlider,slider} = useContext(UserContext)

    useEffect(()=>{
        setSlider(true)
    },[])
    return (
        <div className="resturant-section">
            <h2>Top restaurant chains in Patna</h2>
            <Scrollbar slider={slider} >
                {
                    resturantChains.map((arr) => (
                        <div className="card" key={arr.info.id}>
                            <div className="image-section" >
                                <img className="image" src={url + arr.info.cloudinaryImageId} alt="" />
                            </div>
                            <div className="text">
                                <div className="title">
                                {

                                    arr.info.name.length > 28 ? (arr.info.name.substring(0,28) + "...") :(arr.info.name)
                                    // {arr.info.name}
                                }
                                </div>
                                <div className="rating">
                                    <MdStars className="star"/><span>
                                        {arr.info.avgRating}
                                    </span>
                                    <span className="dot-section">
                                        {/* <BsDot className="dot" /> */}
                                        <GoDotFill  className="dot"/>
                                        {arr.info.sla.slaString}
                                    </span>
                                </div>

                                <span className="font">
                                    {
                                        arr.info.cuisines[0]
                                    }
                                </span>
                                <span className="font">

                                    {
                                            arr.info.cuisines.length>1 ? (<span>, {arr.info.cuisines[1]}</span>) : ("")
                                    }
                                </span>
                                <p className="font">
                                    {arr.info.areaName}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Scrollbar>

            <hr />
        </div>
    )
}
export default ResturantChains;