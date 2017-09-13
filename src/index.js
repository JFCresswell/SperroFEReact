/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadGames} from './actions/gameActions';
import {loadCompanies} from './actions/companyActions';
import {loadSponsors} from './actions/sponsorActions';
import {loadPrizes} from './actions/prizeActions';
import {loadPendingGames} from './actions/pendingGameActions';
import {loadSupportedGames} from './actions/supportedGameActions';

import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadSponsors());
store.dispatch(loadGames());
store.dispatch(loadCompanies());
store.dispatch(loadPrizes());
store.dispatch(loadPendingGames());
store.dispatch(loadSupportedGames());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('app')
);
