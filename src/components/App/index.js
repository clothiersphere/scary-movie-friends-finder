import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  componentWillRender(props) {
    console.log(this);
    console.log(props);
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

export default App;
