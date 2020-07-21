import React, { useState, useEffect, useCallback, useRef } from 'react';
import { uuid } from 'uuidv4';
import { FormHandles, SubmitHandler } from '@unform/core';
import { MdDelete } from 'react-icons/md';

import { FiPlusSquare } from 'react-icons/fi';
import { Container, Form, Content, TodoSyle } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface TodoData {
  id: string;
  text: string;
  complete: boolean;
}

const Todo: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [todos, setTodos] = useState<TodoData[]>(() => {
    const storegedTodos = localStorage.getItem('@TodosList:todo');

    if (storegedTodos) {
      return JSON.parse(storegedTodos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@TodosList:todo', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo: SubmitHandler<TodoData> = useCallback(() => {
    const text = formRef.current?.getFieldValue('new');

    const todo = {
      id: uuid(),
      text,
      complete: false,
    };

    setTodos([...todos, todo]);

    formRef.current?.clearField('new');
  }, [todos]);

  const handleDeleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [setTodos, todos],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleAddTodo}>
        <Input name="new" placeholder="Add new Todo" />
        <Button type="submit">
          <FiPlusSquare size={19} />
        </Button>
      </Form>
      {todos.map((todo) => (
        <Content>
          <TodoSyle key={todo.id}>
            <div>
              <ul>
                <li>{todo.text}</li>
              </ul>
            </div>
          </TodoSyle>
          <Button type="button" onClick={() => handleDeleteTodo(todo.id)}>
            <MdDelete size={19} />
          </Button>
        </Content>
      ))}
    </Container>
  );
};

export default Todo;
