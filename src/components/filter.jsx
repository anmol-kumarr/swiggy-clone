import filter from "../data/filter"
import '../style/btn.css'
import Scrollbar from "./scrollbar"
import { useContext } from "react";
import UserContext from "../context/userContext";
function Btn({setFilterName}) {
    const setFilter=(filter)=>{
        setFilterName(filter)
    }

    return (


        // <div className="btn-section">
            <Scrollbar>

                {
                    filter.map((arr) => (
                        <div className="btn-cont" key={arr.id}>

                            <button onClick={()=>setFilter(arr.filter)} className="btn">{arr.title}

                                <span>{
                                    'icon' in arr ? (<span>{arr.icon}</span>) : ('')
                                } </span>
                            </button>
                            {/* <span>{
                            'icon' in arr ? (<span>{arr.icon}</span>) : ('')
                            } </span> */}
                        </div>
                    ))
                }
            </Scrollbar>
        // </div>

    )
}
export default Btn