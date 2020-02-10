import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.scss'
import Navbar from './navbar';
import TreeHouse from '../pages/TreeHouses';
import Basket from '../pages/Basket';
import Home from '../pages/Home';
import Footer from './footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tree-houses" exact component={TreeHouse} />
            <Route path="/basket" exact component={Basket} />
          </Switch>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
