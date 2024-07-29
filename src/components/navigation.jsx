import { SiSwiggy } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState, useRef, useEffect, useContext } from "react";
import UserContext from "../context/userContext";
import '../style/navigation.css'
import { useDispatch } from "react-redux";
import { add } from "../redux/locationSlice"
function Navigation() {

    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    const { suggestedLocation, setsuggestedLocation } = useContext(UserContext)

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



    // fetching location suggestion____________________________________________________________________________


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
    // console.log(locationList)

    // ---------------------------------------------------------------------------------------------------------
    // setting coordinates_______________________________________________________________________________

    const [userCoordinates, setUserCoordinates] = useState({
        long: '',
        lat: ''
    })
    const handlingGeoPostion = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        }
        else {
            alert('Location is not Supported in your system')
        }
    }
    const showPosition = (position) => {
        const coordinates = {
            long: position?.coords?.longitude,
            lat: position?.coords?.latitude
        };
        if(userCoordinates!==coordinates) setUserCoordinates(coordinates)

        sessionStorage.setItem('user-coordinates', JSON.stringify(coordinates))
    }
    const dispatch = useDispatch()
    const key = '608e32d016e7ab5423902da22030645b'

    useEffect(() => {
        const fetchCity=async()=>{
            try{
                const response=await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${userCoordinates.lat}&lon=${userCoordinates.long}&limit=1&appid=${key}`)
                const city=await response.json()
                dispatch(add({userCoordinates,city}))
            }
            catch(err){
                console.log(err)
                alert('Something went wrong in fetch city function')
            }
        }
        fetchCity();
    }, [userCoordinates])




    // showPosition()

    // console.log(usercoordinates)


    return (
        <div className="nav">
            <div className="logo-section">
                <SiSwiggy className="swiggylogo"></SiSwiggy>
                <span className="logo">SWIGGY</span>
                <span className="line"></span>
            </div>
            <div className="location" onClick={handleDivClick}>
                <FaLocationArrow className="color search " />
                <span className="setup-location">Setup your precise location</span>
                <FaAngleDown className="color"></FaAngleDown>


                <div className="floating-location-section">

                    {isVisible && (
                        <div ref={divRef} className="location-floating-cont" >
                            <div className="predefine-location-heading">

                                <div className="location-input">
                                    <FaLocationArrow className="location-icon-search-section" />


                                    <input onChange={loctionHandler} value={location} className="location-input-field" type="text" placeholder="Search for Area StreetName..." />
                                </div>
                                <hr className="hr" />
                                <div className="locate-me" onClick={handlingGeoPostion}>
                                    <FaLocationArrow className="location-icon-search-section" />
                                    <span>Locate me using GPS</span>
                                </div>
                                {/* <hr className="hr" /> */}
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
                                                                item.structured_formatting.secondary_text && item.structured_formatting.secondary_text.length > 30 ? (
                                                                    <>
                                                                        {
                                                                            item.structured_formatting.secondary_text.slice(0, 30)
                                                                        }
                                                                        ...
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        {item.structured_formatting.secondary_text}
                                                                    </>
                                                                )
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