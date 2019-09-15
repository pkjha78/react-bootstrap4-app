import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {Home, Page1, Page2, Page3, Page4 } from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import {Tsu} from '../pages/Tsu';
import Sku from '../pages/Sku';
import {Blog} from '../pages/Blog';


export function Main(){
  return(
    <main className="ui-main-body">
      <div className="container-fluid">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/tsu' component={Tsu} />
          <Route exact path='/sku' component={Sku} />
          <Route exact path='/blog' component={Blog}/>
          <Route exact path='/2' component={Page2} />
          <Route exact path='/3' component={Page3} />
          <Route exact path='/4' component={Page4} />
        </Switch>
      </div>
  </main>
  )
}
