import React from 'react';
import {OBU01, Social,Topico,Psicopedagogia,Odontologia,Comedor,Residencia,Complejo,Becas} from "../../../assets/img/exportIMG"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardServicio() {
  const listaServicios=[
    {
      titulo:"Direccion de Bienestar Universitario",
      imagen:OBU01,
      url: "https://portalweb.unas.edu.pe/content/dbu"
    },
    {
      titulo:"Servicio Social",
      imagen:Social,
      url: "https://portalweb.unas.edu.pe/content/dbu/servicio-social",
    },

    {
      titulo:"Topico",
      imagen:Topico,
      url:"https://portalweb.unas.edu.pe/content/dbu/topico",
    },

    {
      titulo:"Area de Psicopedagogia",
      imagen:Psicopedagogia,
      url:"https://portalweb.unas.edu.pe/content/dbu/psicopedagogia",
    },

    {
      titulo:"Odontologia",
      imagen:Odontologia,
      url:"https://portalweb.unas.edu.pe/content/dbu/odontologia",
    },

    {
      titulo:"Comedor Universitario",
      imagen:Comedor,
      url:"https://portalweb.unas.edu.pe/content/dbu/comedor-universitario",
    },

    {
      titulo:"Residencia Estudiantil",
      imagen:Residencia,
      url:"https://portalweb.unas.edu.pe/content/dbu/residencia-estudiantil",
    },

    {
      titulo:"Complejo Deportivo",
      imagen:Complejo,
      url:"https://portalweb.unas.edu.pe/content/dbu/complejo-deportivo",
    },

    {
      titulo:"Becas para Estudio de Pregrado",
      imagen:Becas,
      url:"https://portalweb.unas.edu.pe/content/becas-pregrado",
    },

  ]
  return (
    <Row xs={1} md={3} className="g-4">
      {listaServicios.map((servicio, index) => (
        <Col key={index}>
          <Card>
                <center>
                  <Card.Header>{servicio.titulo}</Card.Header>
                </center>
                <fluid>
                  <Card.Img variant="top" src={servicio.imagen} />
                </fluid>
              <Card.Footer>
              <Card.Text>
                <center>
                  <Card.Link href={servicio.url}>Mas informacion </Card.Link>
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