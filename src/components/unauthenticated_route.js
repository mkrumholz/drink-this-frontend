import React from "react";
import { Route } from "react-router-dom";
import authStore from '../stores/auth_store.js';

export default class UnauthenticatedRoute extends React.Component {
  isNotAuthenticated = () => {
    return !authStore.isAuthed();
  }

  render() {
    if (this.isNotAuthenticated) {
      return <Route path={this.props.path} component={this.props.component} />;
    }
  }
}