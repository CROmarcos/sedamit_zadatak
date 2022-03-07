import { useState } from "react";
import IRacun from "../../Interface"
import "./DodajRacun.scss"

const DodajRacun = () => {

    let iznosPoreza = 0;
    let cijenaSPorezom = 0;

    //Datum izdavanja računa
    const [dateStart, setDateStart] = useState(new Date())

    //Datum roka plaćanja
    const [dateEnd, setDateEnd] = useState(new Date())

    const [input, setInput] = useState({
        id: "",
        broj_racuna: "",
        redni_broj_racuna: "",
        smjer: "",
        datum_racuna: new Date(),
        rok_placanja: new Date(),
        naziv_partnera: "",
        adresa_partnera: "",
        oib: '',
        iznos_prije_poreza: "",
        porez: "",
        iznos_poreza: "",
        cijena_s_porezom: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function prikaziOib() {
        let x = document.getElementById("input_oib")
        if (x) {
            x.style.visibility = "visible"
        }
    }

    function sakrijOib() {
        let x = document.getElementById("input_oib")
        if (x) {
            x.style.visibility = "hidden"
        }
    }

    function dtStart() {
        let dt: Date = new Date((document.getElementById("dt-start") as HTMLInputElement).value)
        setDateStart(dt)
    }

    function dtEnd() {
        let dt: Date = new Date((document.getElementById("dt-end") as HTMLInputElement).value)
        setDateEnd(dt)
    }

    function izracunajPorez() {

    }

    return (
        <div>
            <div className="Unos">
                <div className="Unos__stupac left">
                    <div className="Input"><label>Broj računa: </label><input type="text" name="broj_racuna" value={input.broj_racuna} onChange={handleChange} /></div>
                    <div className="Input"><label>Poslovni partner: </label><input type="text" name="naziv_partnera" value={input.naziv_partnera} onChange={handleChange} /></div>
                    <div className="Input"><label>Adresa poslovnog partnera: </label><input type="text" name="adresa_partnera" value={input.adresa_partnera} onChange={handleChange} /></div>
                    <div className="Input">
                        <input className="RadioButton" type="radio" id="ulazno" name="smjer" onClick={prikaziOib} checked /><label>Ulazni račun</label>
                        <input className="RadioButton" type="radio" id="izlazno" name="smjer" onClick={sakrijOib} /><label>Izlazni račun</label>
                    </div>
                    <div className="Input" id="input_oib"><label>OIB poslovnog partnera: </label><input type="text" name="oib" value={input.oib} onChange={handleChange} /></div>
                </div>
                <div className="Unos__stupac right">
                    <div className="Input"><label>Datum otvaranja računa: </label><input id="dt-start" className="Datum" type="date" name="datum_racuna" onSelect={dtStart} /></div>
                    <div className="Input"><label>Rok plaćanja: </label><input id="dt-end" className="Datum" type="date" name="rok_placanja" onSelect={dtEnd} /></div>
                    <div className="Input"><label>Iznos prije poreza (kn): </label><input type="text" name="iznos_prije_poreza" value={input.iznos_prije_poreza} onChange={handleChange} /></div>
                    <div className="Input"><label>Porez (%): </label><input type="text" name="porez" value={input.iznos_poreza} onChange={handleChange} /></div>
                </div>
            </div>
            <div className="Unos__actions">
                <button onClick={izracunajPorez}>Izračunaj porez</button>
                <button>Podnesi račun</button>
            </div>
        </div>
    )
}

export default DodajRacun