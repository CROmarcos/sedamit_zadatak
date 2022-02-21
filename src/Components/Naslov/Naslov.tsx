interface IProps {
    naslov: string
}

const Naslov=({naslov}: IProps)=>{
    return(
        <h1 className="Naslov">{naslov}</h1>
    )
}

export default Naslov