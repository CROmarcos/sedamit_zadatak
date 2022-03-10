import { useParams } from "react-router-dom"
import store from "../../State/store"
import Naslov from "../Naslov/Naslov"

const PopisDetalja = () => {
    const { id } = useParams()
    console.log(id)
    let polje = store.getState()
    console.log(polje)
    return (
        <div>
            <Naslov naslov={`Račun br. ${id}`} />
            <div>Detalji</div>
        </div>
    )
}

export default PopisDetalja