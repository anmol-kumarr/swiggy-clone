// import React, { useRef, useState, useEffect, useContext } from 'react';
// import '../style/scrollbar.css';
// import UserContext from "../context/userContext";
// import { IoArrowForward } from "react-icons/io5";
// import { IoArrowBack } from "react-icons/io5";
// const Scrollbar = ({ children, slider }) => {
//     // const { whatsOnYourMind } = useContext(UserContext);
//     const scrollContainerRef = useRef(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     useEffect(() => {
//         checkScrollButtons();
//         // Add an event listener to update button states when window is resized
//         window.addEventListener('resize', checkScrollButtons);
//         return () => window.removeEventListener('resize', checkScrollButtons);
//     }, []);

//     const checkScrollButtons = () => {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//         setCanScrollLeft(scrollLeft > 0);
//         setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
//     };

//     const scroll = (scrollOffset) => {
//         scrollContainerRef.current.scrollBy({
//             top: 0,
//             left: scrollOffset,
//             behavior: 'smooth',
//         });
//     };

//     return (
//         <div className='crousal'>
//             <div>

//                 {
//                     slider ? (<button
//                         className={`scroll-btn left-btn ${!canScrollLeft ? 'disabled' : ''}`}
//                         onClick={() => scroll(-240)}
//                         disabled={!canScrollLeft}
//                     >

//                         <IoArrowBack className='arrow' />
//                     </button>) : ('')
//                 }
//             </div>

//             <div className="scroll-wrapper">
//                 <div
//                     className="scroll-container"
//                     ref={scrollContainerRef}
//                     onScroll={checkScrollButtons}
//                 >
//                     {children}
//                     {/* You can use the following if you want to display cards from whatsOnYourMind */}
//                     {/* {whatsOnYourMind.map((arr) => <OnYourMindCard key={arr.id} data={arr} />)} */}
//                 </div>
//             </div>
//             <div>
//                 {
//                     slider?(            <button
//                         className={`scroll-btn right-btn ${!canScrollRight ? 'disabled' : ''}`}
//                         onClick={() => scroll(240)}
//                         disabled={!canScrollRight}
//                     >
//                         {/* <FaArrowRight className='arrow'  /> */}
//                         {/* <IoIosArrowRoundForward  className='arrow'/> */}
//                         <IoArrowForward className='arrow' />
//                     </button>):('')
//                 }
//             </div>

//         </div>
//     );
// };

// export default Scrollbar;
import React, { useRef, useState, useEffect, useContext } from 'react';
import '../style/scrollbar.css';
import UserContext from "../context/userContext";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Scrollbar = ({ children, slider }) => {
    const { whatsOnYourMind } = useContext(UserContext);
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        checkScrollButtons();
        // Add an event listener to update button states when window is resized
        window.addEventListener('resize', checkScrollButtons);
        return () => window.removeEventListener('resize', checkScrollButtons);
    }, []);

    const checkScrollButtons = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    };

    const scroll = (scrollOffset) => {
        scrollContainerRef.current.scrollBy({
            top: 0,
            left: scrollOffset,
            behavior: 'smooth',
        });
    };

    return (
        <div className='crousal'>
            {slider && (
                <button
                    className={`scroll-btn left-btn ${!canScrollLeft ? 'disabled' : ''}`}
                    onClick={() => scroll(-240)}
                    disabled={!canScrollLeft}
                >
                    <IoArrowBack className='arrow' />
                </button>
            )}
            <div className="scroll-wrapper">
                <div
                    className="scroll-container"
                    ref={scrollContainerRef}
                    onScroll={checkScrollButtons}
                >
                    {children}
                    {/* You can use the following if you want to display cards from whatsOnYourMind */}
                    {/* {whatsOnYourMind.map((arr) => <OnYourMindCard key={arr.id} data={arr} />)} */}
                </div>
            </div>
            {slider && (
                <button
                    className={`scroll-btn right-btn ${!canScrollRight ? 'disabled' : ''}`}
                    onClick={() => scroll(240)}
                    disabled={!canScrollRight}
                >
                    <IoArrowForward className='arrow' />
                </button>
            )}
        </div>
    );
};

export default Scrollbar;
