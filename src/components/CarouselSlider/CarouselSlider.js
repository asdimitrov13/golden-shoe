import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import sliderOne from '../../assets/slider1.jpg';
import sliderTwo from '../../assets/slider2.jpg';
import sliderThree from '../../assets/slider3.jpg';

import './CarouselSlider.css';

const carouselSlider = (props) => {

    return (
        <Container>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={sliderOne}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>New collection by Nike</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={sliderTwo}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Adidas back to uni SALE</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={sliderThree}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Men's Reebok</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>

    );
}

export default carouselSlider;