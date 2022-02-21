import IRacun from "../../Interface"

interface IProps {
    racuni: IRacun["racuni"]
}

const DetaljiRacuna=(racunId: number)=>{
    
    return(
        <div>
            <p>ID računa: </p>
        </div>
    )
}

export default DetaljiRacuna