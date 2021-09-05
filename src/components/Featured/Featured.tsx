import Product from '../Product';
import { StyledSection } from '../styledcomponents/Section.styles';
import { StyledContainer } from './Featured.styles';

const data: { id: number; title: string; image: string; price: number }[] = [
  {
    id: 1,
    title: 'Headphone One - Black',
    image: '/images/feature1.png',
    price: 29,
  },
  {
    id: 2,
    title: 'Dr. Dre beats pill',
    image: '/images/feature2.png',
    price: 199,
  },
  {
    id: 3,
    title: 'apple air pods',
    image: '/images/feature3.png',
    price: 50,
  },
  {
    id: 4,
    title: 'Smartwatch f9',
    image: '/images/feature4.png',
    price: 99,
  },
];
const Featured = () => {
  return (
    <StyledSection id='featured'>
      <h2 className='section__title'>featured products</h2>
      <a href='#' className='section__all'>
        view all
      </a>

      <StyledContainer className='bd__grid'>
        {data.map(
          (product: { id: number; title: string; image: string; price: number }): JSX.Element => (
            <Product key={product.id} {...product} />
          )
        )}
      </StyledContainer>
    </StyledSection>
  );
};

export default Featured;
