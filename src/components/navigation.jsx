// import NavData from "../data/navData";
// import NavigationItem from "./navigationItem";
import { SiSwiggy } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

import { CiSearch } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";

import '../style/navigation.css'
function Navigation() {
    return (
        <div className="nav">
            <div className="logo-section">
                <SiSwiggy className="swiggylogo"></SiSwiggy>
                <span className="logo">SWIGGY</span>
                <span className="line"></span>
            </div>
            <div className="location">
                <FaLocationArrow className="color search "  />
                <span>Setup your precise location</span>
                <FaAngleDown className="color"></FaAngleDown>
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