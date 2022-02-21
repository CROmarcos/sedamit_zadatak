import { Link } from "react-router-dom"
import IRacun from "../../Interface"
import "./ListaRacuna.scss"

const ListaRacuna: React.FC<IRacun> = ({ racuni }) => {
    return (
        <table className="Lista">
            <tbody>
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
            {racuni.map(racun =>
                <tr key={racun.id}>
                    <td><Link className="Lista__link" to="/detalji">{racun.id}</Link></td>
                    <td><Link className="Lista__link" to="/detalji">{racun.broj_racuna}</Link></td>
                    <td><Link className="Lista__link" to="/detalji">{racun.redni_broj_racuna}</Link></td>
                    <td><Link className="Lista__link" to="/detalji">{racun.smjer}</Link></td>
                    <td><Link className="Lista__link" to="/detalji">{racun.datum_racuna.toLocaleDateString()}</Link></td>
                    <td><Link className="Lista__link" to="/detalji">{racun.naziv_partnera}</Link></td>
                    <td><Link className="Lista__link" to="/detalji">{racun.cijena_s_porezom} kn</Link></td>
                    <td><button className="Lista--btn">Uredi</button><button className="Lista--btn" onClick={()=>{racuni.splice(racun.redni_broj_racuna); console.log(racun)}}>Obriši</button></td>
                </tr>
            )}</tbody>
        </table>
    )
}

export default ListaRacuna
