import React from 'react';
import Navbar from './Navbar';
import FooterComponent from './footer';
import './AllPerfumeProducts.css'; // Ensure this CSS file is also updated

// Define a Product interface
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Example product data with 24 products total
const products: Product[] = [
  {
    id: '1',
    name: 'Floral Essence',
    description: 'A refreshing floral perfume for all occasions.',
    price: 59.99,
    image: '/img1.jpg', // Assuming these images are in the public folder
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    description: 'A crisp, ocean-inspired fragrance.',
    price: 49.99,
    image: '/img2.jpg',
  },
  {
    id: '3',
    name: 'Spice Affair',
    description: 'A warm, spicy perfume for evening wear.',
    price: 69.99,
    image: '/img3.jpg',
  },
  {
    id: '4',
    name: 'Citrus Burst',
    description: 'A zesty citrus fragrance perfect for summer.',
    price: 39.99,
    image: '/img4.jpg',
  },
  {
    id: '5',
    name: 'Lavender Dream',
    description: 'A soothing lavender scent for relaxation.',
    price: 45.99,
    image: '/img5.jpg',
  },
  {
    id: '6',
    name: 'Musk Mystique',
    description: 'A deep and sensual musk fragrance.',
    price: 69.99,
    image: '/img6.jpg',
  },
  {
    id: '7',
    name: 'Cherry Blossom',
    description: 'A sweet and floral fragrance reminiscent of spring.',
    price: 55.00,
    image: '/img7.jpg',
  },
  {
    id: '8',
    name: 'Vanilla Delight',
    description: 'A warm and comforting vanilla scent.',
    price: 39.99,
    image: '/img8.jpg',
  },
  {
    id: '9',
    name: 'Green Tea Fresh',
    description: 'A refreshing and uplifting green tea scent.',
    price: 49.99,
    image: '/img9.jpg',
  },
  {
    id: '10',
    name: 'Berry Bliss',
    description: 'A fruity blend of berries for a fun fragrance.',
    price: 42.99,
    image: '/img10.jpg',
  },
  {
    id: '11',
    name: 'Grapefruit Burst',
    description: 'A vibrant and tangy grapefruit perfume.',
    price: 50.99,
    image: '/img11.jpg',
  },
  {
    id: '12',
    name: 'Rose Petals',
    description: 'A classic rose fragrance that never goes out of style.',
    price: 55.99,
    image: '/img12.jpg',
  },
  {
    id: '13',
    name: 'Coconut Paradise',
    description: 'A tropical coconut scent for a beach vibe.',
    price: 47.99,
    image: '/img13.jpg',
  },
  {
    id: '14',
    name: 'Almond Bliss',
    description: 'A sweet almond scent with a hint of vanilla.',
    price: 45.99,
    image: '/img14.jpg',
  },
  {
    id: '15',
    name: 'Mint Fresh',
    description: 'A cool and refreshing mint fragrance.',
    price: 39.99,
    image: '/img15.jpg',
  },
  {
    id: '16',
    name: 'Sandalwood Warmth',
    description: 'A warm and woody sandalwood scent.',
    price: 69.99,
    image: '/img16.jpg',
  },
  {
    id: '17',
    name: 'Peony Bloom',
    description: 'A beautiful floral fragrance with peony notes.',
    price: 54.99,
    image: '/img17.jpg',
  },
  {
    id: '18',
    name: 'Tropical Escape',
    description: 'A fruity and floral scent that takes you on vacation.',
    price: 59.99,
    image: '/img18.jpg',
  },
  {
    id: '19',
    name: 'Spiced Apple',
    description: 'A warm and inviting apple scent with spice notes.',
    price: 48.99,
    image: '/img19.jpg',
  },
  {
    id: '20',
    name: 'Freesia Fantasy',
    description: 'A delicate freesia fragrance that is enchanting.',
    price: 52.99,
    image: '/img20.jpg',
  },
  {
    id: '21',
    name: 'Pine Forest',
    description: 'A fresh and woodsy pine scent.',
    price: 49.99,
    image: '/img21.jpg',
  },
  {
    id: '22',
    name: 'Amber Nights',
    description: 'A warm and amber scent perfect for evenings.',
    price: 65.99,
    image: '/img22.jpg',
  },
  {
    id: '23',
    name: 'Black Currant',
    description: 'A dark and rich black currant fragrance.',
    price: 44.99,
    image: '/img23.jpg',
  },
  {
    id: '24',
    name: 'Sunset Citrus',
    description: 'A bright and cheerful citrus scent.',
    price: 37.99,
    image: '/img24.jpg',
  },
];

const AllPerfumeProducts: React.FC = () => {
  return (
    <div>
        <Navbar />

        <div className="perfume-products-container">
            {products.map((product) => (
             <div key={product.id} className="perfume-card">
          <img src={product.image} alt={product.name} className="perfume-image" />
          <div className="perfume-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className="perfume-price">${product.price}</span>
          </div>
        </div>
      ))}
        </div>
        <FooterComponent />
    </div>
  );
};

export default AllPerfumeProducts;
