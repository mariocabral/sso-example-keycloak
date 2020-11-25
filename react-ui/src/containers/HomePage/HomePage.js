import logo from './../../logo.svg';
import { useKeycloak } from '@react-keycloak/web';
import { FaPowerOff } from "react-icons/fa";
import { Button, Row, Col, Container , ListGroup, Card, Table} from 'react-bootstrap';

function HomePage() {
  const {keycloak} = useKeycloak();

  const logout = () => {
    keycloak.logout();
  };
  const dataUser = keycloak.tokenParsed;
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={6} md={4}>
                    <h1>Welcome!</h1>
                    <Card>
                        <Card.Body>
                        <Table striped bordered hover size="sm">
                            <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{dataUser.family_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name:</td>
                                <td>{dataUser.given_name}</td>
                            </tr>
                            <tr>
                                <td>Roles:</td>
                                <td>
                                <ListGroup variant="flush">
                                    { dataUser.realm_access.roles.map((d) => <ListGroup.Item key={d}>{d} </ListGroup.Item> ) } 
                                </ListGroup>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="primary" onClick={logout}>
                            <FaPowerOff/> Logout</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            </Container>
      </header>
    </div>  );
  }
  
  export default HomePage;