import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.color.gray};
`;
export const StyledContainer = styled.div`
  height: calc(100vh - 3rem);
  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 260px;
  }
  & > div {
    padding-top: 6rem;
  }
`;
export const StyledTitle = styled.h1`
  align-self: center;
  font-size: ${(props) => props.theme.font.size.large};
  line-height: 1;
  letter-spacing: 0.5rem;
  margin-bottom: 3.5rem;
  text-transform: uppercase;

  span {
    font-size: ${(props) => props.theme.font.size.medium};
  }
`;
