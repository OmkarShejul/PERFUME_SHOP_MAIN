import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Reviews from './Reviews';
import ProductGallery from './ProductGallery';
import ShareButton from './ShareButton';
import './ProductPage.css';

interface Product {
  id: string | undefined;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  images: string[];
}

const ProductPage: React.FC = () => {
  const { id } = useParams(); // Do not provide a type, TypeScript will infer
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      // Example static data
      const productData: Product = {
        id: id || "",
        name: 'Chanel Coco Noir EDT Perfume Bottle Black',
        description: 'Chanel Coco Noir EDT is a magnetic and feminine fragrance that reveals the seductive personality of the urbane damsel.',
        price: 59.99,
        sizes: ['50ml', '100ml', '150ml'],
        images: [
          '/img1.jpg',  // Fixed paths, assuming the images are in public folder
          '/img11.jpg'
        ]
      };
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const { name, description, price, sizes, images } = product;

  return (
    <>
      <div className='product-main'>
        <Navbar />
        <div className="product-page">
          <div className="product-details">
            <ProductGallery images={images} />
            <div className="details">
              <h1>{name}</h1>
              <p>{description}</p>
              <span className="price">${price}</span>
              <div className="sizes">
                <h3>Available Sizes:</h3>
                <ul>
                  {sizes.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
              </div>
              <ShareButton />
            </div>
          </div>
          <Reviews productId={id || ""} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
