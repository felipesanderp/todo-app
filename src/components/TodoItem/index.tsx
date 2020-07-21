import React from 'react';
import { MdDelete } from 'react-icons/md';

import { Container, Item } from './styles';

import Button from '../Button';

interface TodoProps {
  todo: {
    id: string;
    text: string;
    complete: boolean;
  };
  onDelete: () => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, onDelete }) => {
  return (
    <Container>
      <Item>
        <div>
          <ul>
            <li>{todo.text}</li>
          </ul>
        </div>
      </Item>
      <Button
        type="button"
        onClick={onDelete}
        style={{ backgroundColor: '#C72828' }}
      >
        <MdDelete size={19} />
      </Button>
    </Container>
  );
};

export default TodoItem;
