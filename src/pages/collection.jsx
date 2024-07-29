import { useParams } from "react-router"
import Navigation from "../components/navigation"
import UserContext from "../context/userContext"
import { useContext, useEffect, useState } from "react"
import '../style/collection.css'
import Card from "../components/card"
import BreedCrumber from "../components/breedCrumber"
import Footer from "../components/footer"
import { ShimmerSimpleGallery, ShimmerSectionHeader } from "react-shimmer-effects";

function Collections() {
    // const {collectionItemData} = useContext(UserContext)
    const { collection_id, collection_type } = useParams()
    const [collectionData, setCollectionData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6102763&lng=85.1338404&collection=${collection_id}&tags=layout_CCS_${collection_type}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

    // console.log(collection_id)
    // console.log(collection_type)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                // console.log(data)
                setCollectionData(data)
                setLoading(false)
            }
            catch (err) {
                console.log(err)
                setError(true)
            }
        }
        fetchData()
    }, [])
    console.log()
    return (
        <div>{
            error === true ? (
                <h1>Something Went Wrong</h1>
            ) : (<>
                <Navigation></Navigation>
                <div className="collection-wrapper">

                    <div className="collection-cont">
                        {
                            loading === true ? (
                                <>
                                    <ShimmerSectionHeader />
                                    <ShimmerSimpleGallery row={7} col={4} gap={30} card imageHeight={180} fitOnFrame={false} caption />
                                </>
                            ) : (



                                <div>
                                    <h1 className="collection-heading">
                                        {collection_type}
                                    </h1>
                                    <p className="collection-discription">
                                        {
                                            collectionData.data?.cards[0].card.card.description
                                        }
                                    </p>

                                    <div>

                                    </div>

                                    <h2 className="resturants-num">
                                        {
                                            collectionData.data?.cards.slice(3).length + ' '
                                        }
                                        restaurants to explore
                                    </h2>

                                    <div className="card-section">
                                        {
                                            collectionData.data?.cards?.slice(3).map((arr) => (
                                                <Card arr={arr.card.card}></Card>
                                            ))
                                        }
                                    </div>
                                </div>





                            )
                        }
                    </div>
                </div>
            </>
            )
        }
            <Footer></Footer>
        </div>
    )
}
export default Collections