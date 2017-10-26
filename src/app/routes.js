import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import App from './components/App';
import Admin from './components/Admin';
import AdminOne from './components/AdminOne';
import AdminTwo from './components/AdminTwo';
import User from './components/User';
import UserOne from './components/UserOne';
import UserTwo from './components/UserTwo';

export default (
  <Route path="/" component={App}>
    <Route path="/admin" component={Admin}>
      <Route path="/admin/one" component={AdminOne} />
      <Route path="/admin/two" component={AdminTwo} />
    </Route>
    <Route path="/user" component={User}>
      <Route path="/user/one" component={UserOne} />
      <Route path="/user/two" component={UserTwo} />
    </Route>
  </Route>
);
