import styled from 'styled-components';
import { StyledSection } from '../styledcomponents/Section.styles';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.5fr;

  input[type='text'] {
    outline: none;
    border: none;
    background: ${(props) => props.theme.color.gray};
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    width: 400px;
    margin: 0 auto;
  }
`;
export const Section = styled(StyledSection)`
  text-align: center;
`;
export const StyledContainer = styled.div``;
export const Box = styled.div`
  .description {
    margin-bottom: ${(props) => props.theme.margin.m2};
    font-size: ${(props) => props.theme.font.size.tiny};
    color: ${(props) => props.theme.color.darkAlt};
    text-transform: capitalize;
  }
`;
