import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimalCards from './AnimalCards';
// import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import image5 from '../assets/images/4.jpg'


export default function FamousAnimals() {
  return (
    <div>
        <Container className='mt-4'>
            <Row>
              
                <Col>
                    <AnimalCards image={image2}/>
                </Col>
                <Col >
                    <AnimalCards image={image3}/>
                </Col>
                <Col >
                    <AnimalCards image={image5}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
