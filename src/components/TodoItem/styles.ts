import styled, { css } from "styled-components";

interface TodoItemProps {
  isCompleted: boolean;
}

export const Container = styled.div<TodoItemProps>`
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

  cursor: pointer;
  transition: opacity 0.4s;

  ${(props) =>
    props.isCompleted &&
    css`
      text-decoration: line-through;
      opacity: 0.3;
    `}
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
