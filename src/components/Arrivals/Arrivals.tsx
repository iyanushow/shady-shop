import NewArrival from '../NewArrival';
import { StyledSection } from '../styledcomponents/Section.styles';
import { StyledContainer } from './Arrivals.styles';

const newArrivals: string[] = [
  '/images/new1.png',
  '/images/new2.png',
  '/images/new3.png',
  '/images/new4.png',
  '/images/new5.png',
  '/images/new6.png',
];
const Arrivals = () => {
  return (
    <StyledSection id='new'>
      <h2 className='section__title'>new arrivals</h2>
      <a href='#' className='section__all'></a>

      <StyledContainer className='bd__grid'>
        {newArrivals.map(
          (item: string, i: number): JSX.Element => (
            <NewArrival key={i} image={item} />
          )
        )}
      </StyledContainer>
    </StyledSection>
  );
};

export default Arrivals;
