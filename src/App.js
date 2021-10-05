import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound'
import AllServices from './Components/AllServices/AllServices';
function App() {
  return (
    <div className="bg-light w-100">
      <BrowserRouter>
        <Switch >
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <AllServices></AllServices>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
