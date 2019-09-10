import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class ArticleManageList extends Component {
  static displayName = 'ArticleManageList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="article-manage-list-page">
        <FilterTable />
      </div>
    );
  }
}
