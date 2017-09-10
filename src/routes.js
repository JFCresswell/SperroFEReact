import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import LoginPage from './components/login/LoginPage';
import GamesPage from './components/game/GamesPage';
import PrizesPage from './components/prize/PrizesPage';
import ManagePrizePage from './components/prize/ManagePrizePage'; //eslint-disable-line import/no-named-as-default
import ManageSponsorPage from './components/prize/ManageSponsorPage'; //eslint-disable-line import/no-named-as-default
import ManageRegisterPage from './components/register/ManageRegisterPage'; //eslint-disable-line import/no-named-as-default
import ManageGamePage from './components/game/ManageGamePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="games" component={GamesPage} />
    <Route path="game" component={ManageGamePage} />
    <Route path="game/:id" component={ManageGamePage} />
    <Route path="prizes" component={PrizesPage} />
    <Route path="prize" component={ManagePrizePage} />
    <Route path="sponsor" component={ManageSponsorPage} />
    <Route path="prize/:id" component={ManagePrizePage} />
    <Route path="login" component={LoginPage} />
    <Route path="register" component={ManageRegisterPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
