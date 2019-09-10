import React, { Component } from 'react';
import SimpleBanner from './components/SimpleBanner';

export default class IndexPage extends Component {
  static displayName = 'IndexPage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="index-page-page">
        <SimpleBanner />
      </div>
    );
  }
}
