import IRacun from "../../Interface"

const DodajRacun = () => {
    return (
        <div className="DodajRacun">
            <div className="DodajRacun__unos">
                <input type="text" name="broj_racuna" />
                <input type="date" name="datum_racuna" />
                <input type="date" name="rok_placanja" />
                <input type="text" name="naziv_partnera" />
                <input type="text" name="adresa_partnera" />
                <input type="text" name="oib" />
                <input type="text" name="iznos_prije_poreza" />
                <input type="text" name="porez" /></div>
            <button>Izračunaj porez</button>
            <button>Podnesi račun</button>
        </div>
    )
}

export default DodajRacun