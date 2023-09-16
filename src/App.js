import {BrowserRouter,Route,Routes} from 'react-router-dom' 

//Componentes
import Login from './Componentes/Login';
import CriarConta from './Componentes/SingUp';

function App() {
  return (
    <main className="pay">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/criarconta" element={<CriarConta/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
