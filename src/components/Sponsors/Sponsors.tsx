import Sponsor from '../Sponsor';
import { StyledSection } from '../styledcomponents/Section.styles';
import { StyledContainer } from './Sponsors.styles';

const sponsors: { id: number; image: string }[] = [
  {
    id: 1,
    image: '/images/logo1.png',
  },
  {
    id: 2,
    image: '/images/logo2.png',
  },
  {
    id: 3,
    image: '/images/logo3.png',
  },
  {
    id: 4,
    image: '/images/logo4.png',
  },
];
const Sponsors = () => {
  return (
    <StyledSection>
      <StyledContainer className='bd__grid'>
        {sponsors.map(
          ({ id, image }: { id: number; image: string }): JSX.Element => (
            <Sponsor key={id} image={image} id={id} />
          )
        )}
      </StyledContainer>
    </StyledSection>
  );
};

export default Sponsors;
