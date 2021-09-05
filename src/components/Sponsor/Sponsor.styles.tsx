import styled from 'styled-components';
export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 80px;
    filter: opacity(70%);

    &:hover {
      filter: none;
    }
  }
`;
