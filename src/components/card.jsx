import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import '../style/card.css'
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
function Card({ arr }) {
    const url = "https://media-assets.swiggy.com/"
    // console.log(arr)
    const CityName = useSelector((state) => state.location[1].city[0].name)

    const navigate = useNavigate()
    const handlerNavigator = () => {
        navigate(`/resturant/${CityName}/${arr.info.name}/${arr.info.id}`)
        // console.log('click')
    }

    return (
        <div onClick={handlerNavigator} className="cards" key={arr.info.id}>
            
            <div className="images-section" >
                {
                    // arr.info.cloudinaryImageId===false?(
                    //     <div>
                    //         <img src={arr.card.card.info.cloudinaryImageId} alt="" />
                    //     </div>
                    // ):(
                    <img className="images" src={url + arr.info.cloudinaryImageId} alt="" />
                    // )
                }
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