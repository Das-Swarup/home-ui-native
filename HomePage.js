import React from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

const HomePage = () => {
  return (
    <Container>
      <Header>
        <Text>NativeBase Example</Text>
      </Header>
      <Content>
        <Button>
          <Text>Click me!</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default HomePage;