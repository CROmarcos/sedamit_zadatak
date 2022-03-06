import { Dispatch } from 'react'
import IRacun from '../Interface'
import { Action } from './actions'
import { ActionType } from './actionTypes'

export const dodajRacun = (payload: IRacun["racuni"]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch
            ({
                type: ActionType.DODAJ,
                payload
            })
    }
}

export const urediRacun = (payload: IRacun["racuni"]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch
            ({
                type: ActionType.UREDI,
                payload
            })
    }
}

export const obrisiRacun = (payload: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch
            ({
                type: ActionType.OBRISI,
                payload
            })
    }
}