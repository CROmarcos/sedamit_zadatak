import { Link } from "react-router-dom"
import PopisDetalja from "../Components/PopisDetalja/PopisDetalja"

const Detalji = () => {
    return (
        <div>
            <PopisDetalja />
            <Link to="/">
                <button>Vrati se natrag</button>
            </Link>
        </div>
    )
}

export default Detalji