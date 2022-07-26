import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
// import Navbar from 'react-bootstrap/Navbar';
// import Badge from 'react-bootstrap/Badge';
// import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useContext } from 'react';
// import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import Footer from './components/Footer';
import Shop from './screens/Shop';
import Navbar1 from './components/Navbar1';
import { ChakraProvider } from '@chakra-ui/react';
import ContactForm1 from './screens/Contact';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="d-flex flex-column site-container">
          <header>
            <Navbar1 />
          </header>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/products/:slug" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<ContactForm1 />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
