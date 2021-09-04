import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.color.gray};
`;

export const StyledNav = styled.nav`
  height: ${(props) => props.theme.header.headerHeight};
  display: flex !important;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    height: 4rem;
    justify-content: initial;
  }
`;
export const StyledMenu = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: ${(props) => props.theme.header.headerHeight};
    right: -100%;
    width: 70%;
    height: 100%;
    background-color: ${(props) => props.theme.color.white};
    transition: all 0.5s ease-in-out;
    padding-left: 2rem;
    padding-top: 2rem;
    &.show__nav {
      right: 0;
    }
  }
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;
export const StyledLogo = styled.div`
  a.nav__logo {
    font-weight: ${(props) => props.theme.font.weight.bold};
  }
`;
export const StyledUl = styled.ul`
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const StyledListItem = styled.li`
  margin-bottom: ${(props) => props.theme.margin.m4};
  text-transform: capitalize;
  a {
    color: ${(props) => props.theme.color.dark};
    font-weight: ${(props) => props.theme.font.weight.semi};

    &:hover {
      /* color: ${(props) => props.theme.color.mainColor}; */
    }
    &.active {
      color: ${(props) => props.theme.color.mainColor};
    }
  }

  @media (min-width: 768px) {
    margin-left: ${(props) => props.theme.margin.m4};
    margin-bottom: 0;
  }
`;
export const StyledIcons = styled.div`
  font-size: 1.5rem;
  .nav__cart {
    margin-right: ${(props) => props.theme.margin.m2};
  }
  .nav__toggle {
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;
