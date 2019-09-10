import React, { Component } from 'react';
import FilterWithSearch from './components/FilterWithSearch';

export default class MessagBoard extends Component {
  static displayName = 'MessagBoard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="messag-board-page">
        <FilterWithSearch />
      </div>
    );
  }
}
