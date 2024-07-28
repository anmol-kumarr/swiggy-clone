import { useLocation } from "react-router"
import { Link } from "react-router-dom"

const BreedCrumber = () => {
    const pathName = useLocation();
    console.log(pathName)
    const pathNames = pathName.pathname.split('/').filter((x) => x)
    let breedCrumbPath = ''
    return (
        <div>
            <Link to='/'>Home</Link>
            {
                pathNames.map((name, index) => {
                    let replacedNAme = name.replace(/%20/g, ' ')
                    breedCrumbPath += `/${name}`
                    let isLast = index === pathNames.length - 1
                    return isLast ? <span key={index}>/{replacedNAme}</span> : <span key={index}><Link to={breedCrumbPath}>{`/${replacedNAme}`}</Link></span>
                })
            }
        </div>
    )
}
export default BreedCrumber