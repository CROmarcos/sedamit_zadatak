import React, { useState } from "react"
import IRacun from "../../Interface"
import "./DodajRacun.scss"

interface IProps {
    setRacuni: React.Dispatch<React.SetStateAction<IRacun["racuni"]>>
    racuni: IRacun["racuni"]
}

let brojac = 1;

const DodajRacun: React.FC<IProps> = ({ racuni, setRacuni }) => {

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

    const spremiRacun = () => {
        if (!input.broj_racuna || !input.naziv_partnera || !input.iznos_prije_poreza) return
        iznosPoreza = parseFloat(input.iznos_prije_poreza) * parseInt(input.porez) / 100
        cijenaSPorezom = parseFloat(input.iznos_prije_poreza) + iznosPoreza
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
        console.log("Brojač: ", brojac)
    }

    function prikaziOib(){
        let x=document.getElementById("input_oib")
        if(x){
            x.style.visibility="visible"
        }
    }

    function sakrijOib(){
        let x=document.getElementById("input_oib")
        if(x){
            x.style.visibility="hidden"
        }
    }

    return (
        <div>
            <div className="DodajRacun">
                <div className="DodajRacun--col left">
                    <div className="Input"><p>Broj računa: </p><input type="text" name="broj_racuna" value={input.broj_racuna} onChange={handleChange} /></div>
                    <div className="Input"><p>Datum otvaranja računa: </p><input type="date" name="datum_racuna" /></div>
                    <div className="Input"><p>Rok plaćanja: </p><input type="date" name="rok_placanja" /></div>
                    <div className="Input"><p>Poslovni partner: </p><input type="text" name="naziv_partnera" value={input.naziv_partnera} onChange={handleChange} /></div>
                </div>
                <div className="DodajRacun--col right">
                    <div className="Input"><p>Adresa poslovnog partnera: </p><input type="text" name="adresa_partnera" value={input.adresa_partnera} onChange={handleChange} /></div>
                    <div className="Input--RB">
                        <input className="RadioButton" type="radio" id="ulazno" name="smjer" value={input.smjer} onClick={prikaziOib} checked={true} /><label>Ulazni račun</label>
                        <input className="RadioButton" type="radio" id="izlazno" name="smjer" value={input.smjer} onClick={sakrijOib} /><label>Izlazni račun</label>
                    </div>
                    <div className="Input" id="input_oib"><p>OIB: </p><input type="text" name="oib" value={input.oib} onChange={handleChange} /></div>
                    <div className="Input"><p>Iznos prije poreza (kn): </p><input type="text" name="iznos_prije_poreza" value={input.iznos_prije_poreza} onChange={handleChange} /></div>
                    <div className="Input"><p>Porez (%): </p><input type="text" name="porez" value={input.porez} onChange={handleChange} /></div>
                </div>
            </div>
            <button onClick={spremiRacun}>Podnesi račun</button>
        </div>
    )
}

export default DodajRacun