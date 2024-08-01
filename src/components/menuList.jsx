import Collapsible from "react-collapsible";
import CollapsibleList from "./colapsibleList";

const MenuList = ({ item, itemTwo }) => {
    // console.log(itemTwo)
    // console.log(categories)
    // const data=[categories]
    // Array.isArray(data)? console.log('array'):console.log('not array')
    // console.log(data)
    return (
        <div>

            <>
                {

                    Array.isArray(item) && item.length > 0 &&
                    <>
                        {
                            item.map((singleItem) => (
                                <CollapsibleList singleItem={singleItem}></CollapsibleList>
                            ))
                        }
                    </>

                }
            </>


            <>
                {

                    Array.isArray(itemTwo) && itemTwo.length > 0 && (
                        <>
                            {
                            itemTwo.map((singleItem)=>(
                                <CollapsibleList singleItem={singleItem}></CollapsibleList>
                                ))
                                }
                        </>

                    )

                }

            </>
        </div>
    )
}
export default MenuList;