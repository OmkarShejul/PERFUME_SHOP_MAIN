// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';
import ContactSection from './ContactSection';
import ProductGallery from './ProductGallery';
import AllProducts from './allproducts';

const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/contact" element={<ContactSection />}></Route>
        <Route path="/collections" element={<ProductGallery images={['public/img1.jpg','public/img1.jpg']}></ProductGallery>}></Route>
        <Route path="/allproducts" element={<AllProducts />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
