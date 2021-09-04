import React from 'react';
import { Box } from './NewArrival.styles';

interface Props {
  image: string;
}
const NewArrival = ({ image }: Props): JSX.Element => {
  return (
    <Box>
      <img src={image} alt='' className='new__img' />
      <div className='new__link'>
        <button className='button__cta'>view product</button>
      </div>
    </Box>
  );
};

export default NewArrival;
