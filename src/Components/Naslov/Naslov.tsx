import "./Naslov.scss"

interface IProps {
    naslov: string
}

const Naslov = ({ naslov }: IProps) => {
    return (
        <div className="App-header">
            <p className="Naslov">{naslov}</p>
        </div>
    )
}

export default Naslov