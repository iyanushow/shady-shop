import styled from 'styled-components';
export const StyledProduct = styled.div`
  transition: 0.3s;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;
export const StyledBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.color.gray};
`;
export const New = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.3rem 0.75rem;
  font-size: ${(props) => props.theme.font.size.tiny};
  background-color: ${(props) => props.theme.color.mainColor};
  color: ${(props) => props.theme.color.white};
  text-transform: uppercase;
`;
export const StyledImg = styled.img``;
export const FeaturedProduct = styled.div`
  text-align: center;
`;
export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.margin.m1};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.font.size.default};
  text-align: center;
  padding-top: 3rem;
`;
export const Price = styled.span`
  font-weight: ${(props) => props.theme.font.weight.semi};
  color: ${(props) => props.theme.color.darkAlt};
`;
