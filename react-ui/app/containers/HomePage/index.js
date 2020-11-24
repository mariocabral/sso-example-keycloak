/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Jumbotron, Button, Row, Col, Container , ListGroup, Card, Table} from 'react-bootstrap';
import { useKeycloak } from '@react-keycloak/web';
import { FaPowerOff } from "react-icons/fa";

export default function HomePage() {
  const {keycloak, initialized} = useKeycloak();

  const logout = () => {
    keycloak.logout();
  };
  const dataUser = keycloak.tokenParsed;
  console.log(dataUser);
  Name:
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={6} md={4}>
          <Jumbotron >
              <h1><FormattedMessage {...messages.header} /></h1>
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
                      <FaPowerOff/> <FormattedMessage {...messages.logout}/></Button>
                  </Card.Footer>
              </Card>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
