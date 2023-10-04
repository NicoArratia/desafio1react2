import React from 'react';
import {Container,Row, Col} from 'react-bootstrap'

const NotFound = () => {
  return (
    
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="text-center">
            <h1>Error 404</h1>
            <p>La página que buscas no se encuentra.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound