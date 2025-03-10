import { Link } from '@tanstack/react-router';

import { Routes } from '../constants/routes';
import { Container } from './Container';

export const Header = () => {
  return (
    <div className='bg-[#1D1D1D] p-7'>
      <Container className='font-nokora bg-gradient-to-b from-[#00F2D5] to-[#AD00FF] bg-clip-text text-[20px] text-transparent'>
        <Link to={Routes.INDEX}>Home</Link>
        {' | '}
        <Link to={Routes.PRODUCTS}>List Products</Link>
      </Container>
    </div>
  );
};
