import { Link } from "react-router-dom"
import ListaRacuna from "../Components/ListaRacuna/ListaRacuna"
import Naslov from "../Components/Naslov/Naslov"

const Pocetna = () => {
    return (
        <div>
            <Naslov naslov="Početna stranica" />
            <ListaRacuna />
            <Link to="/noviracun">
                <button>Dodaj novi račun</button>
            </Link>
        </div>
    )
}

export default Pocetna