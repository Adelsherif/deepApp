import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ProductPage from './ProductPage';

function ProductWrapper() {
  const { id } = useParams();
  return <ProductPage productId={id} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductWrapper />} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
