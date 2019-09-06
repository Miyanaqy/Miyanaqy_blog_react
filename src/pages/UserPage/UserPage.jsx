import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';

export default class UserPage extends Component {
  static displayName = 'UserPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-page-page">
        <IntroBanner />
      </div>
    );
  }
}
