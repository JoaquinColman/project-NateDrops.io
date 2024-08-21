import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import Footer from './components/Footer/Footer'; // Importa el Footer
import './App.css';

function App() {
  return (
    <CartProvider>
      <ErrorBoundary>
        <div className="App">
          <BrowserRouter basename="">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero greeting="Welcome to NateDrops" />
                  <ItemListContainer greeting="Top Featured Products" />
                </>
              } />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting="Top Featured Products" />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
            <Footer /> 
          </BrowserRouter>
        </div>
      </ErrorBoundary>
    </CartProvider>
  );
}

export default App;





