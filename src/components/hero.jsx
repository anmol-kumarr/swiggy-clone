import '../style/hero.css'
import heroImage from '../assets/header.avif'
import { useSelector } from 'react-redux'
function Hero() {
    const currentCity=useSelector((state)=>state.location[1].city[0].name)
    return (
        <div className='hero-section'>
            <div className='hero'>

                <div>
                    <div className='heading'>
                        <h1> Order Food Online in {currentCity}</h1>

                    </div>
                    <div className='curve'>
                        <svg width="100%" height="100%" viewBox="0 0 78 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939" stroke="#F15700" strokeWidth="1.5"></path></svg>
                    </div>
                </div>
                <div className='hero-img-section'>
                    <img src={heroImage} alt="" height={250} className='hero-image' />
                </div>

            </div>
        </div>
    )
}
export default Hero;

