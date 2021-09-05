import styled from 'styled-components';

export const StyledContainer = styled.div`
  row-gap: 2rem;
  text-transform: uppercase;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr) !important;
  }
`;
