import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';

export default class AddAlnum extends Component {
  static displayName = 'AddAlnum';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-alnum-page">
        <CreateActivityForm />
      </div>
    );
  }
}
