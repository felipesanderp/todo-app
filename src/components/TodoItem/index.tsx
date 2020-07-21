import React from "react";
import { MdDelete } from "react-icons/md";

import { Container, Item } from "./styles";

import Button from "../Button";

interface TodoProps {
  todo: {
    id: string;
    text: string;
    complete: boolean;
  };
  onDelete: () => void;
  onCompleted: () => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, onDelete, onCompleted }) => {
  return (
    <Container isCompleted={todo.complete}>
      <Item onClick={onCompleted}>
        <div>
          <ul>
            <li>{todo.text}</li>
          </ul>
        </div>
      </Item>
      <Button
        type="button"
        onClick={onDelete}
        style={{ backgroundColor: "#C72828" }}
      >
        <MdDelete size={19} />
      </Button>
    </Container>
  );
};

export default TodoItem;
