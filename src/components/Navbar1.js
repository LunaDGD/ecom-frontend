import React, { useContext } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

function Navbar1() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>PC Parts</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>

            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
