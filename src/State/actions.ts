import IRacun from "../Interface";
import { ActionType } from "./actionTypes";

interface DodajAction {
    type: ActionType.DODAJ,
    payload: IRacun["racuni"]
}

interface UrediAction {
    type: ActionType.UREDI,
    payload: IRacun["racuni"]
}

interface ObrisiAction {
    type: ActionType.OBRISI,
    payload: number
}

export type Action = DodajAction | UrediAction | ObrisiAction