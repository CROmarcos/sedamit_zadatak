// @ts-ignore: Object is possibly 'null'.

import { useState } from 'react';
import './App.css';
import DodajRacun from './Components/DodajRacun/DodajRacun';
import ListaRacuna from './Components/ListaRacuna/ListaRacuna';
import IRacun from './Interface';

function App() {
  const [racuni, setRacuni] = useState<IRacun["racuni"]>([{
    id: 2,
    broj_racuna: "test 01",
    redni_broj_racuna: 1,
    smjer: "ulazno",
    datum_racuna: new Date('May 04, 2021'),
    rok_placanja: new Date('March 03, 2022'),
    naziv_partnera: "Poduzece d.o.o.",
    adresa_partnera: "",
    oib: '02325566821',
    iznos_prije_poreza: 2000,
    porez: 25,
    iznos_poreza: 500,
    cijena_s_porezom: 2500
  },
  {
    id: 5,
    broj_racuna: "test 02",
    redni_broj_racuna: 2,
    smjer: "ulazno",
    datum_racuna: new Date('May 04, 2022'),
    rok_placanja: new Date('March 03, 2023'),
    naziv_partnera: "Poduzece2 d.o.o.",
    adresa_partnera: "",
    oib: '02325562221',
    iznos_prije_poreza: 2000,
    porez: 26,
    iznos_poreza: 400,
    cijena_s_porezom: 2700
  },
  {
    id: 7,
    broj_racuna: "test 03",
    redni_broj_racuna: 3,
    smjer: "ulazno",
    datum_racuna: new Date('May 04, 2012'),
    rok_placanja: new Date('March 03, 2013'),
    naziv_partnera: "Poduzece3 d.o.o.",
    adresa_partnera: "",
    oib: '02321562221',
    iznos_prije_poreza: 1000,
    porez: 16,
    iznos_poreza: 160,
    cijena_s_porezom: 1700
  }])

  function prikaziUnos(){
    let x=document.getElementById("popis")
    let y=document.getElementById("dodaj")
    if(x != null) {
      x.style.display = "none"
    }
    if(y!=null){
      y.style.display="block"
    }
  }

  function prikaziPopis(){
    let x=document.getElementById("dodaj")
    let y=document.getElementById("popis")
    if(x != null) {
      x.style.display = "none"
    }
    if(y!=null){
      y.style.display="block"
    }
  }

  return (
    <div className="App">
      <div id='popis' className='Popis'>
        <h1>Popis računa</h1>
        <ListaRacuna racuni={racuni} />
        <button onClick={prikaziUnos}>Dodaj novi račun</button>
      </div>
      <div id='dodaj' className='Dodaj'>
        <DodajRacun racuni={racuni} setRacuni={setRacuni} />
        <button onClick={prikaziPopis}>Spremi račun</button>
        <button onClick={prikaziPopis}>Odustani</button>
      </div>
    </div>
  );
}

export default App;
