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
    @media (min-width: 768px) {
      width: 370px;
    }

    @media (min-width: 1440px) {
      right: 15%;
    }
  }
  & > div {
    padding-top: 6rem;
  }
  .home__data {
    @media (min-width: 768px) {
      padding: 0;
      height: max-content;
      align-self: center;
    }

    @media (min-width: 1440px) {
      padding-left: 7rem;
    }
  }
  @media (min-width: 768px) {
    height: 100vh;
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

  @media (min-width: 768px) {
    line-height: 0.8;
    letter-spacing: 1.5rem;
  }
`;
