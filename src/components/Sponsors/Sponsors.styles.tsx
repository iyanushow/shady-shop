import styled from 'styled-components';

export const StyledContainer = styled.div`
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  padding: 1.5rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr) !important;
  }
`;
