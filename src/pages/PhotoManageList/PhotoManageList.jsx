import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class PhotoManageList extends Component {
  static displayName = 'PhotoManageList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="photo-manage-list-page">
        <FilterTable />
      </div>
    );
  }
}
