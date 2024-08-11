import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";
import '../style/counter.css'
const Counter = ({quantity, increaseQuantity, decreaseQuantity }) => {

    return (
        <div className="counter-cont">
            <button onClick={decreaseQuantity}  className="counter-btn"><ImMinus></ImMinus></button>
            <span className="counter-value">
                {quantity}
            </span>
            <button onClick={increaseQuantity} className="counter-btn">
                <ImPlus></ImPlus>
            </button>
        </div>
    )
}
export default Counter