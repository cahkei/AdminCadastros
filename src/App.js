
import './App.css';
import Navbar from './Components/Navbar';
import CustomerAdd from './Customer/Add';
import CustomerList from './Customer/List';
import ProductsAdd from './Products/Add';
import ProductsList from './Products/List';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <main>
          <Switch>  
            <Route path="/clientes/adicionar">
              <CustomerAdd></CustomerAdd>
            </Route>
            <Route path="/clientes">
              <CustomerList></CustomerList>
            </Route>        
            <Route path="/estoque/adicionar">
              <ProductsAdd></ProductsAdd>
            </Route>
            <Route path="/estoque">
              <ProductsList></ProductsList>
            </Route> 
            <Route path="/">
              <Home></Home>
            </Route> 
          </Switch>
        </main>

        <footer>
          <p>Feito por <strong>Camila Keiko</strong></p>
          <a href="https://github.com/cahkei" target="_blank">
            <IoLogoGithub></IoLogoGithub>
          </a>
          <a href="https://www.linkedin.com/in/camilakeikomaeda/" target="_blank">
            <IoLogoLinkedin></IoLogoLinkedin>
          </a>
        </footer>
      </Router>
    </>
  );
}

export default App;