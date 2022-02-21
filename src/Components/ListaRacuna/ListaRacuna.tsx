import { Link as button } from "react-router-dom"
import IRacun from "../../Interface"
import DetaljiRacuna from "../DetaljiRacuna/DetaljiRacuna"
import "./ListaRacuna.scss"

const ListaRacuna: React.FC<IRacun> = ({ racuni }) => {

    // const otvoriDetalje=(racun:IRacun["racuni"])=>{
    //     return(
    //         <DetaljiRacuna racun={racun} />
    //     )
    // }

    let ukupno=0;

    racuni.forEach(racun => {
        ukupno+=racun.cijena_s_porezom
    });

    return (
        <>
        <table className="Lista sortable">
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
            {racuni.map(racun =>
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
                    <td><button className="Lista--btn">Uredi</button><button className="Lista--btn" onClick={()=>{racuni.splice(racun.redni_broj_racuna); console.log(racun)}}>Obriši</button></td>
                </tr>
            )}</tbody>
        </table>
        <h3>Ukupan iznos računa: </h3><p>{ukupno} kn</p>
        </>
    )
}

export default ListaRacuna
