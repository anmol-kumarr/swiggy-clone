import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../style/whatson.css'
import { FaArrowRight } from "react-icons/fa";
import Scrollbar from "./scrollbar";
import { useNavigate } from "react-router";
function WhatsOnYour() {
    const { whatsOnYourMind, setSlider, slider, setCollectionID, setCollectionName, fetchItemCollection } = useContext(UserContext)

    // console.log(whatsOnYourMind)
    const url = "https://media-assets.swiggy.com/"
    useEffect(() => {

        setSlider(true)
    }, [])
    const navigate=useNavigate()
    function navigateToCollesction(entityId, item) {
        const CollectionID = entityId.slice(35, 40)
        console.log(CollectionID)
        setCollectionID(CollectionID)
        setCollectionName(item)
        fetchItemCollection()
        navigate('./resturants')

    }
    // console.log(whatsOnYourMind)
    return (


        <div className="slider-section">
            <h2>What's on your mind?</h2>
            <div className="slider-container">

                {/* <Slider {...settings}> */}
                <Scrollbar slider={slider} >

                    {
                        whatsOnYourMind.map((arr) =>
                        (
                            // <OnYourMindCard key={arr.id} data={arr} ></OnYourMindCard>)

                            <div onClick={() => navigateToCollesction(arr.action.link, arr.action.text)} className='card-img' key={arr.id}>
                                <img src={url + arr.imageId} alt="" height={150} />
                            </div>

                        ))
                    }
                </Scrollbar>
                {/* </Slider> */}

            </div>

            <hr />
        </div>


    )
}


export default WhatsOnYour;