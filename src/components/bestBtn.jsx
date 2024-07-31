import { useEffect, useState } from 'react'
import '../style/bestCard.css'
function BestBtn({data,heading}) {
    // const best = data.brands
    // const heading = props.heading
    const [showmore, setShowmore] = useState(false)

    // useEffect(() => {

    //     data.length > 11 ? (setShowmore(false)) : (setShowmore(true))
    // }, [])

    function showMoreHandler() {
        setShowmore(!showmore)
    }
    // console.log(best)
    // console.log(title)
    return (
        <div>
            <h2 className="best-heading">{heading}</h2>
            <div className='best-card-section'>
                {
                    showmore === false ? (data.slice(0, 11).map((item, index) => (<div className="best-btn" key={index}>{
                        item.text.length > 22 ? (item.text.substring(0, 22) + "...") : (item.text)
                    }</div>)))

                        :
                        (data.map((item, index) => (<div className="best-btn" key={index}>{
                            item.text.length > 22 ? (item.text.substring(0, 22) + "...") : (item.text)
                        }</div>)))
                }

                
                {
                    showmore===false?(<div className='best-btn bold' onClick={showMoreHandler}>Show More</div>):(<div className='best-btn bold' onClick={showMoreHandler}>Show less</div>)
                }
                
            </div>
        </div>
    )

}
export default BestBtn;