import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GiPathDistance } from "react-icons/gi";
import '../style/resturants.css'
import Navigation from "../components/navigation";
import Collapsible from "react-collapsible";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { IoMdBicycle } from "react-icons/io";
import List from "../components/list";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer from "../components/footer";
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
            // console.log(data)
            setResturantData(data.data.cards[2].card.card)
            // slicedData.slice(0)
            // console.log(data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards)
            const arr = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            // console.log(arr.slice(1, arr.length))
            // console.log(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
            setItemList(arr.slice(1, arr.length - 2))



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
                                {
                                    Array.isArray(categories?.card?.card?.itemCards) && categories?.card?.card?.itemCards.length > 0 ? (

                                        <Collapsible trigger={<div className="collaps-title">{categories.card.card.title} ({categories.card.card.itemCards.length}) <MdKeyboardArrowDown></MdKeyboardArrowDown> </div>}>
                                            {
                                                categories?.card?.card?.itemCards.map((item, index) => (
                                                    <List length={categories?.card?.card?.itemCards.length} index={index} item={item}></List>
                                                ))
                                            }
                                        </Collapsible>

                                    ) : (

                                        <div>
                                            <div className="collaps-title">


                                                {categories.card.card.title}
                                            </div>

                                            <div>

                                                {
                                                    categories?.card?.card?.categories?.map((item, index) => (
                                                        <>
                                                            <Collapsible trigger={<div className="menu-sub-title">{item.title} ({item?.itemCards?.length})  <MdKeyboardArrowDown></MdKeyboardArrowDown></div>}>
                                                                {
                                                                    item?.itemCards?.map((data, index) => (
                                                                        <List length={item?.itemCards.length} index={index} item={data}></List>
                                                                    ))
                                                                }

                                                            
                                                            </Collapsible>
                                                                    {
                                                                        categories.card.card.categories.length-1>index && <hr />
                                                                    }




                                                        </>
                                                    ))
                                                }


                                            </div>
                                        </div>
                                    )

                                }
                            </>
                        ))
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}
export default Resturant;