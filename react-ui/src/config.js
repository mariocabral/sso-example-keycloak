const config = {
    keycloak: {
        url: 'http://localhost:8080/auth/',
        realm: 'sso-example',
        clientId: 'react-ui',
      },
      keycloakInit: {
        onLoad: 'check-sso'
      }
}

export default config;