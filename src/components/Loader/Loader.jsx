import { Hourglass } from 'react-loader-spinner';
import { Wrapper } from './LoaderStyles';

const Loader = () => {
  return (
    <Wrapper>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#353535', '#ee3d3d']}
      />
    </Wrapper>
  );
};

export default Loader;
