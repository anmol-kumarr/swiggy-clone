import { BiFoodTag } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { PiShootingStarLight } from "react-icons/pi";
import '../style/list.css'
import { useState } from "react";
const List = ({ item,index,length }) => {
    // console.log(item)
    const [description, setDescription] = useState(false)
    const url = 'https://media-assets.swiggy.com/'
    const readMore = () => {
        setDescription(true)
    }
    return (<>
        <div className="menu-list-wrapper">
            <div className="menu-list-text">
                <p>
                    <BiFoodTag className={item?.card?.info?.isVeg === 1 ? 'veg' : 'non-veg'}></BiFoodTag>
                </p>
                <div>
                    <h3 className="menu-item-heading">
                        {item?.card?.info?.name}
                    </h3>
                    <p className="menu-price">₹   
                        {
                            item?.card?.info?.price / 100
                        }
                    </p>
                    <p>
                        {
                            item?.card?.info?.ratings?.aggregatedRating?.hasOwnProperty('rating') && <p className="menu-rating">
                                <FaStar className="veg"></FaStar>
                                <span className="veg">
                                    {item?.card?.info?.ratings?.aggregatedRating?.rating}
                                </span> <span>(
                                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                                    )
                                </span>
                            </p>
                        }
                    </p>

                    <p className="menu-description">
                        {description === false && item?.card?.info?.description?.length > 120 ? (<>
                            {
                                item?.card?.info?.description.slice(0, 120)
                            }
                            <span className="menu-readmore" onClick={readMore}>...More</span>
                        </>) : (
                            <>
                                {

                                    item?.card?.info?.description
                                }
                            </>
                        )
                        }
                    </p>
                </div>

            </div>
            <div>
                <div>
                    <img className="menu-img" src={url + item?.card?.info?.imageId} alt="" height={30}/>
                </div>
            </div>
        </div>
    {
        length-1>index && <hr />
    }
        {/* <hr /> */}
    
    </>
    )
}
export default List