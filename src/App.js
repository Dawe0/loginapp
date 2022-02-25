import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Bejelentkezes} from "./Bejelentkezes";
import {SzallasLista} from "./SzallasLista";
import {SzallasSingle} from "./SzallasSingle";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/bejelentkezes" exact component={Bejelentkezes} />

        <Route path="/osszes-szallas" component={SzallasLista} />

        <Route path="/szallas-:szallasId">
          {(props) => <SzallasSingle id={props.match.params.szallasId} />}
        </Route>

        <Redirect to={"/bejelentkezes"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
