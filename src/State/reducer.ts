import IRacun from "../Interface"
import { Action } from "./actions"
import { ActionType } from "./actionTypes"

const initialState: IRacun["racuni"][] = []

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
            return state.filter(racun => racun.id != action.payload)
        default:
            return state
    }
}

export default reducer