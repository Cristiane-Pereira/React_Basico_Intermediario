import React from 'react';
import { Container } from '../../components/Container';
import { Subtitle } from '../../components/Subtitle';
import { Title } from '../../components/Title';
import { AppContext } from '../../contexts/AppContext';

function ComponentUseContext_3() {
  return (
    <AppContext>
      <center>
        <Container>
          <Title />
          <Subtitle />
        </Container>
      </center>
    </AppContext>
  );
}

export default ComponentUseContext_3;
