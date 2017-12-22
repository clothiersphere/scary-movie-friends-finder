import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';

export default class extends Component {
  state = {};
  render() {
    const { movies } = this.props;
    return (
      <div className="Main">
        <Switch>
          <Route exact path="/" render={routeProps => <MovieList {...routeProps} {...{ movies }} />} />
        </Switch>
      </div>
    );
  }
}
