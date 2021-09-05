import { StyledSection } from '../styledcomponents/Section.styles';
import { StyledContainer, StyledTitle, StyledBox } from './Collection.styles';

interface Props {}
const Collection = ({}: Props) => {
  return (
    <StyledSection>
      <StyledContainer className='bd__grid'>
        <StyledBox>
          <img src='/images/backpackMan.png' alt='backpack-man' className='collection__img' />
          <div className='collection__data'>
            <StyledTitle>
              <span className='collection_subtitle'>men</span>
              <br />
              backpack
            </StyledTitle>
            <a href='#' className='collection__view'>
              View collection
            </a>
          </div>
        </StyledBox>

        <StyledBox>
          <div className='collection__data'>
            <StyledTitle>
              <span className='collection_subtitle'>women</span>
              <br />
              backpack
            </StyledTitle>
            <a href='#' className='collection__view'>
              View collection
            </a>
          </div>
          <img src='/images/backpackWoman.png' alt='backpack-man' className='collection__img' />
        </StyledBox>
      </StyledContainer>
    </StyledSection>
  );
};

export default Collection;
