import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);
  return <div>Cast: {movieId}</div>;
};

export default Cast;
