import { SiSwiggy } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState, useRef, useEffect, useContext } from "react";
import UserContext from "../context/userContext";
import '../style/navigation.css'
function Navigation() {

    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    const { suggestedLocation, setsuggestedLocation, usercoordinates, setUserCoordinates } = useContext(UserContext)

    const [dataForLocation, setDataForLocation] = useState([])
    useEffect(() => {
        setDataForLocation(suggestedLocation)
    }, [suggestedLocation])

    const handleDivClick = () => {
        setIsVisible(true);
    };

    const handleOutsideClick = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true);
        };
    }, []);




    const [location, setLocation] = useState('')
    const [suggestionVisible, setSuggestionVisible] = useState(false)
    const loctionHandler = (e) => {
        const initialInputValue = e.target.value;
        setLocation(initialInputValue)

        const modifiedValue = initialInputValue.replace(' ', '+')
        // console.log(modifiedValue)
        locationUpdate(modifiedValue)

    }
    async function locationUpdate(modifiedValue) {
        const locationUrl = `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${modifiedValue}&type=`
        try {
            const response = await fetch(locationUrl)
            const locationOutput = await response.json()
            setsuggestedLocation(locationOutput)
        }
        catch (err) {
            console.log(err)

        }
    }
    const locationList = suggestedLocation.data
    console.log(locationList)




    const handlingGeoPostion = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        }
        else {
            alert('Location is not Supported in your system')
        }
    }
    const showPosition = (position) => {
        const UserCordinates = {

            long: position.coords.longitude,
            lat: position.coords.latitude,
            // setUserCoordinates(position)

        }
        setUserCoordinates(UserCordinates)
    }



    console.log(usercoordinates)


    return (
        <div className="nav">
            <div className="logo-section">
                <SiSwiggy className="swiggylogo"></SiSwiggy>
                <span className="logo">SWIGGY</span>
                <span className="line"></span>
            </div>
            <div className="location" onClick={handleDivClick}>
                <FaLocationArrow className="color search " />
                <span>Setup your precise location</span>
                <FaAngleDown className="color"></FaAngleDown>


                <div className="floating-location-section">

                    {isVisible && (
                        <div ref={divRef} className="location-floating-cont" >
                            <div>

                                <div className="location-input">
                                    <FaLocationArrow className="location-icon-search-section" />


                                    <input onChange={loctionHandler} value={location} className="location-input-field" type="text" placeholder="Search for Area StreetName..." />
                                </div>
                            </div>
                            <hr className="hr" />
                            <div className="locate-me" onClick={handlingGeoPostion}>
                                <FaLocationArrow className="location-icon-search-section" />
                                <span>Locate me using GPS</span>
                            </div>


                            <div>
                                {
                                    Array.isArray(locationList) && (
                                        locationList.map((item) => (
                                            <div className="suggested-location-section-cont">
                                                <hr className="hr" />
                                                <div className="suggested-location">
                                                    <div>
                                                        <FaLocationArrow className="location-low-color-arrow"></FaLocationArrow>

                                                    </div>
                                                    <div className="both-location-text">

                                                        <div className="location-primary-text" >
                                                            {item.structured_formatting.main_text}
                                                        </div>
                                                        <div className="location-secondary-text">
                                                            {
                                                                item.structured_formatting.secondary_text
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    )}


                    {/* <input type="text" value={inputvalue}  /> */}
                </div>
            </div>
            <div className="input">
                <input type="text" className="input-field" placeholder="Search for Dishes and Resturants" />
                <span><CiSearch className="search"></CiSearch></span>
            </div>
            <div>
                <IoPersonCircleSharp className="user"></IoPersonCircleSharp>
            </div>


        </div>
    )
}
export default Navigation;