import styled from "styled-components";

export const Container = styled.div`
  height: 130px;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 28px;
  }
`;
