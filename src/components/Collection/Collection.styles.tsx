import styled from 'styled-components';

export const StyledContainer = styled.div`
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-template-rows: 1fr;
  }
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
    @media (min-width: 768px) {
      width: 130px !important;
    }
  }
  &:hover {
    transform: translateY('-5rem');
  }

  @media (min-width: 768px) {
    padding: 0.5rem 3rem 0 !important;
  }
`;
