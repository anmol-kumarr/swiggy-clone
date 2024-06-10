import { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../style/whatson.css'
import { FaArrowRight } from "react-icons/fa";
import Scrollbar from "./scrollbar";
function WhatsOnYour() {
    const { whatsOnYourMind,setSlider,slider } = useContext(UserContext)
    // console.log(whatsOnYourMind)
    const url = "https://media-assets.swiggy.com/"
    useEffect(()=>{
        
        setSlider(true)
    },[])
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

                            <div className='card-img' key={arr.id}>
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