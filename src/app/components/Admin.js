import React from 'react';
import { Link } from 'react-router';

export default class Admin extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className="text-danger">Admin page</h1>
        <div>
          <Link to="/admin/one">One</Link>
        </div>
        <div>
          <Link to="/admin/two">Two</Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
