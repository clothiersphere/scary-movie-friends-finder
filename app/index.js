import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
// import * as actions from './actions';
import App from './App';
import Main from './App/Main';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/" component={Main} />
    </Route>
  </Router>,
  document.getElementById('app'),
);

module.hot.accept();
