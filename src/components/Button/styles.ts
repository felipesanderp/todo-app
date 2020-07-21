import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#c72828')};
  }

  svg {
    color: #fff;
  }
`;
