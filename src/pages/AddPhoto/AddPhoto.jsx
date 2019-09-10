import React, { Component } from 'react';
import SettingsForm from './components/SettingsForm';

export default class AddPhoto extends Component {
  static displayName = 'AddPhoto';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-photo-page">
        <SettingsForm />
      </div>
    );
  }
}
