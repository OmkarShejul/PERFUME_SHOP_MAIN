// src/components/Reviews.tsx
import React, { useState, useEffect } from 'react';
import './Reviews.css'; // Ensure to create this CSS file

// Define an interface for Review
interface Review {
  id: number;
  text: string;
  user: string;
}

// Define the props interface
interface ReviewsProps {
  productId: string; // Adjust the type if productId is not a string
}

const Reviews: React.FC<ReviewsProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]); // Specify state type
  const [newReview, setNewReview] = useState<string>(''); // Specify type for newReview

  useEffect(() => {
    // Fetch reviews from API based on productId; replace with actual API call
    const fetchReviews = async () => {
      // Example static data
      const fetchedReviews: Review[] = [
        { id: 1, text: 'Amazing scent!', user: 'John' },
        { id: 2, text: 'Lasted all day.', user: 'Jane' },
      ];
      setReviews(fetchedReviews);
    };

    fetchReviews();
  }, [productId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Define type for e
    e.preventDefault();
    if (newReview.trim()) {
      // Submit the new review to the backend; replace with actual API call
      const review: Review = {
        id: reviews.length + 1,
        text: newReview,
        user: 'Anonymous', // Replace with actual user data
      };
      setReviews([...reviews, review]);
      setNewReview('');
    }
  };

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.user}</strong>: {review.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="review-form">
        <textarea 
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Add your review..."
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
