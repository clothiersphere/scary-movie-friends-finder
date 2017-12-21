import React, { Component } from 'react';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  componentDidMount(){
    console.log(this);
    console.log(this.props, "props");
    this.props.getMovies();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    movies,
  } = state;

  return {
    movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(actions.getMovies()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
