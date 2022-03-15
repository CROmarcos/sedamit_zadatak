import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../State/actionCreators"
import store from "../../State/store";
import "./DodajRacun.scss"

const DodajRacun = () => {

    //Izračun rednog broja
    let rn = store.getState().reducer.slice(-1)[0]

    const dispatch = useDispatch()
    const { dodajRacun } = bindActionCreators(actionCreators, dispatch)

    const [iznosPorezaText, setIznos] = useState('')
    const [cijenaSPorezomText, setCijena] = useState('')

    //Datum izdavanja računa
    const [dateStart, setDateStart] = useState(new Date())

    //Datum roka plaćanja
    const [dateEnd, setDateEnd] = useState(new Date())

    const [input, setInput] = useState({
        broj_racuna: "",
        redni_broj_racuna: "",
        smjer: "",
        naziv_partnera: "",
        adresa_partnera: "",
        oib: '',
        iznos_prije_poreza: '',
        porez: '',
        iznos_poreza: 0,
        cijena_s_porezom: 0
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
        input.oib = ""
    }

    function dtStart() {
        let dt: Date = new Date((document.getElementById("dt-start") as HTMLInputElement).value)
        setDateStart(dt)
        if (dateStart > dateEnd) {
            alert("Molimo pomaknite datum zatvaranja ugovora!");
            (document.getElementById("dt-end") as HTMLInputElement).value = ''
        }
    }

    function dtEnd() {
        let dt: Date = new Date((document.getElementById("dt-end") as HTMLInputElement).value)
        if (dateStart > dt) {
            alert("Datum zatvaranja ugovora ne može biti prije datuma otvaranja!");
            (document.getElementById("dt-end") as HTMLInputElement).value = ''
        }
        else {
            setDateEnd(dt)
        }
    }

    function izracunajPorez() {
        input.iznos_poreza = parseFloat(input.porez) * parseFloat(input.iznos_prije_poreza) / 100
        input.cijena_s_porezom = parseFloat(input.iznos_prije_poreza) + input.iznos_poreza
        setIznos("Iznos poreza: " + input.iznos_poreza.toString() + " kn")
        setCijena("Ukupan iznos: " + input.cijena_s_porezom.toString() + " kn")
        console.log(input.cijena_s_porezom)
    }

    return (
        <div>
            <div className="Unos">
                <div className="Unos__stupac left">
                    <div className="Input"><label>Broj računa: </label><input type="text" name="broj_racuna" value={input.broj_racuna} onChange={handleChange} /><span>*</span></div>
                    <div className="Input"><label>Poslovni partner: </label><input type="text" name="naziv_partnera" value={input.naziv_partnera} onChange={handleChange} /><span>*</span></div>
                    <div className="Input"><label>Adresa poslovnog partnera: </label><input type="text" name="adresa_partnera" value={input.adresa_partnera} onChange={handleChange} /></div>
                    <div className="Input">
                        <input className="RadioButton" type="radio" id="ulazno" name="smjer" value="ulazni račun" onClick={prikaziOib} defaultChecked /><label>Ulazni račun</label>
                        <input className="RadioButton" type="radio" id="izlazno" name="smjer" value="izlazni račun" onClick={sakrijOib} /><label>Izlazni račun</label>
                    </div>
                    <div className="Input" id="input_oib"><label>OIB poslovnog partnera: </label><input type="text" name="oib" value={input.oib} onChange={handleChange} /></div>
                </div>
                <div className="Unos__stupac right">
                    <div className="Input"><label>Datum otvaranja računa: </label><input id="dt-start" className="Datum" type="date" name="datum_racuna" onSelect={dtStart} /><span>*</span></div>
                    <div className="Input"><label>Rok plaćanja: </label><input id="dt-end" className="Datum" type="date" name="rok_placanja" onSelect={dtEnd} /></div>
                    <div className="Input"><label>Iznos prije poreza (kn): </label><input id="cijena" type="text" name="iznos_prije_poreza" value={input.iznos_prije_poreza} onChange={handleChange} /><span>*</span></div>
                    <div className="Input"><label>Porez (%): </label><input id="porez" type="text" name="porez" value={input.porez} onChange={handleChange} /></div>
                </div>
            </div>
            <div className="Unos__porez">
                <p>{iznosPorezaText}</p>
                <p>{cijenaSPorezomText}</p>
            </div>
            <div className="Unos__actions">
                <button onClick={izracunajPorez}>Izračunaj porez</button>

                {(!input.broj_racuna || !input.naziv_partnera || !input.iznos_prije_poreza || !dateStart) ?
                    <button onClick={() => alert("Niste ispunili vrijednosti označene znakom *!")}>Podnesi račun</button>
                    :
                    <Link to="/">
                        <button onClick={() => dodajRacun({
                            id: Date.now(),
                            broj_racuna: input.broj_racuna,
                            redni_broj_racuna: rn.redni_broj_racuna + 1,
                            smjer: (document.querySelector('input[name="smjer"]:checked') as HTMLInputElement).value.toString(),
                            datum_racuna: dateStart,
                            rok_placanja: dateEnd,
                            naziv_partnera: input.naziv_partnera,
                            adresa_partnera: input.adresa_partnera,
                            oib: input.oib,
                            iznos_prije_poreza: parseFloat(input.iznos_prije_poreza),
                            porez: parseFloat(input.porez),
                            iznos_poreza: input.iznos_poreza,
                            cijena_s_porezom: input.cijena_s_porezom
                        })
                        }>Podnesi račun</button>
                    </Link>
                }
                <Link to="/"><button>Odustani</button></Link>
            </div>
        </div>
    )
}

export default DodajRacun