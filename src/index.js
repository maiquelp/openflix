import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NewCategory from './pages/NewCategory';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/newvideo" component={NewVideo} exact />
      <Route path="/newcategory" component={NewCategory} exact />
      <Route component={() => (<div>Erro 404 - Verifique a URL</div>)} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


