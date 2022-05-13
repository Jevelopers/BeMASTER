/* 
    ------------------------------------------
    Nombre del proyecto: BeMaster - Prueba ingreso
    Desarrollador: John Wilmer Chavarro Urrea
    Version: 0.1.1
    Fecha inicio: 10/05/2022
    ------------------------------------------
*/
import './App.css';
import {
  Routes,
  Route,
}
  from 'react-router-dom';
import Navegation from './Components/Navegation';
import Index from './Page/Index'
import AcercaDe from './Page/AcercaDe'
import Error404 from './Page/Error404'



function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navegation />
      </div>
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Index />} />
        <Route path='/acercaDe' element={<AcercaDe />} />
      </Routes>
    </div>
  );
}

export default App;
