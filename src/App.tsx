import { useState } from 'react';
import './App.css';
import ListaRacuna from './Components/ListaRacuna/ListaRacuna';
import IRacun from "./Interface"

function App() {

  const [racuni, setRacuni] = useState<IRacun["racuni"]>([{
    id: 100,
    broj_racuna: "test 01",
    redni_broj_racuna: 1,
    smjer: true,
    datum_racuna: new Date('May 04, 2021'),
    rok_placanja: new Date('March 03, 2022'),
    naziv_partnera: "Poduzece d.o.o.",
    adresa_partnera: "",
    oib: '02325566821',
    iznos_prije_poreza: 2000,
    porez: 25,
    iznos_poreza: 500,
    cijena_s_porezom: 2500
  }])

  return (
    <div className="App">
      <ListaRacuna racuni={racuni} />
    </div>
  );
}

export default App;
