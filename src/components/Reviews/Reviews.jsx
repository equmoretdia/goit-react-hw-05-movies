import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);
  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
