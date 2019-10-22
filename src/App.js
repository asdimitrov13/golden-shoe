import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import CarouselSlider from './components/CarouselSlider/CarouselSlider';
import axios from './axiosInstance';
import Products from './components/Products/Products';

class App extends Component {

  state = {
    menProducts: null,
    womenProducts: null
  }

  componentDidMount() {
    axios.get('/products.json')
    .then((res) => {
      const menProducts = [];
      const womenProducts = [];
      console.log(res);
      res.data.map(product => {
        if (product.gender === 'men') {
          menProducts.push(product);
        } else {
          womenProducts.push(product);
        }
      });
      this.setState({menProducts: menProducts, womenProducts: womenProducts});
    });
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />

        
        <Route path="/men" component={Products} />
        <Route path="/women" component={Products} />
        <Route path="/" exact component={CarouselSlider} />

      </div>
    );
  }
}

export default App;
