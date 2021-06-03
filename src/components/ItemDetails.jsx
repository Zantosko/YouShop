import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getItemDetails } from '../actions/itemDetail-actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { addItemToCart } from '../actions/cart-actions'

export default function ItemDetails({ match }) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.itemDetails)
  const pageID = match.params.id;

  useEffect(() => {
    getItemDetails(dispatch, pageID)
  },[])

  return (
    <div>
      {
        product[0] != null ?
        <Container className="mt-5 d-flex flex-column">
          <Row>
            <Col xs={12} md={6}>
                <img src={product[0].image} className="item-img"/>
            </Col>
            <Col xs={12} md={6}>
                <Card>
                  <Card.Body className="item-body d-flex flex-column justify-content-around">
                    <Card.Title className="item-title">{product[0].title}</Card.Title>
                    <Card.Text className="item-price">${product[0].price}</Card.Text>
                    <Button 
                      className="item-btn"
                      onClick={() => addItemToCart(dispatch, product[0])}
                      >Add To Cart</Button>
                  </Card.Body>
                </Card> 
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="item-description mt-2">
                <h4>Description:</h4>
                {product[0].description}
              </div>
            </Col>
          </Row>
        </Container> :
        <p>Loading</p>
      }
    </div>
  )
}
