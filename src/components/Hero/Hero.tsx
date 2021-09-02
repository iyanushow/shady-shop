import { StyledSection, StyledContainer, StyledTitle } from './Hero.styles';

interface Props {}
const Hero = ({}: Props) => {
  return (
    <StyledSection id='home'>
      <StyledContainer>
        <div className='home__data'>
          <StyledTitle>
            new <br />
            <span>arrivals</span>
          </StyledTitle>
          <a href='' id='featured'>
            go shopping
          </a>
        </div>
        <img src='/images/home.png' alt='' className='hero__img' />
      </StyledContainer>
    </StyledSection>
  );
};

export default Hero;
