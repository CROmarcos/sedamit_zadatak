import { useState } from "react"
import IRacun from "../../Interface"
import store from "../../State/store"

const ListaRacuna = () => {
    const [polje, setPolje] = useState(store.getState())
    return (
        <li className="Lista">
            {polje.map(racun =>
                <ul key={racun.id}>
                    <p>Id računa: {racun.id}</p>
                    <p>Broj računa: {racun.broj_racuna}</p>
                    <p>Redni broj računa: {racun.redni_broj_racuna}</p>
                    <p>Smjer: {racun.smjer}</p>
                    <p>Datum: {racun.datum_racuna.toLocaleDateString()}</p>
                    <p>Partner: {racun.naziv_partnera}</p>
                    <p>Cijena s porezom: {racun.cijena_s_porezom} kn</p>
                </ul>
            )}
        </li>
    )
}

export default ListaRacuna
