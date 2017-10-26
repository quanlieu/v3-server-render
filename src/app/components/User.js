import React from 'react';
import { Link } from 'react-router';

export default class User extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className="text-danger">User page</h1>
        <div>
          <Link to="/user/one">One</Link>
        </div>
        <div>
          <Link to="/user/two">Two</Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
