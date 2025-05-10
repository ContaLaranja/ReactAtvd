import React, {useState} from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {

  const [usuarios, setUsuario] = useState([]);
  const adiconarUsuario = (novoUsuario) => {
    if(usuarios.includes(novoUsuario)){
      alert('Usuário Já existe na lista.');
      return;
    }
    setUsuario([...usuarios, novoUsuario]);
  }

  return(
    <div className='App'>
      <img src={logo} alt='Logo da empressa' className='logo'/>
      <hr/>
      <UserInput onAdduser={adiconarUsuario}/>
      <hr/>
      <UserList usuarios={usuarios}/>
    </div>
  );
}

export default App;
