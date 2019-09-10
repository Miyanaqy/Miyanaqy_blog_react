import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class UserList extends Component {
  static displayName = 'UserList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-list-page">
        <FilterTable />
      </div>
    );
  }
}
