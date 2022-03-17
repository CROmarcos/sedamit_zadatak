import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import "./ListaRacuna.scss"
import * as actionCreators from "../../State/actionCreators"
import { State } from "../../State/reducer"
import { Link } from "react-router-dom"

const ListaRacuna = () => {
    const dispatch = useDispatch()
    const { dodajRacun, urediRacun, obrisiRacun } = bindActionCreators(actionCreators, dispatch)
    const polje = useSelector((state: State) => state.reducer)
    let sumaRacuna = 0

    polje.forEach(racun => { sumaRacuna += racun.cijena_s_porezom })

    return (
        <>
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
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.id}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.broj_racuna}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.redni_broj_racuna}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.smjer}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.datum_racuna.toLocaleDateString()}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.naziv_partnera}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.cijena_s_porezom} kn</button></Link></td>
                            <td>
                                <Link to={`/uredi/${racun.id}`}><button className="Lista--btn">Uredi</button></Link>
                                <button className="Lista--btn" onClick={() => { obrisiRacun(racun.id); }}>Obriši</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="Lista__opis">
                <label>Ukupan iznos računa: </label><span>{sumaRacuna} kn</span>
            </div>
        </>
    )
}

export default ListaRacuna
