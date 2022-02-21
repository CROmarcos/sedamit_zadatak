import IRacun from "../../Interface"

interface IProps {
    racuni: IRacun["racuni"]
}

const DetaljiRacuna=(racun:IRacun["racuni"])=>{
    return(
        <div>
            {/* <p>ID računa: {racun.id}</p> */}
        </div>
    )
}

export default DetaljiRacuna