import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';

export default class ArticleList extends Component {
  static displayName = 'ArticleList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="article-list-page">
        <IntroBanner />
      </div>
    );
  }
}
