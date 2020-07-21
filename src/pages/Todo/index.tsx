import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Todo: React.FC = () => {
  return (
    <Container>
      <Input />
      <Button type="submit">
        <FiPlusSquare size={19} />
      </Button>
    </Container>
  );
};

export default Todo;
