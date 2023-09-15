import {BrowserRouter,Route,Routes} from 'react-router-dom' 

//Componentes
import Login from './Componentes/Login';

function App() {
  return (
    <main className="pay">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
