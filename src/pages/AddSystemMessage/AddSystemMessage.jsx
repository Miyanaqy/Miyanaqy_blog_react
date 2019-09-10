import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class AddSystemMessage extends Component {
  static displayName = 'AddSystemMessage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-system-message-page">
        <FilterTable />
      </div>
    );
  }
}
