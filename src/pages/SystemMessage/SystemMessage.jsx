import React, { Component } from 'react';
import LiteTable from './components/LiteTable';

export default class SystemMessage extends Component {
  static displayName = 'SystemMessage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="system-message-page">
        <LiteTable />
      </div>
    );
  }
}
