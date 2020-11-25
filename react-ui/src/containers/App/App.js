import './App.css';
import { useKeycloak } from '@react-keycloak/web';
import HomePage from './../HomePage';


function App() {
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
      <HomePage />
    );
  }
}

export default App;
