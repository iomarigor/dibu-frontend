import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ListaServicios } from '../../../core/utils/statics/service.utils';

function CardServicio() {
  const listaServicios= ListaServicios;

  return (
    <Row xs={1} md={3} className="g-4">
      {listaServicios.map((servicio, index) => (
        <Col key={index}>
          <Card>
                <center>
                  <Card.Header>{servicio.titulo}</Card.Header>
                </center>
                  <Card.Img variant="top" src={servicio.imagen} style ={{borderRadius:"0px"}} />
              <Card.Footer>
              <Card.Text>
                <center>
                  <Card.Link href={servicio.url} style={{fontFamily:"bold", color:"#1ABB9C"}}>Mas informacion </Card.Link>
                </center>
              </Card.Text>
              </Card.Footer>
          </Card>
        </Col>
    ))}
    </Row>
  );
}

export default CardServicio;