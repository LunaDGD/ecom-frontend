import axios from 'axios';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { Store } from '../Store';
import Rating from './Rating';

const Products = ({ product }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    Navigate('/cart');
  };
  return (
    <Card>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />

        <Card.Text>${product.price}</Card.Text>
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Products;
