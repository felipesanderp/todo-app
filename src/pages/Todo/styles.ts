import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div``;

export const Form = styled(Unform)`
  max-width: 700px;
  width: 100%;
  height: 60px;
  margin: -30px auto;

  background: #fff;
  border-radius: 5px;

  padding: 10px;
  color: #666360;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
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

export const TodoSyle = styled.div`
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
