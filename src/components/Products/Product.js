import React, { Component } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

class Product extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Image />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Product;