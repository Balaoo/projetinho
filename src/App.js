import { Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home/Home';
import FormCliente from './views/cliente/FormCliente';
import Rotas from './Rotas';
import MenuSistema from './MenuSistema';

function App() {

  return (

    <div className="App">

      <MenuSistema />
     <Rotas />


      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto e Pratica II - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
