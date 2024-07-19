import Navigation from "../components/navigation"
import UserContext from "../context/userContext"
import { useContext } from "react"

    function Resturants() {
        const {collectionItemData} = useContext(UserContext)
        const itemHeading=collectionItemData
        console.log(itemHeading)
        console.log('hello world')
        // const itemSubHeading=
        // const resturantsNo=
        return (
            <div>
                <Navigation></Navigation>
                <div>
                    <div>
                        <h1>{itemHeading}</h1>
                        <p>

                        </p>

                        <div>

                        </div>

                        <h2>

                        </h2>

                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default Resturants