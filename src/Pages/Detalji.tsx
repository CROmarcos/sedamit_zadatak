import { Link } from "react-router-dom"
import Naslov from "../Components/Naslov/Naslov"

const Detalji = () => {
    return (
        <div>
            <Naslov naslov="Račun br." />
            <Link to="/">
                <button>Vrati se natrag</button>
            </Link>
        </div>
    )
}

export default Detalji