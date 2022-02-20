import { Route, Routes } from 'react-router-dom';
import './App.css';

//Pages
import NoviRacun from './Pages/NoviRacun';
import Pocetna from './Pages/Pocetna';

function App() {
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
