import { Link } from "react-router-dom"
import IRacun from "../../Interface"
import "./ListaRacuna.scss"

const ListaRacuna: React.FC<IRacun> = ({ racuni }) => {
    return (
        <>
        <table className="Lista">
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
                <tr>
                    <td><Link to="/detalji">{racun.id}</Link></td>
                    <td><Link to="/detalji">{racun.broj_racuna}</Link></td>
                    <td><Link to="/detalji">{racun.redni_broj_racuna}</Link></td>
                    <td><Link to="/detalji">{racun.smjer}</Link></td>
                    <td><Link to="/detalji">{racun.datum_racuna.toLocaleDateString()}</Link></td>
                    <td><Link to="/detalji">{racun.naziv_partnera}</Link></td>
                    <td><Link to="/detalji">{racun.cijena_s_porezom} kn</Link></td>
                    <td><button className="Lista--btn">Uredi</button><button className="Lista--btn" onClick={()=>racuni.splice(racun.id)}>Obriši</button></td>
                </tr>
            )}
        </table>
        </>
    )
}

export default ListaRacuna
