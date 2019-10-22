import React, { Component } from 'react';
import { Container, Row, Col, Toast } from 'react-bootstrap';

import ProductCard from './Product/ProductCard';
import axios from '../../axiosInstance';

class Products extends Component {

    state = {
        products: [],
        productsReady: false,
        showToast: false,
        chosenProd: null
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/products.json')
            .then((res) => {
                const products = [];
                const gender = this.props.location.pathname === '/men' ? 'men' : 'women';
                console.log(res);
                res.data.map(product => {
                    if (product.gender === gender)
                        products.push(product);
                });
                this.setState({ products: products, productsReady: true });
            });
    }

    addToBagHandler = (id) => {
        this.setState({chosenProd: this.state.products[2].name, showToast: true});
    }

    render() {
        let products = null;
        if (this.state.productsReady) {
            products = this.state.products.map(product => {
                return (<ProductCard product={product} key={product.id} clicked={() => this.addToBagHandler(product.id)}/>);
            });
        }

        return (
            <Container>
                <Row>
                    {products ? products : null}
                    <Toast onClose={() => this.setState({showToast: false})} show={this.state.showToast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">Success!</strong>
                        </Toast.Header>
                        <Toast.Body>You have successfully added {this.state.chosenProd} to your bag!</Toast.Body>
                    </Toast>
                </Row>

            </Container>
        );
    }
};

export default Products;