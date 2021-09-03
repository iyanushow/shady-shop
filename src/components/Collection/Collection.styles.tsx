import styled from 'styled-components';

export const StyledSection = styled.section`
  /* background-color: ${(props) => props.theme.color.gray}; */
  padding: 3rem 0;
`;
export const StyledContainer = styled.div`
  row-gap: 2rem;
`;
export const StyledTitle = styled.h2`
  font-size: ${(props) => props.theme.font.size.medium};
  line-height: 1.2;
  letter-spacing: 0.5rem;
  margin-bottom: ${(props) => props.theme.margin.m2};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.font.weight.semi};
  span {
    font-size: ${(props) => props.theme.font.size.small};
    color: ${(props) => props.theme.color.darkAlt};
  }
  .collection__view {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  background-color: ${(props) => props.theme.color.gray};
  transition: all 0.3s;
  & > div {
    padding: 0.5rem;
  }
  img {
    width: 100px;
  }
  &:hover {
    transform: translateY('-5rem');
  }
`;
