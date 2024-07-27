import { useParams } from "react-router"
import Navigation from "../components/navigation"
import UserContext from "../context/userContext"
import { useContext, useEffect } from "react"

function Collections() {
    // const {collectionItemData} = useContext(UserContext)
    const{collection_id,collection_type}=useParams()

    const url=`https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6102763&lng=85.1338404&collection=${collection_id}&tags=layout_CCS_${collection_type}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

    console.log(collection_id)
    console.log(collection_type)
    useEffect(()=>{
        const fetchData=async ()=>{
            const response=await fetch(url)
            const data=await response.json()
            console.log(data)
        }
        fetchData()
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <div>
                <div>
                    <h1> </h1>
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
export default Collections