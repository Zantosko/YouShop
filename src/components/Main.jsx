import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import ItemDetails from './ItemDetails';

const Main = ()  => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/products" component={Products}></Route>
      <Route path="/products/:id" component={ItemDetails}></Route>
    </Switch>
  )
}

export default Main;