import {
  StyledHeader,
  StyledNav,
  StyledMenu,
  StyledUl,
  StyledListItem,
  StyledIcons,
  StyledLogo,
} from './Header.styles';
import { Cart, Menu } from '@styled-icons/boxicons-regular';
import { useState } from 'react';
interface IProps {
  data: { id: number; title: string }[];
}

const Header = ({ data }: IProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeArr, setActiveArr] = useState(data.map((_, i) => i === 0 || false));
  const toggleNav = (): void => {
    setIsNavOpen((prev) => !prev);
  };
  const setActive = (id: number): void => {
    setActiveArr((prev) => prev.map((_, i) => i === id));
    setIsNavOpen(false);
  };
  return (
    <StyledHeader>
      <StyledNav className='bd__grid'>
        <StyledLogo>
          <a href='#' className='nav__logo'>
            SHADY
          </a>
        </StyledLogo>
        <StyledMenu className={isNavOpen ? 'show__nav' : undefined}>
          <StyledUl>
            {data.map(
              ({ id, title }: { id: number; title: string }): JSX.Element => (
                <StyledListItem key={id} onClick={(): void => setActive(id - 1)}>
                  {console.log(activeArr[id - 1])}
                  <a href={`#${title}`} className={`nav__link ${activeArr[id - 1] && 'active'}`}>
                    {title}
                  </a>
                </StyledListItem>
              )
            )}
          </StyledUl>
        </StyledMenu>

        <StyledIcons>
          <Cart className='nav__cart' size={25} />
          <Menu id='nav-toggle' className='nav__toggle' size={25} onClick={toggleNav} />
        </StyledIcons>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
