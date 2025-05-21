// src/components/ProductGallery.tsx
import React, { useState } from 'react';
import './ProductGallery.css'; // Ensure to create this CSS file

// Define the props interface
interface ProductGalleryProps {
  images: string[]; // Array of image URLs (strings)
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState<string>(images[0]); // Specify type for selected image

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={selected} alt="Selected perfume" />
      </div>
      <div className="thumbnails">
        {images.map((img: string, index: number) => ( // Specify types for img and index
          <img 
            key={index} 
            src={img} 
            alt={`${index}`} 
            onClick={() => setSelected(img)} 
            className={selected === img ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
