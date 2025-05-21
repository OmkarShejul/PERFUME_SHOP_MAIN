// src/components/ProductCard.tsx
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Ensure to create this CSS file

// Define the Product type
interface Product {
  id: number;           // Adjust the type if id is not a number
  image: string;
  name: string;
  description: string;
  price: number;       // Adjust the type if price is not a number
}

// Define the props for ProductCard component
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, image, name, description, price } = product;

  const handleButtonClick = () => {
    // Handle button click (e.g., add to cart)
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3>{name}</h3>
          <p>{description}</p>
          <span>${price}</span>
        </div>
      </Link>
      <button className="add-to-cart-button" onClick={handleButtonClick}>
        Read more...
      </button>
    </div>
  );
};

export default ProductCard;
