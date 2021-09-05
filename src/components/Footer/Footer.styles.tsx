import styled from 'styled-components';
import { StyledSection } from '../styledcomponents/Section.styles';

export const Section = styled(StyledSection)`
  background: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.white};

  .footer__copy {
    border-top: 1px solid ${(props) => props.theme.color.darkAlt};
    padding-top: 3rem;
    text-align: center;
    color: ${(props) => props.theme.color.darkAlt};
    font-size: ${(props) => props.theme.font.size.tiny};
  }
`;
export const StyledContainer = styled.div`
  row-gap: 1.5rem;
  margin-bottom: ${(props) => props.theme.margin.m4};
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr) !important;
    padding: 2rem 0;
  }
`;
export const Box = styled.div`
  .footer__title {
    margin-bottom: ${(props) => props.theme.margin.m1};
    text-transform: uppercase;
  }
  li {
    text-transform: capitalize;
  }
  p.footer__deal {
    margin-bottom: ${(props) => props.theme.margin.m2};
  }
  .footer__store {
    width: 100px;
    &:not(last-of-type) {
      margin-right: 1rem;
    }
  }
  a {
    color: ${(props) => props.theme.color.darkAlt};
    &:hover {
      text-decoration: underline;
    }
  }
  .footer__social {
    font-size: 1.3rem;
    margin-right: ${(props) => props.theme.margin.m1};
  }
`;
