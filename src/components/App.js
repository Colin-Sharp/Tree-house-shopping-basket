import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.scss'
import Navbar from './navbar';
import Basket from '../pages/Basket';
import Home from '../pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/basket" exact component={Basket} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
