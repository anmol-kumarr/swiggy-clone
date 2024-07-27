import { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../style/whatson.css'
import { FaArrowRight } from "react-icons/fa";
import Scrollbar from "./scrollbar";
import { useNavigate } from "react-router";

import { ShimmerCircularImage } from "react-shimmer-effects";

function WhatsOnYour({ loading,WhatsOnYourMindData }) {
    // const { whatsOnYourMind, setSlider, slider, setCollectionID, setCollectionName, fetchItemCollection } = useContext(UserContext)
    const[slider,setSlider]=useState(false)
    console.log(WhatsOnYourMindData)

    // console.log(whatsOnYourMind)
    const url = "https://media-assets.swiggy.com/"

    useEffect(() => {

        setSlider(true)
    }, [])
    return (


        <div className="slider-section">
            <h2>What's on your mind?</h2>
            <div className="slider-container">

            
                <Scrollbar slider={slider} >


                    {
                        loading === true ? (
                            <>
                                {Array(9).fill().map((_, index) => (
                                    <ShimmerCircularImage key={index} size={100} caption />
                                ))}
                            </>
                        ) : (
                            <>
                                {
                                    WhatsOnYourMindData.map((arr) =>
                                    (
                                    

                                        <div className='card-img' key={arr.id}>
                                            <img src={url + arr.imageId} alt="" height={150} />
                                        </div>

                                    ))
                                }
                            </>
                        )
                    }

                </Scrollbar>

            </div>

            <hr />
        </div>


    )
}


export default WhatsOnYour;