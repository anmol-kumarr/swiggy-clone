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
    const url = 'https://media-assets.swiggy.com/'
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
        // console.log(divRef)
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsVisible(false);
            // console.log(event.target)
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
    // const [suggestionVisible, setSuggestionVisible] = useState(false)
    const loctionHandler = (e) => {
        const initialInputValue = e.target.value;
        setLocation(initialInputValue)

        const modifiedValue = initialInputValue.replace(' ', '+')
        // console.log(modifiedValue)
        locationUpdate(modifiedValue)

    }
    async function locationUpdate(modifiedValue) {
        // const locationUrl = `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${modifiedValue}&type=`
        try {
            // const response = await fetch(locationUrl)
            // const locationOutput = await response.json()

            // setsuggestedLocation(locationOutput)
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
        long: null,
        lat: null
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
        console.log('hello2')
        if (userCoordinates !== coordinates) setUserCoordinates(coordinates)

        sessionStorage.setItem('user-coordinates', JSON.stringify(coordinates))
    }

    const dispatch = useDispatch()

    useEffect(() => {
        const localCoordinates = sessionStorage.getItem('user-coordinates')
        if (localCoordinates) {
            const coordinates = JSON.parse(localCoordinates)
            setUserCoordinates(coordinates)
            console.log('test')
        }
        // else {
        // }
    }, [])

    const key = '608e32d016e7ab5423902da22030645b'
    const [cityName, setCityName] = useState([])

    const fetchCity = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${userCoordinates.lat}&lon=${userCoordinates.long}&limit=1&appid=${key}`)
            const city = await response.json()
            // console.log(city)
            setCityName(city)

            dispatch(add([{ ...userCoordinates }, { city }]))
        }
        catch (err) {
            console.log(err)
            alert('Something went wrong in fetch city function')
        }
    }

    useEffect(() => {
        if (userCoordinates.lat && userCoordinates.long) fetchCity();
    }, [userCoordinates])

    useEffect(() => {
        // handleOutsideClick()
        setIsVisible(false)
    }, [cityName])

    const [manualCity, setManualCity] = useState('')
    const handleLocationCity = (id) => {
        setManualCity(id)
    }
    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch(`https://proxy.cors.sh/https://www.swiggy.com/dapi/misc/address-recommend?place_id=${manualCity}`)
            // const response = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${manualCity}`)
            // const data = await response.json()
            // console.log(data)
            // const city=data?.data?.formatted_address
            // console.log(city)

        }
        fetchData()
    }, [manualCity])




    // showPosition()
    const [searchBar, setSearchBar] = useState('')
    const [searchBarData, setSearchBarData] = useState([])
    const [visibleSearchBar, setVisibleSearchBar] = useState(false)
    const searchBarRef = useRef(null)
    const searchBarHandler = (e) => {
        setSearchBar(e.target.value)
        setVisibleSearchBar(true)
    }
    const handleOutsideSearchClick = (event) => {
        // console.log(divRef)
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setVisibleSearchBar(false);
            // console.log(event.target)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideSearchClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideSearchClick, true);
        };
    }, []);

    useEffect(() => {
        // console.log(searchBar)
        const fetchData = async () => {
            // const data = await fetch(`https://www.swiggy.com/mapi/restaurants/search/suggest?lat=12.960059122809971&lng=77.57337538383284&str=${searchBar}`)
            const data = await fetch(`
https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${userCoordinates.lat}&lng=${userCoordinates.long}&str=${searchBar}&trackingId=undefined&includeIMItem=true`)
            const response = await data.json()
            setSearchBarData(response?.data?.suggestions)
            // console.log(response)

        }
        searchBar.length > 0 && fetchData()
    }, [searchBar])








    return (
        <div className="nav">
            <div className="logo-section">
                {/* <SiSwiggy className="swiggylogo"></SiSwiggy> */}
                <span className="logo">Foodie</span>
                <span className="line"></span>
            </div>
            <div className="location" onClick={handleDivClick}>
                <FaLocationArrow className="color search " />
                <span className="setup-location">{
                    cityName.length > 0 ? (
                        <>
                            {cityName[0].name},  {cityName[0].state}
                        </>
                    ) : (
                        <>

                            Setup your precise location
                        </>
                    )
                }
                </span>
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
                                            <div onClick={() => handleLocationCity(item.place_id)} className="suggested-location-section-cont">
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
                <input value={searchBar} onChange={searchBarHandler} type="text" className="input-field" placeholder="Search for Dishes and Resturants" />
                <span><CiSearch className="search"></CiSearch></span>


                <div ref={searchBarRef} id="searchbar" className={visibleSearchBar === true ? 'search-bar-suggestion' : 'hide-searchbar'}>
                    {
                        Array.isArray(searchBarData) && searchBarData.length > 0 ? searchBarData.map((item, index) => (
                            <>
                                <div className="single-suggestion">

                                    <img className="suggestion-img" src={url + item.cloudinaryId} alt="" height={62} width={62} />

                                    <div>
                                        <p className="suggestion-heading">{item.text}</p>
                                        <p className="suggestion-text">{item.type}</p>
                                    </div>
                                </div>
                                {
                                    searchBarData.length - 1 > index && <hr className="hr"></hr>
                                }
                            </>
                        )) : <>
                            <div className="search-bar-error">

                            <h3>Some Thing Went wrong</h3>
                            </div>
                        </>
                    }

                </div>
            </div>
            <div>
                <IoPersonCircleSharp className="user"></IoPersonCircleSharp>
            </div>


        </div >
    )
}
export default Navigation;