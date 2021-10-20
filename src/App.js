
import './App.css';
import LoginComponent from './componentes/login/login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComponent from './componentes/home/home';
import RegistroProductoComponent from './componentes/productos/regProductos';
import GestionProductoComponent from './componentes/productos/lstProductos';
import GestionUsuariosComponent from './componentes/usuarios/lstUsuarios';
import RegistroUsuariosComponent from './componentes/usuarios/regUsuarios';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginComponent}></Route>
          <Route exact path="/home" component={HomeComponent}></Route>
          <Route exact path="/regProd" component={RegistroProductoComponent}></Route>
          <Route exact path="/gestionProd" component={GestionProductoComponent}></Route>
          <Route exact path="/gestoonuser" component={GestionUsuariosComponent}></Route>
          <Route exact path="/regUsuarios" component={RegistroUsuariosComponent}></Route>
        </Switch>

      </Router>

    </>
  );
}

export default App;
