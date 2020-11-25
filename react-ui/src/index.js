import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

import { ReactKeycloakProvider } from '@react-keycloak/web'
import config from './config'
import keycloak from './auth/keycloak'

const eventLogger = (event, error) => {
  console.log('onKeycloakEvent')
}
  
const tokenLogger = (tokens) => {
  console.log('onKeycloakTokens')
}


ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider
    authClient={keycloak}
    initConfig={config.keycloakInit}
    onEvent={eventLogger}
    onTokens={tokenLogger}
    >
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
