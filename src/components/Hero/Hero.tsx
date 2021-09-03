import { StyledSection, StyledContainer, StyledTitle } from './Hero.styles';

interface Props {}
const Hero = ({}: Props) => {
  return (
    <StyledSection id='home'>
      <StyledContainer className='bd__grid'>
        <div className='home__data'>
          <StyledTitle>
            new <br />
            <span>arrivals</span>
          </StyledTitle>
          <button className='button__cta'>go shopping</button>
        </div>
        <img src='/images/home.png' alt='' className='hero__img' />
      </StyledContainer>
    </StyledSection>
  );
};

export default Hero;
