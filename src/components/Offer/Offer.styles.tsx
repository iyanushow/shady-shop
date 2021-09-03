import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 3rem 0;
`;
export const StyledOffer = styled.div`
  background: url('/images/offer.jpg') no-repeat center/cover;
  text-align: center;
`;
export const Data = styled.div`
  padding: 3.5rem 0.25rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.color.white};
`;
export const Title = styled.div`
  font-size: ${(props) => props.theme.font.size.medium};
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.font.weight.semi};
`;
export const Desc = styled.div`
  margin-bottom: ${(props) => props.theme.margin.m2};
  letter-spacing: 0.2rem;
`;
