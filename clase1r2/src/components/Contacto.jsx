import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
  return (
    <>
    <div className="container mt-5"> {}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Form>
            <h1 className="text-center">Cuéntanos, ¿En qué te podemos ayudar?</h1>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <br />
            <Button variant="danger" className="d-block mx-auto">Enviar</Button> {}
          </Form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contacto