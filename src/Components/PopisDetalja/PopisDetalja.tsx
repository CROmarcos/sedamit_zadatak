import { useParams } from "react-router-dom"
import store from "../../State/store"
import Naslov from "../Naslov/Naslov"
import "./PopisDetalja.scss"

const PopisDetalja = () => {
    const { id } = useParams()
    if (id) {
        let racun = store.getState().reducer.find(x => x.id === parseInt(id))
        if (racun) {
            return (
                <div>
                    <Naslov naslov={`Račun br. ${id}`} />
                    <div className="Popis">
                        <div className="Popis__red"><label className="Popis__label">Broj računa: </label><span>{racun.broj_racuna}</span></div>
                        <div className="Popis__red"><label className="Popis__label">Redni broj računa: </label><span>{racun.redni_broj_racuna}</span></div>
                        <div className="Popis__red"><label className="Popis__label">Smjer: </label><span>{racun.smjer}</span></div>
                        <div className="Popis__red"><label className="Popis__label">Datum računa: </label><span>{racun.datum_racuna.toLocaleDateString()}</span></div>
                        <div className="Popis__red"><label className="Popis__label">Rok plaćanja: </label><span>{(racun.rok_placanja) ? racun.rok_placanja.toLocaleDateString() : "Nije definiran rok plaćanja."}</span></div>
                        <div className="Popis__red"><label className="Popis__label">Naziv partnera: </label><span>{racun.naziv_partnera}</span></div>
                        {racun.adresa_partnera ? <div className="Popis__red"><label className="Popis__label">Adresa partnera: </label><span>{racun.adresa_partnera}</span></div> : <></>}
                        {racun.oib ? <div className="Popis__red"><label className="Popis__label">OIB: </label><span>{racun.oib}</span></div> : <></>}
                        <div className="Popis__red"><label className="Popis__label">Iznos prije poreza: </label><span>{racun.iznos_prije_poreza.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} kn</span></div>
                        <div className="Popis__red"><label className="Popis__label">Porez: </label><span>{racun.porez ? racun.porez.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) : "0"} %</span></div>
                        <div className="Popis__red"><label className="Popis__label">Iznos poreza: </label><span>{racun.iznos_poreza ? racun.iznos_poreza.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) : "0"} kn</span></div>
                        <div className="Popis__red"><label className="Popis__label">Ukupna cijena: </label><span>{racun.cijena_s_porezom.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} kn</span></div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Naslov naslov="Račun nije pronađen" />
                </div>
            )
        }
    }
    else {
        return (
            <div>
                <Naslov naslov="ID nije pronađen" />
            </div>
        )
    }
}

export default PopisDetalja