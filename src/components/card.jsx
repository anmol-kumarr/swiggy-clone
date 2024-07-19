import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import '../style/card.css'
function Card({ arr }) {
    const url = "https://media-assets.swiggy.com/"
    return (
        <div className="cards" key={arr.info.id}>
            <div className="images-section" >
                <img  className="images" src={url+arr.info.cloudinaryImageId}  alt="" />
            </div>
            <div className="text">
                <div className="title">
                    {

                        arr.info.name.length > 22 ? (arr.info.name.substring(0, 22) + "...") : (arr.info.name)
                    }
                </div>
                <div className="rating">
                    <MdStars className="star" /><span>
                        {arr.info.avgRating}
                    </span>
                    <span className="dot-section">
                    
                        <GoDotFill className="dot" />
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
                        arr.info.cuisines.length > 1 ? (<span>, {arr.info.cuisines[1]}</span>) : ("")
                    }
                </span>
                <p className="font">
                    {arr.info.areaName}
                </p>
            </div>
        </div>
    )
}
export default Card