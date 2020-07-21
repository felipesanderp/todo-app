import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  height: 60px;
  background: ${(props) => props.theme.colors.background};
  margin: 60px auto;
  border-style: dashed;
  border-color: ${(props) => props.theme.colors.text};
  border-radius: 5px 5px 5px 5px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: -30px;
  }
`;

export const Item = styled.div`
  max-width: 750px;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    color: ${(props) => props.theme.colors.text};
    font-size: 20px;
  }
`;
