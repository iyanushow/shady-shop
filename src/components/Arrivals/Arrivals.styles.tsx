import styled from 'styled-components';

export const StyledContainer = styled.div`
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr) !important;
  }
`;
