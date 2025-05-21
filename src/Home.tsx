// src/components/Home.tsx
import Navbar from './Navbar';
import Banner from './Banner';
import ProductCard from './ProductCard';
import './Home.css'; // Ensure to create this CSS file
import FooterComponent from './footer';
import { Link } from 'react-router-dom';

// Example product data; replace with actual data or fetch from API
const products = [
  {
    id: 1,
    image: 'public/img1.jpg',
    name: 'Floral Essence',
    description: 'A delightful blend of floral notes.',
    price: 59.99
  },
  {
    id: 2,
    image: 'public/img2.jpg',
    name: 'Ocean Breeze',
    description: 'Refreshing and invigorating scent.',
    price: 49.99
  },
  {
    id: 3,
    image: 'public/img3.jpg',
    name: 'Mystic Woods',
    description: 'A deep and woody fragrance.',
    price: 69.99
  },
  {
    id: 4,
    image: 'public/img4.jpg',
    name: 'Citrus Splash',
    description: 'Bright and energetic citrus notes.',
    price: 39.99
  },
  // Add more products as needed
];

const Home = () => {
  // Define the handleMoreClick function
  const handleMoreClick = () => {
    // Logic to load more products or navigate to another page
    console.log('Load more products');
  };

  return (
    <>
      <div className="home-container">
        <Navbar />
        <Banner />
        <section className="product-section">
          <h2>Featured Perfumes</h2>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link to='/allproducts'>
            <button className="more-button" onClick={handleMoreClick}>
            More
            </button>
          </Link>
        </section>
        <FooterComponent />
      </div>
    </>
  );
};

export default Home;
