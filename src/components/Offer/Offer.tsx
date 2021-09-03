import { StyledSection, StyledOffer, Data, Title, Desc } from './Offer.styles';

interface Props {}
const Offer = ({}: Props) => {
  return (
    <StyledSection>
      <StyledOffer>
        <Data>
          <Title>special offers</Title>
          <Desc>special discount for black friday</Desc>
          <button className='button__cta'>shop now</button>
        </Data>
      </StyledOffer>
    </StyledSection>
  );
};

export default Offer;
