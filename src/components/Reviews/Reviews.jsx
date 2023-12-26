import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  async function fetchMovieReviews(id) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=77971c184b7d14036ed9c9196e488377`
      );
      const movieReviews = await response.json();
      // console.log(movieReviews);
      return movieReviews;
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  }

  useEffect(() => {
    async function fetchReviews() {
      const filmReviews = await fetchMovieReviews(movieId);
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
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
