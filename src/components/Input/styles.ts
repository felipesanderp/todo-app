import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  color: ${(props) => props.theme.colors.text};

  &::placeholder {
    color: #666360;
  }

  input {
    height: 100%;
    width: 100%;
    border: 0;
  }
`;
