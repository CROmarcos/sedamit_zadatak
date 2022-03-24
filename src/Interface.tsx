import { EnumType } from "typescript";

interface IRacun {
    racuni: {
        id: number,
        broj_racuna: string,
        redni_broj_racuna: number,
        smjer: boolean | string | EnumType,
        datum_racuna: Date,
        rok_placanja?: Date,
        naziv_partnera: string,
        adresa_partnera?: string,
        oib?: string,
        iznos_prije_poreza: number,
        porez?: number,
        iznos_poreza?: number,
        cijena_s_porezom: number
    }
}

export default IRacun
