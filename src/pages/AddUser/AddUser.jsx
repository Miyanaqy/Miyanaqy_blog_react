import React, { Component } from 'react';
import UserForm from './components/UserForm';

export default class AddUser extends Component {
  static displayName = 'AddUser';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-user-page">
        <UserForm />
      </div>
    );
  }
}
