import { FaLongArrowAltLeft } from 'react-icons/fa';

import { Button, GoBack } from './GoBackButtonStyles';

const GoBackButton = ({ path }) => {
  return (
    <Button>
      <FaLongArrowAltLeft />
      <GoBack to={path}>Go back</GoBack>
    </Button>
  );
};

export default GoBackButton;
