import IRacun from '../Interface'
import { ActionType } from './actionTypes'

export const dodajRacun = (payload: IRacun["racuni"]) => ({
    type: ActionType.DODAJ,
    payload
})

export const urediRacun = (payload: IRacun["racuni"]) => ({
    type: ActionType.DODAJ,
    payload
})

export const obrisiRacun = (payload: number) => ({
    type: ActionType.DODAJ,
    payload
})