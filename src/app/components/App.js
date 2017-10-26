import React from 'react';
import { Link } from 'react-router';
import User from './User';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="text-center">
        <Link to="/admin">Admin</Link>---
        <Link to="/admin/one">Admin One</Link>---
        <Link to="/admin/two">Admin Two</Link>
        <br />
        <Link to="/user">User</Link>---
        <Link to="/user/one">User One</Link>---
        <Link to="/user/two">User Two</Link>
        {this.props.children}
      </div>
    );
  }
}
