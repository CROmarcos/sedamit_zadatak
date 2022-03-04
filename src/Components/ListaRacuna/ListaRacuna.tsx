import { useState } from "react"
import IRacun from "../../Interface"
import store from "../../State/store"
import "./ListaRacuna.scss"

const ListaRacuna = () => {
    const [polje, setPolje] = useState(store.getState())
    return (
        <table className="Lista">
            <thead>
                <tr>
                    <th>ID računa</th>
                    <th>Broj računa</th>
                    <th>Redni broj računa</th>
                    <th>Smjer</th>
                    <th>Datum</th>
                    <th>Partner</th>
                    <th>Cijena s porezom</th>
                    <th>Dodatne aktivnosti</th>
                </tr>
            </thead>
            <tbody>
                {polje.map(racun =>
                    <tr key={racun.id}>
                        <td><button
                            // onClick={otvoriDetalje(racun)} 
                            className="Lista__link">{racun.id}</button></td>
                        <td><button className="Lista__link">{racun.broj_racuna}</button></td>
                        <td><button className="Lista__link">{racun.redni_broj_racuna}</button></td>
                        <td><button className="Lista__link">{racun.smjer}</button></td>
                        <td><button className="Lista__link">{racun.datum_racuna.toLocaleDateString()}</button></td>
                        <td><button className="Lista__link">{racun.naziv_partnera}</button></td>
                        <td><button className="Lista__link">{racun.cijena_s_porezom} kn</button></td>
                        <td><button className="Lista--btn">Uredi</button><button className="Lista--btn">Obriši</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        // <li className="Lista">
        //     {polje.map(racun =>
        //         <ul key={racun.id}>
        //             <p>Id računa: {racun.id}</p>
        //             <p>Broj računa: {racun.broj_racuna}</p>
        //             <p>Redni broj računa: {racun.redni_broj_racuna}</p>
        //             <p>Smjer: {racun.smjer}</p>
        //             <p>Datum: {racun.datum_racuna.toLocaleDateString()}</p>
        //             <p>Partner: {racun.naziv_partnera}</p>
        //             <p>Cijena s porezom: {racun.cijena_s_porezom} kn</p>
        //         </ul>
        //     )}
        // </li>
    )
}

export default ListaRacuna
