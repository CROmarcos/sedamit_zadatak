import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import "./ListaRacuna.scss"
import * as actionCreators from "../../State/actionCreators"
import { State } from "../../State/reducer"
import { Link } from "react-router-dom"
import { MouseEventHandler, useCallback, useState } from "react"

const ListaRacuna = () => {
    const dispatch = useDispatch()
    const { dodajRacun, urediRacun, obrisiRacun } = bindActionCreators(actionCreators, dispatch)
    const polje = useSelector((state: State) => state.reducer)

    let sumaRacuna = 0
    polje.forEach(racun => { sumaRacuna += racun.cijena_s_porezom })

    type Data = typeof polje
    type SortKeys = keyof Data[0]
    type SortOrder = 'asc' | 'desc'

    function sortData({ tableData, sortKey, reverse }: {
        tableData: Data,
        sortKey: SortKeys,
        reverse: boolean
    }) {
        if (!sortKey) return tableData

        const sortedData = polje.sort((a, b) => {
            if (typeof a[sortKey] === 'undefined' || typeof b[sortKey] === 'undefined') return 0;
            return a[sortKey] > b[sortKey] ? 1 : -1
        })

        if (reverse) return sortedData.reverse()
        return sortedData
    }

    function SortButton({ sortOrder, columnKey, sortKey, onClick }: {
        sortOrder: SortOrder,
        columnKey: SortKeys,
        sortKey: SortKeys,
        onClick: MouseEventHandler<HTMLButtonElement>
    }) {
        return <button onClick={onClick} className={`${sortKey === columnKey && sortOrder === 'desc' ? "sort reverse" : "sort"}`}>⟁</button>
    }

    const [sortKey, setSortKey] = useState<SortKeys>('id')
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
    const sortedData = useCallback(() => sortData({ tableData: polje, sortKey, reverse: sortOrder === 'desc' }), [polje, sortKey, sortOrder])

    const stupci: { key: SortKeys, label: string }[] = [
        { key: "id", label: "ID računa" },
        { key: "broj_racuna", label: "Broj računa" },
        { key: "redni_broj_racuna", label: "Redni broj računa" },
        { key: "smjer", label: "Smjer" },
        { key: "datum_racuna", label: "Datum" },
        { key: "naziv_partnera", label: "Partner" },
        { key: "cijena_s_porezom", label: "Cijena s porezom" },
    ];

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        setSortKey(key)
    }

    return (
        <>
            <table className="Lista">
                <thead>
                    <tr>
                        {stupci.map((stupac) => {
                            return (
                                <th key={stupac.key}>
                                    {stupac.label} <SortButton columnKey={stupac.key} onClick={() => changeSort(stupac.key)} sortOrder={sortOrder} sortKey={sortKey} />
                                </th>
                            )
                        })}
                        <th>Dodatne aktivnosti</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData().map(racun =>
                        <tr key={racun.id}>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.id}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.broj_racuna}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.redni_broj_racuna}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.smjer}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.datum_racuna.toLocaleDateString()}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.naziv_partnera}</button></Link></td>
                            <td><Link to={`/detalji/${racun.id}`}><button className="Lista__link">{racun.cijena_s_porezom.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} kn</button></Link></td>
                            <td>
                                <Link to={`/uredi/${racun.id}`}><button className="Lista--btn">Uredi</button></Link>
                                <button className="Lista--btn" onClick={() => { obrisiRacun(racun.id); }}>Obriši</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="Lista__opis">
                <label>Ukupan iznos računa: </label><span>{sumaRacuna.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} kn</span>
            </div>
        </>
    )
}

export default ListaRacuna
