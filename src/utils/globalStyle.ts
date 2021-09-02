import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 html{
   scroll-behavior: smooth;
 }
  *,*::before,*::after{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => props.theme.font.size.default};
    color: ${(props) => props.theme.color.dark};
    line-height: 1.6;
    margin: ${(props) => props.theme.header.headerHeight} 0 0 0;

  }
  ul{
    list-style-type: none;
  }
  a,a:active{
    text-decoration: none;
    color: ${(props) => props.theme.color.dark}
  }
  img{
    max-width: 100%;
    height: auto;
  }
`;
