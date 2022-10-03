import React from 'react'
import WriteUs from './WriteUs'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <div className='text-2xl mt-10 p-10 text-white bg-gradient-to-r from-sky-500 to-indigo-500'>
         <Container fluid >
            <Row className='flex'>
                <Col className=' ml-80  self-center'>
                    <h1>Contact Us </h1>
                    <address>South Park Avanue, South City Mall</address>
                    <p>Near Lake Sawanger</p>
                    <code className='text-white'>Contact No : <number>+919382376408</number> </code>

                </Col>
                <Col>
                    <WriteUs/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
