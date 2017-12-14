import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';

export default class extends Component {
  state = {};
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path="/" render={routeProps => <MovieList {...routeProps} />} />
        </Switch>
      </div>
    );
  }
}
