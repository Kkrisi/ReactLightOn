import logo from './logo.svg';
import './App.css';
import JatekTer from './components/JatekTer';
import { useState } from 'react';

function App() {

  const [lista, setLista] = useState([true,true,false,false,true,true,true,false,true,])
  
  function katt(adat){

    const slista = [...lista];

    slista[adat] =! slista[adat]
    setLista([...slista]);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>

    <article>
      <JatekTer lista = {lista} katt={katt}/>

    </article>

    <footer>Kádár Kristóf</footer>

    </div>
  );
}

export default App;
