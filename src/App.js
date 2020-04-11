import React from 'react';
import './App.css';
import Header from './componence/Header/Header';
import Shop from './componence/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componence/review/Review';
import Inventory from './componence/Inventory/Inventory';
import NotFound from './componence/NotFound/NotFound';
import ProductDetail from './componence/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
     <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
