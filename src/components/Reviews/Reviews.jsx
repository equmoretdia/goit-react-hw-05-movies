import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieOptions, optionsAPI } from 'services/api';
import { List, Author, Text } from './ReviewsStyles';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      const filmReviews = await fetchMovieOptions(optionsAPI.reviews, movieId);
      const reviewsArray = filmReviews.results;
      setReviews(
        reviewsArray &&
          reviewsArray.map(review => ({
            id: review.id,
            author: review.author,
            content: review.content,
          }))
      );
    }
    fetchReviews();
  }, [movieId]);

  return (
    <List>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <Author>Author: {review.author}</Author>
            <Text>{review.content}</Text>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </List>
  );
};

export default Reviews;
