import IRacun from "../../Interface"

const ListaRacuna: React.FC<IRacun> = ({ racuni }) => {
    return (
        <li className="Lista">
            {/* {racuni.map(racun =>
                <ul>
                    <p>Id računa: {racun.id}</p>
                    <p>Broj računa: {racun.broj_racuna}</p>
                    <p>Redni broj računa: {racun.redni_broj_racuna}</p>
                    <p>Smjer: {racun.smjer}</p>
                    <p>Datum: {racun.datum_racuna.toLocaleDateString()}</p>
                    <p>Partner: {racun.naziv_partnera}</p>
                    <p>Cijena s porezom: {racun.cijena_s_porezom} kn</p>
                </ul>
            )} */}
        </li>
    )
}

export default ListaRacuna
