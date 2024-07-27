import { useContext, useEffect, useState } from "react";
import Scrollbar from "./scrollbar";
// import UserContext from "../context/userContext";
// import { MdStars } from "react-icons/md";
import '../style/resturantchain.css'
import { ShimmerSimpleGallery } from "react-shimmer-effects";
// import { ShimmerPostList } from "react-shimmer-effects";


// import { GoDotFill } from "react-icons/go";
import Card from "./card";
function ResturantChains({ resturantChains,loading }) {
    // const url = "https://media-assets.swiggy.com/"
    // const { resturantChains ,setSlider,slider} = useContext(UserContext)
    const [slider, setSlider] = useState(false)
    // const [loading, setloading] = useState(true)
    useEffect(() => {
        setSlider(true)
    }, [])
    return (
        <div className="resturant-section">
            <h2>Top restaurant chains in Patna</h2>
            <Scrollbar slider={slider} >
                {
                    loading === true ? (
                        <>
                            <ShimmerSimpleGallery  row={1} col={4} gap={30} rounded={true} card imageHeight={180} fitOnFrame={false} caption />
                        </>
                    ) : (
                        <>
                            {
                                resturantChains.map((arr) => (<Card key={arr.id} arr={arr}></Card>))
                            }
                        </>
                    )
                
                }
            </Scrollbar>

            <hr />
        </div>
    )
}
export default ResturantChains;