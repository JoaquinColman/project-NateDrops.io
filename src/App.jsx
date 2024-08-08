import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter basename="">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero greeting="Welcome to NatheDrop" />
                <ItemListContainer greeting="Top Featured Products" />
              </>
            } />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Top Featured Products" />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;


