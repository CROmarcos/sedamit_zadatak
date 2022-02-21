import React, { useState } from "react"
import IRacun from "../../Interface"
import "./DodajRacun.scss"

interface IProps {
    setRacuni: React.Dispatch<React.SetStateAction<IRacun["racuni"]>>
    racuni: IRacun["racuni"]
}

const DodajRacun: React.FC<IProps> = ({ racuni, setRacuni }) => {

    let brojac = 1;
    let iznosPoreza = 0;
    let cijenaSPorezom = 0;

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

    const izracunajPorez = () => {
        if (!input.iznos_prije_poreza || !input.porez) return
        iznosPoreza = parseFloat(input.iznos_prije_poreza) * parseInt(input.porez) / 100
        cijenaSPorezom = parseFloat(input.iznos_prije_poreza) + parseFloat(input.iznos_poreza)
        var x = document.getElementById("porez")
        if (x?.style.visibility === "hidden") {
            x!.style.visibility = "visible"
        }
    }

    const spremiRacun = () => {
        if (!input.broj_racuna || !input.naziv_partnera || !input.iznos_prije_poreza) return
        setRacuni([
            ...racuni,
            {
                id: Date.now(),
                broj_racuna: input.broj_racuna,
                redni_broj_racuna: brojac,
                smjer: "ulazno",
                datum_racuna: new Date('May 04, 2021'),
                rok_placanja: new Date('May 07, 2021'),
                naziv_partnera: input.naziv_partnera,
                adresa_partnera: input.adresa_partnera,
                oib: input.oib,
                iznos_prije_poreza: parseFloat(input.iznos_prije_poreza),
                porez: parseFloat(input.porez),
                iznos_poreza: iznosPoreza,
                cijena_s_porezom: cijenaSPorezom
            }
        ])
        setInput({
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
        brojac++
    }

    return (
        <div className="DodajRacun">
            <div className="DodajRacun__unos">
                <p>{brojac}</p>
                <div className="Input"><p>Broj računa: </p><input type="text" name="broj_racuna" value={input.broj_racuna} onChange={handleChange} /></div>
                <div className="Input"><p>Datum otvaranja računa: </p><input type="date" name="datum_racuna" /></div>
                <div className="Input"><p>Rok plaćanja: </p><input type="date" name="rok_placanja" /></div>
                <div className="Input"><p>Poslovni partner: </p><input type="text" name="naziv_partnera" value={input.naziv_partnera} onChange={handleChange} /></div>
                <div className="Input"><p>Adresa poslovnog partnera: </p><input type="text" name="adresa_partnera" value={input.adresa_partnera} onChange={handleChange} /></div>
                <div className="Input--RB">
                    <input className="RadioButton" type="radio" id="ulazno" name="smjer" value={input.smjer} /><label>Ulazni račun</label>
                    <input className="RadioButton" type="radio" id="izlazno" name="smjer" value={input.smjer} /><label>Izlazni račun</label>
                </div>
                <div className="Input"><p>OIB: </p><input type="text" name="oib" value={input.oib} onChange={handleChange} /></div>
                <div className="Input"><p>Iznos prije poreza: </p><input type="text" name="iznos_prije_poreza" value={input.iznos_prije_poreza} onChange={handleChange} /></div>
                <div className="Input"><p>Porez: </p><input type="text" name="porez" value={input.porez} onChange={handleChange} /><p> %</p></div>
            </div>
            <div id="porez" className="DodajRacun__izracun">
                <p>Iznos poreza: {iznosPoreza} kn</p>
                <p>Cijena s porezom: {cijenaSPorezom} kn</p>
            </div>
            <button onClick={izracunajPorez}>Izračunaj porez</button>
            <button onClick={spremiRacun}>Podnesi račun</button>
        </div>
    )
}

export default DodajRacun