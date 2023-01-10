import React from "react";
import {Flex,Spacer,Text, NativeBaseProvider, Box, Heading, Input } from "native-base";
import styles from './styles';


export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.header}>
        <Input style={styles.search} placeholder="Search" placeholderTextColor="black"/>
        <Flex direction="row" width={300} marginTop={5}>
          <Text fontSize={25}>Announcements</Text>
          <Spacer st/>
          <Text fontSize={25} color="success.500" underline>View All</Text>
        </Flex>
      </Box>
    </NativeBaseProvider>
  );
}