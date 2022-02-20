import { useState } from "react"
import { Link } from "react-router-dom"
import ListaRacuna from "../Components/ListaRacuna/ListaRacuna"
import IRacun from "../Interface"

const Pocetna = () => {

    const [racuni, setRacuni] = useState<IRacun["racuni"]>([{
        id: Date.now(),
        broj_racuna: "test 01",
        redni_broj_racuna: 1,
        smjer: true,
        datum_racuna: new Date('May 04, 2021'),
        rok_placanja: new Date('March 03, 2022'),
        naziv_partnera: "Poduzece d.o.o.",
        adresa_partnera: "",
        oib: '02325566821',
        iznos_prije_poreza: 2000,
        porez: 25,
        iznos_poreza: 500,
        cijena_s_porezom: 2500
    }])
    return (
        <div>
            <ListaRacuna racuni={racuni} />
            <Link to="/noviracun">
                <button>Dodaj novi račun</button>
            </Link>
        </div>
    )
}

export default Pocetna