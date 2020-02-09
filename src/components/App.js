import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.css';
import Navbar from './navbar';
import TreeHouse from '../pages/TreeHouses';
import Basket from '../pages/Basket';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={TreeHouse} />
            <Route path="/basket" exact component={Basket} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
