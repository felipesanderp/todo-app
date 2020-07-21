import React, { useState, useEffect, useCallback, useRef } from 'react';
import { uuid } from 'uuidv4';
import { FormHandles, SubmitHandler } from '@unform/core';

import { FiPlusSquare } from 'react-icons/fi';
import { Container, Form } from './styles';

import TodoItem from '../TodoItem';
import Input from '../Input';
import Button from '../Button';

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
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => handleDeleteTodo(todo.id)}
        />
      ))}
    </Container>
  );
};

export default Todo;
