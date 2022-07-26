import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/shop');
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const filterLow = () => {
    axios.get('/low').then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };
  const filterHigh = () => {
    axios.get('/high').then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };
  const filterNormal = () => {
    axios.get('/api/shop').then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  const onChange = (x) => {
    if (x.target.value === 'low') {
      filterLow();
      console.log(x.target.value);
    }
    if (x.target.value === 'high') {
      filterHigh();
      console.log(x.target.value);
    }
    if (x.target.value === 'normal') {
      filterNormal();
      console.log(x.target.value);
    }
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>PC Parts</title>
        </Helmet>
        <h1>Featured Products</h1>
        <select name="price" id="p" onChange={onChange}>
          <option value="normal">Default</option>
          <option value="low">low</option>
          <option value="high">high</option>
        </select>
        <div className="products">
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Shop;
