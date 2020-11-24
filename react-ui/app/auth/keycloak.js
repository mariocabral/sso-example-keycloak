import Keycloak from 'keycloak-js';
import config from './../config'

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak(config.keycloak);


export default keycloak;
