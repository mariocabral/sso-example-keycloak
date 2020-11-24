/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import { useKeycloak } from '@react-keycloak/web';

export default function App() {
  const {keycloak, initialized} = useKeycloak();
  if (!initialized) {
      console.log('keycloak loading...')
      return (<div>Loading...</div>);
  }
  console.log('keycloak loaded...')
  if (initialized && ! keycloak.authenticated){
      console.log('keycloak call login...')
      keycloak.login()
  }
  if (initialized && keycloak.authenticated){
      return (
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </div>
      );
    }
}
