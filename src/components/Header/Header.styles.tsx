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
  max-width: ${(props) => props.theme.body.maxWidth};
  display: grid;
  grid-template-columns: 100%;
  column-gap: 2rem;
  width: calc(100% - 3rem);
  margin: 0 ${(props) => props.theme.margin.m3} 0 ${(props) => props.theme.margin.m3};

  height: ${(props) => props.theme.header.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
export const StyledLogo = styled.div`
  a.nav__logo {
    font-weight: ${(props) => props.theme.font.weight.bold};
  }
`;
export const StyledUl = styled.ul``;
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
`;
export const StyledIcons = styled.div`
  font-size: 1.5rem;
  .nav__cart {
    margin-right: ${(props) => props.theme.margin.m2};
  }
  .nav__toggle {
    cursor: pointer;
  }
`;

// .section{
//   padding: 3rem 0;
// }
// .section - title{
//   fontsize:
//   color: dark
//   margin: 4 0 1
//   text-align center
// }
// .section - all{
//   display block
//   font small
//   color dark alt
//   textalign center
//   margin-bottom 2
// }
