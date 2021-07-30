import AppDispatcher from '../core/dispatcher.js';
import ExampleStore from '../stores/example_store.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import Header from './header.js';
import Landing from './landing.js';
import Onboard from './onboard.js';
import SearchResults from './search_results.js'

import {
  GET_EXAMPLE_MESSAGE,
  MAIN_ID
} from '../constants.js';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      exampleMessage: ExampleStore.getExampleMessage(),
      status: ExampleStore.getStatus()
    }
  }

  _onChange() {
    this.setState({
      exampleMessage: ExampleStore.getExampleMessage(),
      status: ExampleStore.getStatus()
    });
  }

  componentDidMount() {
    ExampleStore.on(MAIN_ID, this._onChange.bind(this));

    AppDispatcher.dispatch({
      action: GET_EXAMPLE_MESSAGE,
      id: 1,
      emitOn: [{
        store: ExampleStore,
        componentIds: [MAIN_ID]
      }]
    });
  }

  componentWillUnmount() {
    ExampleStore.removeListener(MAIN_ID, this._onChange.bind(this));
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/search" component={SearchResults} />
          <Route path="/onboard" component={Onboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
}
