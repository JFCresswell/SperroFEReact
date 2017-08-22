import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import GamesPage from './components/game/GamesPage';
import ManageGamePage from './components/game/ManageGamePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="games" component={GamesPage} />
    <Route path="game" component={ManageGamePage} />
    <Route path="game/:id" component={ManageGamePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
