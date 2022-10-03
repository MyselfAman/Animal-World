import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function WriteUs() {
  return (
    <div >
        <Form>
            <Form.Group className="mb-3 w-1/2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" />
            
            </Form.Group>
            <Form.Group className="mb-3 w-1/2" controlId="formBasicDesc">
                <Form.Label>Note</Form.Label>
                <Form.Control type="textfield" placeholder="Write us something." />
                
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}
