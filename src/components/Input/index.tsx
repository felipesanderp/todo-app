import React from 'react';

import { Container } from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Add new Todo" />
    </Container>
  );
};

export default Input;
