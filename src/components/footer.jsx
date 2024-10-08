import { SiSwiggy } from "react-icons/si";
import UserContext from "../context/userContext";
import { useContext } from "react";
import '../style/footer.css'
import playStore from '../assets/play_store.avif'
import iosStore from '../assets/app_store.avif'
function Footer() {
    // const { swiggyDownload } = useContext(UserContext)
    // console.log(footer)
    // const androidAppImage=footer.androidAppImage
    // const iosAppImage=footer.iosAppImage
    // const url = "https://media-assets.swiggy.com/"
    return (
        <div className="footer">
            <div className="download-swiggy">
                <div className="download-cont">

                    <div className="download-heading">
                        For better experience,download the Swiggy app now
                    </div>
                    <div className="download-image">
                        <div>
                            <img src={playStore} alt="" height={80} />
                        </div>
                        <div>
                            <img src={iosStore} alt="" height={80} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <div className="footer-heading">
                    <div className="footer-logo-cont">


                        <span>Foodie</span>
                    </div>
                    <p>

                        © 2024 Bundl Technologies Pvt. Ltd
                    </p>
                </div>


                <div className="footer-links">
                    <p>
                        Company
                    </p>
                    <li>
                        About

                    </li>
                    <li>
                        Careers

                    </li>
                    <li>
                        Team

                    </li>
                    <li>
                        Swiggy One

                    </li>
                    <li>

                        Swiggy Instamart
                    </li>
                    <li>

                        Swiggy Genie
                    </li>
                </div>
                <div className="footer-links">
                    <div>

                        <p>
                            Contact us
                        </p>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>

                    </div>
                    <div>
                        <p>Legal</p>
                        <li>Terms & conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                        <li>Investor Relations</li>
                    </div>
                </div>
                <div className="footer-links">
                    <p>We deliver to:</p>
                    <li>Banglore</li>
                    <li>Gurgaon</li>
                    <li>Hydrabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <li>589+ Cities</li>
                </div>
            </div>
        </div>
    )
}
export default Footer;