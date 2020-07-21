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
