import React from 'react';
import { Image, Button } from 'react-bootstrap';

import './ProductCard.css';

const productCard = (props) => {

    return (
        <div className="Product">
            <Image src={props.product.image} fluid/>
            <p>{props.product.name}</p>
            <p><strong>£{props.product.price}</strong></p>
            <Button variant="dark" onClick={props.clicked}>Add to bag</Button>
        </div>
    );
};

export default productCard;