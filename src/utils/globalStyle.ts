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
  button.button__cta {
    text-transform: capitalize;
    display: inline-block;
    background-color: ${(props) => props.theme.color.mainColor};
    color: ${(props) => props.theme.color.white};
    padding: 1rem 2rem;
    border: none;
    font-size: ${(props) => props.theme.font.size.tiny};
    font-weight: ${(props) => props.theme.font.weight.semi};
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.color.mainColorAlt};
    }
  }
  .bd__grid{
    max-width: ${(props) => props.theme.body.maxWidth};
  display: grid;
  grid-template-columns: 100%;
  column-gap: 2rem;
  width: calc(100% - 3rem);
  margin: 0 ${(props) => props.theme.margin.m3} 0 ${(props) => props.theme.margin.m3};

  }

  /*sections*/
    
  .section__title{
    font-size: ${(props) => props.theme.font.size.small};
    color: ${(props) => props.theme.color.dark};
    margin:2rem 0 .5rem;
    text-align: center;
  }
  .section__all{
    display: block;
    font-size:${(props) => props.theme.font.size.tiny};
    color:${(props) => props.theme.color.darkAlt};
    text-align:center;
    margin-bottom:1rem;
  }

`;
