import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';

export default class AddArticle extends Component {
  static displayName = 'AddArticle';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-article-page">
        <CreateActivityForm />
      </div>
    );
  }
}
