import './Banner.css'; // Ensure to create this CSS file
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="banner">
      <h1>Discover Your Signature Scent</h1>
      <p>Explore our latest collections and exclusive offers</p>
      <Link to ="/allproducts">
        <button className="cta-button">Shop Now</button>
      </Link>
    </div>
  );
};

export default Banner;
