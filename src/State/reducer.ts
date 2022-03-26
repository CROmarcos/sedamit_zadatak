import { combineReducers } from "redux"
import IRacun from "../Interface"
import { Action } from "./actions"
import { ActionType } from "./actionTypes"

const initialState: IRacun["racuni"][] = [
    {
        id: 2526,
        broj_racuna: "test 01",
        redni_broj_racuna: 1,
        smjer: "ulazni račun",
        datum_racuna: new Date('May 04, 2021'),
        rok_placanja: new Date('March 03, 2022'),
        naziv_partnera: "Firma",
        adresa_partnera: "Anina 10, Varaždin",
        oib: '02325566821',
        iznos_prije_poreza: 1000,
        porez: 12,
        iznos_poreza: 120,
        cijena_s_porezom: 1120
    }, {
        id: 2527,
        broj_racuna: "br. 2",
        redni_broj_racuna: 2,
        smjer: "ulazni račun",
        datum_racuna: new Date('May 05, 2021'),
        rok_placanja: new Date('March 03, 2023'),
        naziv_partnera: "VWXYZ d.o.o.",
        adresa_partnera: "",
        oib: '02325566831',
        iznos_prije_poreza: 2000,
        porez: 25,
        iznos_poreza: 500,
        cijena_s_porezom: 2500
    }, {
        id: 2926,
        broj_racuna: "test 007",
        redni_broj_racuna: 3,
        smjer: "izlazni račun",
        datum_racuna: new Date('May 14, 2021'),
        rok_placanja: new Date('March 13, 2022'),
        naziv_partnera: "ABC d.d.",
        adresa_partnera: "Grada Vukovara 13, Zagreb",
        oib: '',
        iznos_prije_poreza: 200,
        porez: 25,
        iznos_poreza: 50,
        cijena_s_porezom: 250
    }
]

const reducer = (state: IRacun["racuni"][] = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DODAJ:
            return [
                ...state,
                action.payload
            ]
        case ActionType.UREDI:
            return state.map(racun => racun.id === action.payload.id ? action.payload : racun)
        case ActionType.OBRISI:
            return state.filter(racun => racun.id !== action.payload)
        default:
            return state
    }
}

const reducers = combineReducers({
    reducer
})

export default reducers

export type State = ReturnType<typeof reducers>