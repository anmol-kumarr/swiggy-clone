// import NavData from "../data/navData";
// import NavigationItem from "./navigationItem";
import { SiSwiggy } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

import '../style/navigation.css'
function Navigation() {

    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

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

    const [inputvalue, setInputValue] = useState('')


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


                <div className="location-floating-cont">

                    {isVisible && (
                        <div ref={divRef} >
                            <FaLocationArrow className="color search " />
                            <span>Setup your precise location</span>
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