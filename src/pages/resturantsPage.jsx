import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
import { RxDividerVertical } from "react-icons/rx";
import { GiPathDistance } from "react-icons/gi";
import '../style/resturants.css'
import Navigation from "../components/navigation";
import Collapsible from "react-collapsible";
import CollapsibleList from "../components/colapsibleList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import MenuList from "../components/menuList";
import { IoMdBicycle } from "react-icons/io";
const Resturant = () => {
    const { resturantId } = useParams()
    const { lat, long } = useSelector((state) => state.location[0])

    // console.log(lat)
    // console.log(long)
    const [resturantData, setResturantData] = useState([])
    const [itemList, setItemList] = useState([])
    useEffect(() => {
        const fetchResturantData = async () => {
            const response = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${resturantId}&submitAction=ENTER`)
            const data = await response.json()
            console.log(data)
            setResturantData(data.data.cards[2].card.card)
            // slicedData.slice(0)
            console.log(data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards)
            const arr = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            // console.log(arr.slice(1, arr.length))
            console.log(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
            setItemList(arr.slice(1, arr.length))



        }
        fetchResturantData()

    }, [])

    return (
        <div className="resturantpage-wrapper">
            <Navigation></Navigation>
            <div className="resturantpage-cont">
                <h1 className="resturant-page-heading">{resturantData?.info?.name}</h1>
                <div className="resturants-detail">


                    <div className="padding-resturant">


                        <div className="resturant-rating-section">
                            <MdStars className="star" />{resturantData?.info?.avgRating}
                            <span>({resturantData?.info?.totalRatingsString})</span>
                            <GoDotFill className="dot" />{resturantData?.info?.costForTwoMessage}
                        </div>

                        <p className="resturant-item-span">
                            <span>{resturantData?.info?.cuisines[0]},</span>

                            <span>{resturantData?.info?.cuisines[0]}</span>
                        </p>
                        <div className="distance-section">
                            <div className="distance-icon-section">
                                <GiPathDistance className="distance-icon"></GiPathDistance>
                            </div>
                            <div>
                                <p>Outlet <span>{resturantData?.info?.areaName}</span></p>
                                <p>{resturantData?.info?.sla?.slaString}</p>

                            </div>

                        </div>

                    </div>
                    <hr className="hr" />
                    <div className="resturant-delivery-section">
                        <IoMdBicycle className="cycle-icon"></IoMdBicycle>
                        <span className="travel-distance">{resturantData?.info?.sla?.lastMileTravelString} </span>
                        |
                        <span className="delivery-charge">
                            ₹{resturantData?.info?.feeDetails?.amount} Delivery fee will apply
                        </span>
                    </div>

                </div>
                <div>

                    {
                        itemList.map((categories) => (
                            <>

                                <div>

                                    {categories.card.card.title}

                                    <div>
                                        <MenuList item={categories?.card?.card?.itemCards} itemTwo={categories.card.card.categories}></MenuList>

                                    </div>
                                </div>

                            </>
                        ))
                    }
                </div>

            </div>
            {/* <Collapsible></Collapsible> */}
        </div>
    )
}
export default Resturant;