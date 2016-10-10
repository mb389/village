import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import LogInPage from './components/LogInPage.js';
import SignUpPage from './components/SignUpPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
		<Route path="login" component={LogInPage}/>
		<Route path="signup" component={SignUpPage}/>
		<Route path="*" component={NotFoundPage}/>
  </Route>
);
