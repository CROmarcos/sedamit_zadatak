import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListaRacuna from './Components/ListaRacuna/ListaRacuna';

//Pages
import NoviRacun from './Pages/NoviRacun';
import Pocetna from './Pages/Pocetna';
import store from './State/store';

function App() {
  console.log(store.getState())
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={Pocetna()} />
          <Route path='/noviracun' element={NoviRacun()} />
        </Routes>
    </div>
  );
}

export default App;
