import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      {cart.length !== 0 ? cart.map(item => (
          <Container className="mt-5 d-flex justify-content-center">
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Card className="cart-card d-flex justify-content-center align-items-center">
                  <div className="card-img-container d-flex justify-content-center">
                    <Card.Img variant="top" src={item.image} className="card-img p-2"/>
                  </div>
                  <Card.Body className="card-body">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )) : 
        <h1>No Items</h1>
      }
    </div>
  )
}
