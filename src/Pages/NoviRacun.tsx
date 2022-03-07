import DodajRacun from "../Components/DodajRacun/DodajRacun"
import Naslov from "../Components/Naslov/Naslov"

const NoviRacun = () => {
    return (
        <div>
            <Naslov naslov="Napravi novi račun" />
            <DodajRacun />
        </div>
    )
}

export default NoviRacun