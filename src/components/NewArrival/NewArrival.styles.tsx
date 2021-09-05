import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.gray};
  overflow: hidden;

  div.new__link {
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(229, 89, 71, 0.2);
    transition: 0.3s;
  }

  &:hover div.new__link {
    bottom: 0;
  }
`;
